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

exports.getProjects = getProjects;

exports.getAProject = getAProject;
