const HttpError = require("../models/HttpError");

const Projects = require("../models/Projects");

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

exports.getProjects = getProjects;
