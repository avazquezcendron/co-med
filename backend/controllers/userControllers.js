import fast2sms from 'fast-two-sms';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import generateToken from '../utils/generateToken.js';

// @desc   Fetch users
// @route  POST /api/user
// @access Public
const getAll = asyncHandler(async (req, res, next) => {
  const users = await User.find({});
  res.status(200).json(users);
});

// @desc   Fetch user
// @route  GET /api/user/:id
// @access Private
const getById = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.params.id);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

// @desc   Create user
// @route  POST /api/user
// @access Public
const create = asyncHandler(async (req, res) => {
  const createUser = new User(req.body);
  const createdUser = await createUser.save();

  res.status(200).json(createdUser);
});

// @desc   Update user
// @route  PUT /api/user/:id
// @access Private
const update = asyncHandler(async (req, res) => {
  let user = await User.findById(req.params.id);
  if (user.__v !== req.body.__v) {
    res.status(409);
    res.json('The user has been modified by another transaction.');
    return;
  }
    
  if (user) {
    for (const [key, value] of Object.entries(req.body)) {
      user[key] = value;
    }
    const updatedUser = await user.save();
    res.status(200).json(updatedUser);
  } else {
    res.status(404);
    res.json('User not found');
  }
});

// @desc   Inactivate user
// @route  GET /api/user/:id
// @access Private
const inactivate = asyncHandler(async (req, res) => {
  let user = await User.findById(req.params.id);

  if (user) {
    user.status = 'inactive';
    const updatedUser = await user.save();
    res.status(200).json(updatedUser);
  } else {
    res.status(404);
    res.json('User not found');
  }
});

// @desc   Activate user
// @route  GET /api/user/:id
// @access Private
const activate = asyncHandler(async (req, res) => {
  let user = await User.findById(req.params.id);

  if (user) {
    user.status = 'active';
    const updatedUser = await user.save();
    res.status(200).json(updatedUser);
  } else {
    res.status(404);
    res.json('User not found');
  }
});

// @desc   Login User
// @route  POST /api/auth/login
// @access Public
const login = asyncHandler(async (req, res, next) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });
  if (user.status === 'inactive') {
    res.status(403);
    res.json(`The user ${user.username} has been deactivated. .`);
    return;
  }

  if (user && (await user.matchPassword(password))) {
    const token = generateToken({ userId: user._id });
    res.status(200).json({
      token,
      user,
    });
  } else {
    res.status(401);
    res.json('Invalid username or password');
    throw new Error('Invalid username or password');
  }
});

export { create, update, inactivate, activate, getAll, getById, login };
