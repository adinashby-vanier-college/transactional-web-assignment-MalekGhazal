const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();

const port = process.env.PORT || 5000;

app.use(bodyParser.json());

mongoose.connect(
  "mongodb+srv://MalekGhazal:MNoXolkMhbNNkgXW@moviescluster.o9hcsh7.mongodb.net/",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;

db.on("error", (error) => console.log("MongoDB connection error: ", error));
db.once("open", () => console.log("Connected to MongoDB"));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
