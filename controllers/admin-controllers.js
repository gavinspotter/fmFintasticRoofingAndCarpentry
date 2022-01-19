const HttpError = require("../models/HttpError");

const Admin = require("../models/Admin");
const aws = require("aws-sdk"); //"^2.2.41"

const Projects = require("../models/Projects");
const fs = require("fs");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

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
      process.env.TOKEN_SECRET,
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
      process.env.TOKEN_SECRET,
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
  const { type, description, materialsUsed, coverPhotoBucketId } = req.body;

  console.log(req.files);

  //
  //console.log(Object.keys(req.files));

  const objkeys = Object.keys(req.files);

  if (req.files[objkeys.length - 1] === undefined) {
    const error = new HttpError("you need a photo");
    return next(error);
  }

  //   console.log(req.files);
  //   console.log(req.files[req.files.length - 1]);

  //   console.log(req.files[2]);
  //   console.log(req.files.length);

  const s3 = new aws.S3({
    accessKeyId: process.env.AWS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
  });

  const uniqueId = uuidv4();

  const fileContent = fs.readFileSync(req.files[objkeys.length - 1].path);

  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: `${uniqueId}-${objkeys.length - 1}`, // File name you want to save as in S3
    Body: fileContent,
  };

  s3.upload(params, function (err, data) {
    if (err) {
      throw err;
    }
    console.log(`File uploaded successfully. `);
  });

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

  //console.log(materialsUsed);
  //console.log(JSON.stringify(materialsUsed));

  //   for (let i; i < materialsUsed.length; i++) {
  //     console.log(JSON.stringify(materialsUsed[i]));
  //   }
  //const parseData = JSON.parse(materialsUsed);

  const createProject = new Projects({
    type,
    description,
    coverPhotoBucketId: `${uniqueId}-${objkeys.length - 1}`,
    admin: findUser._id,

    //materialsUsed: parseData,
  });

  //console.log(req.files);

  try {
    for (let i = 0; i < objkeys.length - 1; i++) {
      //(i, req.files.picture[0]);
      const uniqueIdPhotos = uuidv4();

      const fileContentRound = fs.readFileSync(req.files[i].path);
      const roundParams = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: `${uniqueIdPhotos}-${req.files[i].name}`, // File name you want to save as in S3
        Body: fileContentRound,
      };

      s3.upload(roundParams, function (err, data) {
        if (err) {
          throw err;
        }
        console.log(`File uploaded successfully. `);
      });

      createProject.photosPhotoBucketIds.push(
        `${uniqueIdPhotos}-${req.files[i].name}`
      );
    }
  } catch (err) {
    const error = new HttpError("couldn't upload those photos");
    return next(error);
  }

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

const sendEmail = async (req, res, next) => {
  const { message } = req.body;

  //   const SES_CONFIG = {
  //     accessKeyId: process.env.AWS_IAM_KEY,
  //     secretAccessKey: process.env.AWS_IAM_SECRET,
  //     region: "us-east-1",
  //   };

  //   const AWS_SES = new aws.SES(SES_CONFIG);

  //   try {
  //     const params = {
  //       Source: "gavinspotter@cloversoftwarecompany.com",
  //       Destination: {
  //         ToAddresses: ["gavinspotter1227@gmail.com"],
  //       },
  //       ReplyToAddresses: [],
  //       Message: {
  //         Body: {
  //           Text: {
  //             Charset: "UTF-8",
  //             Data: "This is a test!",
  //           },

  //           Html: {
  //             Charset: "UTF-8",
  //             Data: "This is the body of my email!",
  //           },
  //         },
  //         Subject: {
  //           Charset: "UTF-8",
  //           Data: `test!`,
  //         },
  //       },
  //     };
  //     AWS_SES.sendEmail(params);
  //   } catch (err) {
  //     console.log(err);
  //   }

  //   var mailOptions = {
  //     from: "gavinspotter@cloversoftwarecompany.com",
  //     to: "gavinspotter1227@gmail.com",
  //     text: "This is some text",
  //     html: "<b>This is some HTML</b>",
  //   };
  //   function callback(error, info) {
  //     if (error) {
  //       console.log(error);
  //     } else {
  //       console.log("Message sent: " + info.response);
  //     }
  //   }
  const ses = new aws.SES({
    apiVersion: "2010-12-01",
    region: "us-east-1",
    accessKeyId: process.env.AWS_IAM_KEY,
    secretAccessKey: process.env.AWS_IAM_SECRET,
  });

  let transporter = nodemailer.createTransport({
    SES: { ses, aws },
  });

  transporter.sendMail(
    {
      from: "gavinspotter@cloversoftwarecompany.com",
      to: "gavinspotter1227@gmail.com",
      subject: "Message",
      text: "I hope this message gets sent!",
      ses: {
        // optional extra arguments for SendRawEmail
      },
    },
    (err, info) => {
      console.log(err);
      //   console.log(info.envelope);
      //   console.log(info.messageId);
    }
  );
  // Send e-mail using AWS SES
  //   mailOptions.subject = "Nodemailer SES transporter";
  //   var sesTransporter = nodemailer.createTransport(
  //     sesTransport({
  //       accessKeyId: process.env.AWS_IAM_KEY,
  //       secretAccessKey: process.env.AWS_IAM_SECRET,
  //       region: "us-east-1",
  //     })
  //   );
  //   sesTransporter.sendMail(mailOptions, callback);

  res.json({ message: "success" });
};

exports.signup = signup;

exports.login = login;

exports.createProject = createProject;

exports.deleteProject = deleteProject;

exports.sendEmail = sendEmail;
