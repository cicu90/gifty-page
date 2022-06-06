require("dotenv").config();
// const userRouter = require("./src/routes/userRouter");

const express = require("express");
const morgan = require("morgan");
// const debug = require("debug");

const port = process.env.PORT || 5000
const server = express();

server.use(morgan("dev"));
server.use(express.json());

server.unsubscribe((req, res, next) => {
  res.send("Todo bien");
  res.status(200);
})
// server.use("/user", userRouter);

server.listen(port, () => {
debug('Server in running on ${`http://localhost:${port}`}');
});
