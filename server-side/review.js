const mongoose = require("mongoose");

const reviewsSchema = new mongoose.Schema({
  name: String,
  title: String,
  content: String,
});

module.exports = mongoose.model("Review", reviewsSchema);
