import BaseController from './BaseController.js';
import Patient from '../models/patientModel.js';
import HealthRecord from '../models/healthRecordModel.js';
import Prescription from '../models/prescriptionModel.js';
import Visit from '../models/visitModel.js';

class PatientController extends BaseController {
  constructor() {
    super(Patient);

    this.updateHealthRecord = this.updateHealthRecord.bind(this);
    this.getHealthRecord = this.getHealthRecord.bind(this);
    this._applyVisibilityByUserRole =
      this._applyVisibilityByUserRole.bind(this);
    this.getVisits = this.getVisits.bind(this);
    this.createVisit = this.createVisit.bind(this);
    this.updateVisit = this.updateVisit.bind(this);
  }

  /**
   * @desc   Get All patient
   * @route  GET /api/patient
   * @access Private
   *
   * @param {Object} req The request object
   * @param {Object} res The response object
   * @param {function} next The callback to the next program handler
   * @return {Object} res The response object
   */
  async getAll(req, res, next) {
    const status = req.query.status;
    const filterBy = req.query.filterBy;

    const filter = {};
    if (status) {
      filter.status = status;
    }

    if (filterBy) {
      const rgx = (pattern) => new RegExp(`.*${pattern}.*`, 'i');
      const searchRgx = rgx(filterBy);
      const filterByParsed = parseInt(filterBy);
      filter.$or = [
        { firstName: { $regex: searchRgx } },
        { lastName: { $regex: searchRgx } },
      ];
      if (filterByParsed) {
        filter.$or.push(
          { nationalId: filterByParsed },
          { 'healthRecord.healthRecordNumber': filterByParsed }
        );
      }
    }

    let finalFilter = {};
    if (filter.status && filter.$or) {
      finalFilter.$and = [{ status: filter.status }, { $or: filter.$or }];
    } else {
      finalFilter = filter;
    }

    const patients = await this._model
      .find(finalFilter)
      .populate({
        path: 'tags',
      })
      .populate({
        path: 'healthInsurances.healthInsuranceCompany',
      })
      .populate({
        path: 'healthRecord',
      });

    let patientsDTO = patients;
    if (!req.user.isAdmin) {
      if (req.user.isDoctor) {
        patientsDTO = patients.filter((x) =>
          x.healthRecord?.visits.includes((x) =>
            x.doctor._id.equals(req.user.doctor?._id)
          )
        ); // TODO: pasar al query
      } else {
        // TODO: analizar si hace "TANTA falta" el filtro de privacidad en el getAll
        patientsDTO = patients.map((x) =>
          this._applyVisibilityByUserRole(req.user, x)
        );
      }
    }
    res.status(200).json(patientsDTO);
  }

  /**
   * @desc   Get By ID patient
   * @route  GET /api/patient/:id
   * @access Private
   *
   * @param {Object} req The request object
   * @param {Object} res The response object
   * @param {function} next The callback to the next program handler
   * @return {Object} res The response object
   */
  async getById(req, res, next) {
    const model = await this._model
      .findById(req.params.id)
      .populate({
        path: 'tags',
      })
      .populate({
        path: 'healthInsurances.healthInsuranceCompany',
      })
      .populate({
        path: 'healthRecord',
        populate: { path: 'drugsInfo.drugs' },
      })
      .populate({
        path: 'healthRecord',
        populate: {
          path: 'prescriptions.drugs',
          populate: { path: 'drugs.drug' },
        },
      });
    if (model) {
      return res
        .status(200)
        .json(this._applyVisibilityByUserRole(req.user, model));
    } else {
      return res.status(404).json('Paciente inexistente.');
    }
  }

  /**
   * @desc   Create patient
   * @route  POST /api/patient/:id
   * @access Private
   *
   * @param {Object} req The request object
   * @param {Object} res The response object
   * @param {function} next The callback to the next program handler
   * @return {Object} res The response object
   */
  async create(req, res, next) {
    const patient = new this._model(req.body);
    const healthRecordNumber = new Number(patient.nationalId);
    const healthRecord = new HealthRecord({
      healthRecordNumber: healthRecordNumber,
    });
    patient.healthRecord = healthRecord;
    const savedPatient = await patient.save();
    healthRecord.patient = savedPatient._id;
    await healthRecord.save();
    req.params = {
      ...req.params,
      id: savedPatient._id,
    };
    return this.getById(req, res, next);
  }

