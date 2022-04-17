import BaseController from './BaseController.js';
import DrugModel from '../models/drugModel.js';
import StudyTypeModel from '../models/studyTypeModel.js';

class BaseEntityController extends BaseController {
  constructor() {
    super();

    this._modelsDic = new Map();
    this._modelsDic.set('drug', DrugModel);
    this._modelsDic.set('studytype', StudyTypeModel);
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
    if (this._modelsDic.has(req.params.entity)) {
      super._model = this._modelsDic.get(req.params.entity);
      return super.getAll(req, res, next);  
    } else {
      return res.status(404).json("Invalid route.");
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
    if (this._modelsDic.has(req.params.entity)) {
      super._model = this._modelsDic.get(req.params.entity);
      return super.getById(req, res, next);  
    } else {
      return res.status(404).json("Invalid route.");
    }    
  }

  /**
   * @desc   Create <model>
   * @route  POST /api/<model>/:id
   * @access Private
   *
   * @param {Object} req The request object
   * @param {Object} res The response object
   * @param {function} next The callback to the next program handler
   * @return {Object} res The response object
   */
  async create(req, res, next) {
    if (this._modelsDic.has(req.params.entity)) {
      super._model = this._modelsDic.get(req.params.entity);
      return super.create(req, res, next);  
    } else {
      return res.status(404).json("Invalid route.");
    } 
  }

  /**
   * @desc   Update <model>
   * @route  PUT /api/<model>/:id
   * @access Private
   *
   * @param {Object} req The request object
   * @param {Object} res The response object
   * @param {function} next The callback to the next program handler
   * @return {Object} res The response object
   */
  async update(req, res, next) {
    if (this._modelsDic.has(req.params.entity)) {
      super._model = this._modelsDic.get(req.params.entity);
      return super.update(req, res, next);  
    } else {
      return res.status(404).json("Invalid route.");
    } 
  }

  /**
   * @desc   Inactivate <model>
   * @route  GET /api/<model>/:id/inactivate
   * @access Private
   *
   * @param {Object} req The request object
   * @param {Object} res The response object
   * @param {function} next The callback to the next program handler
   * @return {Object} res The response object
   */
  async inactivate(req, res, next) {
    if (this._modelsDic.has(req.params.entity)) {
      super._model = this._modelsDic.get(req.params.entity);
      return super.inactivate(req, res, next);  
    } else {
      return res.status(404).json("Invalid route.");
    }
  }
    
    /**
   * @desc   Activate <model>
   * @route  GET /api/<model>/:id/activate
   * @access Private
   *
   * @param {Object} req The request object
   * @param {Object} res The response object
   * @param {function} next The callback to the next program handler
   * @return {Object} res The response object
   */
  async activate(req, res, next) {
    if (this._modelsDic.has(req.params.entity)) {
      super._model = this._modelsDic.get(req.params.entity);
      return super.activate(req, res, next);  
    } else {
      return res.status(404).json("Invalid route.");
    }
  }
}

export default BaseEntityController;