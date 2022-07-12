import BaseController from './BaseController.js';
import NursingService from '../models/nursingServiceModel.js';

class NursingServiceController extends BaseController {
  constructor() {
    super(NursingService);
  }

  async getAll(req, res, next) {
    const { month, year } = req.query;
    const count = await this._model.countDocuments();
    if (month && year) {
      const models = await this._model
        .find({
          $expr: {
            $and: [
              {
                $eq: [{ $month: '$date' }, month],
              },
              {
                $eq: [{ $year: '$date' }, year],
              },
            ],
          },
        })
        .populate({ path: 'service' })
        .populate({ path: 'nurse' })
        .populate({ path: 'healthInsuranceCompany' })
        .sort({ date: 'asc' });
      res.status(200).json(models);
    } else {
      res.status(200).json('No se encontraron registros.');
    }
  }
}

export default NursingServiceController;
