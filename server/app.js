const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const authRoute = require("./routes/auth");
const roleRouter = require("./routes/role");
const { error, success } = require("consola");
mongoose.connect(
  process.env.DATA_COONECTION,
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  },
  () => {
    success({ message: "database is connected", badge: true });
  }
);

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/auth/", roleRouter);

app.listen(process.env.PORT || 8080, () => {
  success({
    message: "app listening on port: " + process.env.PORT,
    badge: true,
  });
});
