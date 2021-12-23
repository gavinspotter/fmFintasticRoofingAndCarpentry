const express = require("express");
const app = express();
require("dotenv").config();

const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const httpServer = require("http").createServer(app);
const path = require("path");
const aws = require("aws-sdk");

const formData = require("express-form-data");

const adminRoutes = require("./routes/admin-routes");

const globalRoutes = require("./routes/global-routes");

const HttpError = require("./models/HttpError");

if (process.env.PROXY === "https://") {
  app.enable("trust proxy");
  app.use(function (req, res, next) {
    if (req.secure) {
      next();
    } else {
      res.redirect(process.env.PROXY + req.headers.host + req.url);
    }
  });
}

app.use(formData.parse());

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );

  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

  next();
});

app.use("/api/admin", adminRoutes);

app.use("/api/global", globalRoutes);

app.use((req, res, next) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

app.use((req, res, next) => {
  const error = new HttpError("could not find this route", 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "an unknown error occured" });
});

mongoose
  .connect(process.env.DB_STRING)
  .then(() => {
    httpServer.listen(process.env.PORT || 5000);
    console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });
