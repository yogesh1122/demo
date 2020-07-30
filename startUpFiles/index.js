const db = require("./db");
const server = require("./server");
const cors = require("./cors");
const routes = require("./routes");

module.exports = {
  db,
  routes,
  server,
  cors,
};
