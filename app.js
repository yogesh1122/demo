const express = require("express");

const { cors, server, routes, db } = require("./startUpFiles");

const app = express();

cors(app);

server(app);

db();

routes(app);