  /**
   * @desc   Get patient health record
   * @route  GET /api/patient/:id/healthRecord
   * @access Private
   *
   * @param {Object} req The request object
   * @param {Object} res The response object
   * @param {function} next The callback to the next program handler
   * @return {Object} res The response object
   */
  async getHealthRecord(req, res, next) {
    const patient = await this._model.findById(req.params.id);
    if (patient) {
      const healthRecord = await HealthRecord.findById(patient.healthRecord.id);
      if (healthRecord) {
        return res.status(200).json(healthRecord);
      } else {
        return res
          .status(404)
          .json('Historia Clínica de Paciente inexistente.');
      }
    } else {
      return res.status(404).json('Paciente inexistente.');
    }
  }

  /**
   * @desc   Update patient helath record
   * @route  PUT /api/patient/:id/healthRecord
   * @access Private
   *
   * @param {Object} req The request object
   * @param {Object} res The response object
   * @param {function} next The callback to the next program handler
   * @return {Object} res The response object
   */
  async updateHealthRecord(req, res, next) {
    const patient = await this._model.findById(req.params.id);
    if (patient) {
      if (patient.__v !== req.body.patientVersion) {
        return res
          .status(409)
          .json(
            'El Paciente ha sido modificado en otra transacción. Debe recargar la página para ver los cambios.'
          );
      }
      const healthRecord = await HealthRecord.findById(req.body.id);
      if (healthRecord.__v !== req.body.__v) {
        return res
          .status(409)
          .json(
            'La Historia Clínica del Paciente ha sido modificada en otra transacción. Debe recargar la página para ver los cambios.'
          );
      }
      for (const [key, value] of Object.entries(req.body)) {
        healthRecord[key] = value;
      }
      await healthRecord.save();
      return this.getById(req, res, next);
    } else {
      return res.status(404).json('Paciente inexistente.');
    }
  }

  async getVisits(req, res, next) {
    const patient = await this._model.findById(req.params.id);
    if (patient) {
      const visits = await Visit.find({
        healthRecord: patient.healthRecord?._id,
      }).sort({ createdAt: 'desc' }).populate({path: 'doctor'});
      if (visits) {
        return res.status(200).json(visits);
      } else {
        return res
          .status(404)
          .json('El Paciente no tiene consultas registradas.');
      }
    } else {
      return res.status(404).json('Paciente inexistente.');
    }
  }

  async updateVisit(req, res, next) {
    const patient = await this._model.findById(req.params.id);
    if (patient) {
      if (patient.__v !== req.body.patientVersion) {
        return res
          .status(409)
          .json(
            'El Paciente ha sido modificado en otra transacción. Debe recargar la página para ver los cambios.'
          );
      }
      const healthRecord = await HealthRecord.findById(req.body.id);
      if (healthRecord.__v !== req.body.__v) {
        return res
          .status(409)
          .json(
            'La Historia Clínica del Paciente ha sido modificada en otra transacción. Debe recargar la página para ver los cambios.'
          );
      }
      for (const [key, value] of Object.entries(req.body)) {
        healthRecord[key] = value;
      }
      await healthRecord.save();
      return this.getById(req, res, next);
    } else {
      return res.status(404).json('Paciente inexistente.');
    }
  }

  async createVisit(req, res, next) {
    const patient = await this._model.findById(req.params.id);
    if (patient) {
      if (patient.__v !== req.body.patientVersion) {
        return res
          .status(409)
          .json(
            'El Paciente ha sido modificado en otra transacción. Debe recargar la página para ver los cambios.'
          );
      }
      const healthRecord = await HealthRecord.findById(req.body.id);
      if (healthRecord.__v !== req.body.__v) {
        return res
          .status(409)
          .json(
            'La Historia Clínica del Paciente ha sido modificada en otra transacción. Debe recargar la página para ver los cambios.'
          );
      }
      for (const [key, value] of Object.entries(req.body)) {
        healthRecord[key] = value;
      }
      await healthRecord.save();
      return this.getById(req, res, next);
    } else {
      return res.status(404).json('Paciente inexistente.');
    }
  }

  _applyVisibilityByUserRole(user, patientModel) {
    const patient = JSON.parse(JSON.stringify(patientModel));
    //TODO: improve user role visibility and security
    const hrWithVisibilityApplied = {
      ...patient.healthRecord,
      pathologicalBackground: null,
      noPathologicalBackground: null,
      hereditaryBackground: null,
      psychiatricBackgroud: null,
      nutritionalBackgroud: null,
      allergiesInfo: null,
      drugsInfo: null,
      laboratoryExams: [],
      studyExams: [],
      visits: [],
    };
    if (!user.isAdmin) {
      if (user.isReceptionist) {
        patient.healthRecord = hrWithVisibilityApplied;
      }
      // else if (user.isDoctor && !patient.healthRecord ?.visits.includes(x => x.doctor._id.equals(user.doctor._id))){
      //     patient.healthRecord = hrWithVisibilityApplied;
      // }
    }
    return patient;
  }
}

export default PatientController;
