const mongoose = require("mongoose");

const reviewsSchema = new mongoose.Schema(
  {
    name: String,
    title: String,
    content: String,
  },
  { collection: "portfolio" }
);

module.exports = mongoose.model("Review", reviewsSchema, "reviews");
