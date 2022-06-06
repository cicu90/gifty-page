require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const debug = require("debug");

const port = process.env.PORT || 5000
const server = express();

server.use(morgan("dev"));
server.use(express.json());

server.listen(port, () => {
debug('Server in running on ${`http://localhost:${port}`}');
});
