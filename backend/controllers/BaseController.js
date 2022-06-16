class BaseController {
  /**
   * @param {Model} model The default model object
   * for the controller. Will be required to create
   * an instance of the controller
   */
  constructor(model) {
    if (new.target === BaseController) {
      throw new TypeError('Cannot construct Abstract instances directly');
    }
    this._model = model;
    this.getAll = this.getAll.bind(this);
    this.getAllPaginated = this.getAllPaginated.bind(this);
    this.getById = this.getById.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.inactivate = this.inactivate.bind(this);
    this.activate = this.activate.bind(this);
    this.delete = this.delete.bind(this);
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
      const models = await this._model.find({ status: status });
      res.status(200).json(models);
    } else {
      const models = await this._model.find({});
      res.status(200).json(models);
    }
  }

  /**
   * @desc   Get All <model> with pagination
   * @route  GET /api/<model>
   * @access Private
   *
   * @param {Object} req The request object
   * @param {Object} res The response object
   * @param {function} next The callback to the next program handler
   * @return {Object} res The response object
   */
  async getAllPaginated(req, res, next) {
    const { page = 1, limit = 10 } = req.query;
    const count = await this._model.countDocuments();
    const totalPages = Math.ceil(count / limit);
    if (page <= totalPages) {
      const models = await this._model
        .find({})
        .limit(limit * 1)
        .skip((page - 1) * limit);
      res
        .status(200)
        .json({
          models,
          totalPages: totalPages,
          currentPage: page,
        });
    } else {
      res.status(200).json("No se encontraron registros.");
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
    const model = await this._model.findById(req.params.id);
    if (model) {
      return res.status(200).json(model);
    } else {
      return res.status(404).json('Registro no encontrado.');
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
    const createModel = new this._model(req.body);
    const savedModel = await createModel.save();
    req.params = {
      ...req.params,
      id: savedModel._id,
    };
    return this.getById(req, res, next);
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
    let model = await this._model.findById(req.params.id);
    if (model) {
      if (model.__v !== req.body.__v) {
        return res
          .status(409)
          .json(
            'El Registro ha sido modificado en otra transacción. Debe recargar la página para ver los cambios.'
          );
      }

      for (const [key, value] of Object.entries(req.body)) {
        model[key] = value;
      }
      await model.save();
      return this.getById(req, res, next);
    } else {
      return res.status(404).json('Registro no encontrado.');
    }
  }

  /**
   * @desc   Delete <model>
   * @route  DELETE /api/<model>/:id
   * @access Private
   *
   * @param {Object} req The request object
   * @param {Object} res The response object
   * @param {function} next The callback to the next program handler
   * @return {Object} res The response object
   */
  async delete(req, res, next) {
    let model = await this._model.deleteOne({ _id: req.params.id });
    return res.status(200).json('Registro borrado.');
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
    let model = await this._model.findById(req.params.id);

    if (model) {
      model.status = 'inactive';
      const updatedModel = await model.save();
      return res.status(200).json(updatedModel);
    } else {
      return res.status(404).json('Registro no encontrado.');
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
    let model = await this._model.findById(req.params.id);

    if (model) {
      model.status = 'active';
      const updatedModel = await model.save();
      return res.status(200).json(updatedModel);
    } else {
      return res.status(404).json('Registro no encontrado.');
    }
  }
}

export default BaseController;
