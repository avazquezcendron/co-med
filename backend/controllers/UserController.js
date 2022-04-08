import BaseController from './BaseController.js';
import User from '../models/userModel.js';
import generateToken from '../utils/generateToken.js';


class UserController extends BaseController {
  constructor() {
    super(User);
  }

  /**
   * @desc   Login user
   * @route  POST /api/auth/login
   * @access Public
   *
   * @param {Object} req The request object
   * @param {Object} res The response object
   * @param {function} next The callback to the next program handler
   * @return {Object} res The response object
   */
  async login(req, res, next) {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    if (user && (await user.matchPassword(password))) {
      if (user.status === 'inactive') {
        res.status(403);
        res.json(`The user ${user.username} has been deactivated. .`);
        return;
      }

      const token = generateToken({ userId: user._id });
      return res.status(200).json({
        token,
        user,
      });
    } else {
      return res.status(401).json('Invalid username or password');
    }
  }
}

export default UserController;