const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dev = require("../config/dev");

app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(dev.mongoDB)
  .then(() => console.log("mongoDB Connected"))
  .catch((err) => console.log(err));

const routes = require("./routes/index");
app.use("/", routes);

app.listen(5000, () => {
  console.log("Server is listening on 5000");
});
