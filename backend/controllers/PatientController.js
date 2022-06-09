import BaseController from './BaseController.js';
import Patient from '../models/patientModel.js';
import HealthRecord from '../models/healthRecordModel.js';
import Prescription from '../models/prescriptionModel.js';
import Visit from '../models/visitModel.js';
import StudyExam from '../models/studyExamModel.js';
import LaboratoryExam from '../models/laboratoryExamModel.js';
import Doctor from '../models/doctorModel.js';

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
    this.getPrescriptions = this.getPrescriptions.bind(this);
    this.getLaboratoryExams = this.getLaboratoryExams.bind(this);
    this.createLaboratoryExam = this.createLaboratoryExam.bind(this);
    this.getStudyExams = this.getStudyExams.bind(this);
    this.createStudyExam = this.createStudyExam.bind(this);
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
      .collation({locale: "es" })
      .sort({ firstName: 'asc' })
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
        const dr = await Doctor.findById(req.user.doctor._id);
        patientsDTO = patients.filter((x) => dr.patients?.includes(x.id)); // TODO: pasar al query
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
        path: 'nextAppointments',
        options: { sort: { createdAt: -1 } },
        populate: { path: 'doctor' },
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
          path: 'visits',
          select: 'createdAt',
          options: { limit: 1, sort: { createdAt: -1 } },
        },
      });
    // .populate({
    //   path: 'healthRecord',
    //   populate: { path: 'prescriptions' },
    // })
    // .populate({
    //   path: 'healthRecord.prescriptions',
    //   populate: { path: 'drugs', populate: { path: 'drugs.drug' } },
    // });
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
      const startDate = req.query.startDate;
      const endDate = req.query.endDate;

      let filterDates = {};
      if (startDate && endDate) {
        filterDates = { createdAt: { $gte: startDate, $lte: endDate } };
      }

      let filterDr = {};
      if (!req.user.isAdmin && req.user.isDoctor) {
        filterDr = { doctor: req.user.doctor?._id };
      }

      const finalFilter = {
        ...filterDates,
        ...filterDr,
        healthRecord: patient.healthRecord?._id,
      };

      const visits = await Visit.find(finalFilter)
        .sort({ createdAt: 'desc' })
        .populate({ path: 'doctor' })
        .populate({ path: 'studyOrders', populate: { path: 'studyType' } })
        .populate({
          path: 'laboratoryOrders',
          populate: { path: 'laboratories' },
        })
        .populate({
          path: 'prescriptions',
          populate: { path: 'drugs', populate: { path: 'drug' } },
        });
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
    /*
      NO VISIT UPDATE FOR THE MOMENT
    */
    // const patient = await this._model.findById(req.params.id);
    // if (patient) {
    //   if (patient.__v !== req.body.patientVersion) {
    //     return res
    //       .status(409)
    //       .json(
    //         'El Paciente ha sido modificado en otra transacción. Debe recargar la página para ver los cambios.'
    //       );
    //   }
    //   const visit = await Visit.findById(req.body.id);
    //   if (visit.__v !== req.body.__v) {
    //     return res
    //       .status(409)
    //       .json(
    //         'La Consulta del Paciente ha sido modificada en otra transacción. Debe recargar la página para ver los cambios.'
    //       );
    //   }
    //   for (const [key, value] of Object.entries(req.body)) {
    //     visit[key] = value;
    //   }
    //   await visit.save();
    //   return this.getById(req, res, next);
    // } else {
    //   return res.status(404).json('Paciente inexistente.');
    // }
  }

  async createVisit(req, res, next) {
    const patient = await this._model.findById(req.params.id);
    if (patient) {
      // const healthRecord = await HealthRecord.findById(
      //   patient.healthRecord._id
      // );
      const doctor = await Doctor.findById(req.body.doctor);
      const visit = new Visit(req.body);
      visit.prescriptions = [];
      if (req.body.prescriptions && req.body.prescriptions.length > 0) {
        for (const x of req.body.prescriptions) {
          const prescription = new Prescription(x);
          prescription.healthRecord = patient.healthRecord._id;
          prescription.doctor = doctor._id;
          prescription.visit = visit._id;
          await prescription.save();
          visit.prescriptions.push(prescription);
          // healthRecord.prescriptions.push(prescription);
        }
      }
      if (!doctor.patients.includes(patient.id)) {
        doctor.patients.push(patient);
        visit.firstVisit = true;
      }
      await visit.save();
      // healthRecord.visits.push(visit);
      // await healthRecord.save();
      doctor.visits.push(visit);
      await doctor.save();
      return this.getById(req, res, next);
    } else {
      return res.status(404).json('Paciente inexistente.');
    }
  }

  async getPrescriptions(req, res, next) {
    const patient = await this._model.findById(req.params.id);
    if (patient) {
      const startDate = req.query.startDate;
      const endDate = req.query.endDate;

      let filterDates = {};
      if (startDate && endDate) {
        filterDates = { createdAt: { $gte: startDate, $lte: endDate } };
      }

      const finalFilter = {
        ...filterDates,
        healthRecord: patient.healthRecord?._id,
      };

      const prescriptions = await Prescription.find(finalFilter)
        .sort({ createdAt: 'desc' })
        .populate({ path: 'drugs', populate: { path: 'drug' } })
        .populate({ path: 'doctor' });
      if (prescriptions) {
        return res.status(200).json(prescriptions);
      } else {
        return res
          .status(404)
          .json('El Paciente no tiene prescripciones registradas.');
      }
    } else {
      return res.status(404).json('Paciente inexistente.');
    }
  }

  async getLaboratoryExams(req, res, next) {
    const patient = await this._model.findById(req.params.id);
    if (patient) {
      const startDate = req.query.startDate;
      const endDate = req.query.endDate;

      let filterDates = {};
      if (startDate && endDate) {
        filterDates = { date: { $gte: startDate, $lte: endDate } };
      }

      const finalFilter = {
        ...filterDates,
        healthRecord: patient.healthRecord?._id,
      };

      const laboratoryExams = await LaboratoryExam.find(finalFilter)
        .sort({ date: 'desc' })
        .populate({
          path: 'laboratories',
          populate: { path: 'laboratoryType' },
        });
      if (laboratoryExams) {
        return res.status(200).json(laboratoryExams);
      } else {
        return res
          .status(404)
          .json('El Paciente no tiene exámenes de laboratorio registrados.');
      }
    } else {
      return res.status(404).json('Paciente inexistente.');
    }
  }

  async createLaboratoryExam(req, res, next) {
    const patient = await this._model.findById(req.params.id);
    if (patient) {
      // const healthRecord = await HealthRecord.findById(
      //   patient.healthRecord._id
      // );
      const laboratoryExam = new LaboratoryExam(req.body);
      laboratoryExam.healthRecord = patient.healthRecord._id;
      await laboratoryExam.save();
      // healthRecord.laboratoryExams.push(laboratoryExam);
      // await healthRecord.save();
      return this.getById(req, res, next);
    } else {
      return res.status(404).json('Paciente inexistente.');
    }
  }

  async getStudyExams(req, res, next) {
    const patient = await this._model.findById(req.params.id);
    if (patient) {
      const startDate = req.query.startDate;
      const endDate = req.query.endDate;

      let filterDates = {};
      if (startDate && endDate) {
        filterDates = { date: { $gte: startDate, $lte: endDate } };
      }

      const finalFilter = {
        ...filterDates,
        healthRecord: patient.healthRecord?._id,
      };

      const studyExams = await StudyExam.find(finalFilter)
        .sort({ date: 'desc' })
        .populate({
          path: 'studyType',
        });
      if (studyExams) {
        return res.status(200).json(studyExams);
      } else {
        return res
          .status(404)
          .json('El Paciente no tiene estudios complementarios registrados.');
      }
    } else {
      return res.status(404).json('Paciente inexistente.');
    }
  }

  async createStudyExam(req, res, next) {
    const patient = await this._model.findById(req.params.id);
    if (patient) {
      const studyExam = new StudyExam(req.body);
      studyExam.healthRecord = patient.healthRecord._id;
      await studyExam.save();
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
