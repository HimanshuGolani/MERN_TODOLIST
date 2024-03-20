const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/TodoRoute");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((e) => {
    console.log(e);
  });

app.use("/api/v1", routes);

app.listen(PORT, () => {
  console.log(`listning on port ${PORT}`);
});
