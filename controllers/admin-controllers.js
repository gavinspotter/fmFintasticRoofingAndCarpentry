const HttpError = require("../models/HttpError");

const Admin = require("../models/Admin");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const signup = async (req, res, next) => {
  const { username, password } = req.body;
  console.log(password);

  let existingUser;

  try {
    existingUser = await Admin.findOne({ username: username });
  } catch (err) {
    const error = new HttpError("username already in use", 500);
    return next(error);
  }

  if (existingUser) {
    const error = new HttpError("this user already exists, please login", 422);
    return next(error);
  }

  let hashedPassword;

  try {
    console.log(password);
    hashedPassword = await bcrypt.hash(password, 12);
  } catch (err) {
    console.log(err);
    const error = new HttpError(
      "Could not create user, please try again.",
      500
    );
    return next(error);
  }

  const createdAdmin = new Admin({
    username,

    password: hashedPassword,
  });

  try {
    await createdAdmin.save();
  } catch (err) {
    console.log(err);
    const error = new HttpError("couldnt save this action", 500);
    return next(error);
  }

  let token;

  try {
    token = jwt.sign(
      { userId: createdAdmin.id, username: createdAdmin.username },
      "supersecret_dont_share",
      { expiresIn: "24h" }
    );
  } catch (err) {
    const error = new HttpError(
      "Signing up failed, please try again later.",
      500
    );
    return next(error);
  }

  res.status(201).json({
    userId: createdAdmin.id,
    username: createdAdmin.username,
    token: token,
  });
};

const login = async (req, res, next) => {
  const { username, password } = req.body;

  let existingUser;

  try {
    existingUser = await Admin.findOne({ username: username });
  } catch (err) {
    const error = new HttpError("login failed", 500);
    return next(error);
  }

  if (!existingUser) {
    const error = new HttpError("wrong information", 401);
    return next(error);
  }

  let isValidPassword = false;

  try {
    isValidPassword = await bcrypt.compare(password, existingUser.password);
  } catch (err) {
    const error = new HttpError(
      "Could not log you in, please check your credentials and try again.",
      500
    );
    return next(error);
  }

  if (!isValidPassword) {
    const error = new HttpError(
      "Invalid credentials, could not log you in.",
      403
    );
    return next(error);
  }

  let token;

  try {
    token = jwt.sign(
      { userId: existingUser.id, username: existingUser.username },
      "supersecret_dont_share",
      { expiresIn: "24h" }
    );
  } catch (err) {
    const error = new HttpError(
      "Logging in failed, please try again later.",
      500
    );
    return next(error);
  }

  res.json({
    userId: existingUser.id,
    username: existingUser.username,
    token: token,
  });
};

const createProject = async (req, res, next) => {};

const deleteProject = async (req, res, next) => {};

exports.signup = signup;

exports.login = login;

exports.createProject = createProject;

exports.deleteProject = deleteProject;
