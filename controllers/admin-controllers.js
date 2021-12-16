const HttpError = require("../models/HttpError");

const Admin = require("../models/Admin");

const Projects = require("../models/Projects");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { v4: uuidv4 } = require("uuid");

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

const createProject = async (req, res, next) => {
  const { type, description, materialsUsed } = req.body;

  try {
    findUser = await Admin.findById(req.userData.userId);
  } catch (err) {
    const error = new HttpError("something went wrong you're not logged in");
    return next(error);
  }

  if (!findUser) {
    const error = new HttpError("you're not logged in");
    return next(error);
  }

  if (findUser._id.toString() !== req.userData.userId) {
    const error = new HttpError("wrong account");
    return next(error);
  }

  const createProject = new Projects({
    type,
    description,
    coverPhotoBucketId: "hi",
    admin: findUser._id,
    materialsUsed,
  });

  try {
    await createProject.save();
  } catch (err) {
    const error = new HttpError("couldn't save that");
    return next(error);
  }

  try {
    findUser.projects.push(createProject);
    await findUser.save();
  } catch (err) {
    const error = new HttpError("couldn't save your project");
    return next(error);
  }

  res.json({ createProject, findUser });

  //   const s3 = new aws.S3({
  //     accessKeyId: process.env.AWS_KEY,
  //     secretAccessKey: process.env.AWS_SECRET_KEY,
  //   });

  //   const uniqueId = uuidv4();

  //   const fileContent = fs.readFileSync(req.files.bucketPhotoId.path);

  //   const params = {
  //     Bucket: process.env.AWS_BUCKET_NAME,
  //     Key: `${uniqueId}-${req.files.bucketPhotoId.name}`, // File name you want to save as in S3
  //     Body: fileContent,
  //   };

  //   s3.upload(params, function (err, data) {
  //     if (err) {
  //       throw err;
  //     }
  //     console.log(`File uploaded successfully. `);
  //   });
};

const deleteProject = async (req, res, next) => {
  const projectId = req.params.projectId;

  try {
    findUser = await Admin.findById(req.userData.userId);
  } catch (err) {
    const error = new HttpError("something went wrong you're not logged in");
    return next(error);
  }

  if (!findUser) {
    const error = new HttpError("you're not logged in");
    return next(error);
  }

  if (findUser._id.toString() !== req.userData.userId) {
    const error = new HttpError("wrong account");
    return next(error);
  }

  let findProject;

  try {
    findProject = await Projects.findById(projectId);
  } catch (err) {
    const error = new HttpError("something went wrong finding that");
    return next(error);
  }

  if (!findProject) {
    const error = new HttpError("thats not a project");
    return next(error);
  }

  if (findProject.admin.toString() !== req.userData.userId) {
    const error = new HttpError("that isn't something you can delete");
    return next(error);
  }

  try {
    await findProject.remove();
    findUser.projects.pull(findProject);
    await findUser.save();
  } catch (err) {
    const error = new HttpError("couldn't delete that project");
    return next(error);
  }

  res.json({ findUser });
};

exports.signup = signup;

exports.login = login;

exports.createProject = createProject;

exports.deleteProject = deleteProject;
