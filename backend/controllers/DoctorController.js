import BaseController from './BaseController.js';
import Doctor from '../models/doctorModel.js';

class DoctorController extends BaseController {
  constructor() {
    super(Doctor);
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
    const filterBy = req.query.filterBy;
    const rgx = (pattern) => new RegExp(`.*${pattern}.*`, 'i');
    const searchRgx = rgx(filterBy);
    const filter = {};
    if (status) {
      filter.status = status;
    }

    if (filterBy) {
      const filterByParsed = parseInt(filterBy);
      filter.$or = [
        { firstName: { $regex: searchRgx } },
        { lastName: { $regex: searchRgx } },
        { specialities: { $in: [searchRgx] } },
      ];
      if (filterByParsed) {
        filter.$or.push({ nationalId: filterByParsed });
      }
    }

    let finalFilter = {};
    if (filter.status && filter.$or) {
      finalFilter.$and = [{ status: filter.status }, { $or: filter.$or }];
    } else {
      finalFilter = filter;
    }

    const models = await this._model.find(finalFilter);
    res.status(200).json(models);
  }
}

export default DoctorController;
