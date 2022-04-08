import BaseController from './BaseController.js';
import Patient from '../models/patientModel.js';

class PatientController extends BaseController {
  constructor() {
    super(Patient);
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
      const patients = await this._model.find({}).populate({ path: 'healthInsurances.healthInsuranceCompany' });
      res.status(200).json(patients);
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
      const model = await this._model.findById(req.params.id).populate({ path: 'healthInsurances.healthInsuranceCompany' });
      if (model) {
        return res.status(200).json(model);
      } else {
        return res.status(404).json('Record not found');
      }
    }

  // /**
  //  * @desc   Create patient
  //  * @route  POST /api/patient/:id
  //  * @access Private
  //  *
  //  * @param {Object} req The request object
  //  * @param {Object} res The response object
  //  * @param {function} next The callback to the next program handler
  //  * @return {Object} res The response object
  //  */
  // async create(req, res, next) {
  //   const createModel = new this._model(req.body);
  //   const savedModel = await createModel.save();
  //   return res.status(200).json(savedModel);
  // }
}

export default PatientController;
