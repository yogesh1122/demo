const express = require("express");
const user = require("../routes/user");

module.exports = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ limit: "50mb", extended: true }));

  app.use("/api/v1/user", user);

  app.use("*", (req, res) => res.send("route not found"));
};
