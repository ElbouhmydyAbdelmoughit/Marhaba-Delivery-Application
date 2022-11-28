const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv").config();
const authRoute = require("./routes/auth");
const roleRouter = require("./routes/role");
const { error, success } = require("consola");

mongoose
  .connect(process.env.DATA_COONECTION, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    success({ message: "database is connected", badge: true });
  })
  .catch((err) => {
    error({ message: err.message, badge: true });
  });

app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRoute);
app.use("/api/auth/", roleRouter);

module.exports = app;
