const HttpError = require("../models/HttpError");

const Projects = require("../models/Projects");
const aws = require("aws-sdk"); //"^2.2.41"
const nodemailer = require("nodemailer");

const getProjects = async (req, res, next) => {
  let findProjects;

  try {
    findProjects = await Projects.find();
  } catch (err) {
    const error = new HttpError("couldn't find those projects");
    return next(error);
  }

  res.json({ findProjects });
};

const getAProject = async (req, res, next) => {
  const projectId = req.params.pId;

  let findProject;

  try {
    findProject = await Projects.findById(projectId);
  } catch (err) {
    const error = new HttpError("something went wrong finding that project");
    return next(error);
  }

  res.json({ findProject });
};

const consultationRequest = async (req, res, next) => {
  const {
    firstName,
    lastName,
    phoneNumber,
    email,
    street,
    city,
    state,
    zipCode,
    hour,
    date,
    details,
  } = req.body;

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
      from: "fin@fintasticcarpentry.com",
      to: email,
      subject: "test",
      text: `
      ${firstName}
      ${lastName}
      ${phoneNumber}
      ${email}
      ${street}
      ${city}
      ${state}
      ${zipCode}
      ${hour}
      ${date}
      ${details}
      Thank You
      `,
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

  res.json({ message: "success" });
};

exports.getProjects = getProjects;

exports.getAProject = getAProject;

exports.consultationRequest = consultationRequest;
