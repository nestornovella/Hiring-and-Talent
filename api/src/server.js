"use strict";
require("dotenv").config();
const express = require("express");
const createError = require("http-errors");
// Capa de seguridad.
const helmet = require("helmet");
// Permite en envio programado de correo electronicos.
const nodemailer = require("nodemailer");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const cors = require("cors");
const { EMAIL, PASSWORD, SERVICE } = process.env;

const routes = require("./routes/indexRoutes");

const server = express();

// Falta configurar correo electronico
/* const transporter = nodemailer.createTransport({
  service: SERVICE,
  auth: {
    user: EMAIL,
    pass: PASSWORD,
  },
}); */

server.use(helmet());
server.use(cors());

// Hora y fecha de las solicitudes
const logTime = (req, res, next) => {
  console.log(
    `Date: ${new Date().toString()} - Method: ${req.method} - URL: ${req.url}`
  );
  next();
};

server.use(morgan("dev"));
server.use(express.urlencoded({ extended: false, limit: "100mb" }));
server.use(express.json());
server.use(cookieParser());
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use(logTime);
server.use("/api", routes);

server.use((req, res, next) => {
  next(createError(404));
});

server.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.server?.get("env") === "development" ? err : {};

  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err,
  });

  next();
});


module.exports = server;