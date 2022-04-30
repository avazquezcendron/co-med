import BaseController from './BaseController.js';
import AppointmentConfig from '../models/appointmentConfigModel.js';

class AppointmentConfigController extends BaseController {
  constructor() {
    super(AppointmentConfig);
  }
  
/**
   * @desc   Get All <model>
   * @route  GET /api/<model>
   * @access Private
   *
   * @param {Object} req The request object
   * @param {Object} res The response object
   * @param {function} next The callback to the next program handler
   * @return {Object} res The response object
   */
 async getAll(req, res, next) {
  const status = req.query.status;
  if (status) {
    const models = await this._model.find({status: status}).populate({
      path: 'doctor',
    }).populate({
      path: 'sessions',
    });
    res.status(200).json(models);
  } else {
    const models = await this._model.find({}).populate({
      path: 'doctor',
    }).populate({
      path: 'sessions',
    });
    res.status(200).json(models);
  }    
}

/**
 * @desc   Get By ID <model>
 * @route  GET /api/<model>/:id
 * @access Private
 *
 * @param {Object} req The request object
 * @param {Object} res The response object
 * @param {function} next The callback to the next program handler
 * @return {Object} res The response object
 */
async getById(req, res, next) {
  const model = await this._model.findById(req.params.id).populate({
    path: 'doctor',
  }).populate({
    path: 'sessions',
  });
  if (model) {
    return res.status(200).json(model);
  } else {
    return res.status(404).json('Registro no encontrado.');
  }
}

}

export default AppointmentConfigController;