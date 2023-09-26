const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const Review = require("./review");
const path = require("path");

const app = express();
const port = process.env.PORT || 5000;
// Middlewares ( React origin, JSON body parser)
app.use(cors());
app.use(bodyParser.json());

const dbConn =
  "mongodb+srv://MalekGhazal:MNoXolkMhbNNkgXW@moviescluster.o9hcsh7.mongodb.net/";

// const _dirname = path.dirname("");
// const buildPath = path.join(_dirname, "../react-portfolio/build");

// app.use(express.static(buildPath));

// app.get("/*", function (req, res) {
//   res.sendFile(
//     path.join(__dirname, "../react-portfolio/build/index.html"),
//     function (err) {
//       if (err) {
//         res.status(500).send(err);
//       }
//     }
//   );
// });

mongoose.connect(dbConn, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

///// Get all reviews /////
app.get("/reviews", async (req, res) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error fetching reviews" });
  }
});

///// Create a new review /////
app.post("/create", async (req, res) => {
  try {
    const { name, title, content } = req.body;
    const newReview = new Review({ name, title, content });

    await newReview.save();
    res.status(201).json(newReview);
    //
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error creating review" });
  }
});

///// Delete review by ID /////
app.delete("/remove/:id", async (req, res) => {
  try {
    const reviewID = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(reviewID)) {
      return res.status(400).json({ error: "Invalid review ID" });
    }

    const deletedReview = await Review.findByIdAndRemove(reviewID);

    if (!deletedReview) {
      return res.status(404).json({ error: "Review not found" });
    }

    res.status(200).json({ message: "Review deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error deleting review!" });
  }
});

///// Update review by ID /////
app.put("/update/:id", async (req, res) => {
  try {
    const reviewID = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(reviewID)) {
      return res.status(400).json({ error: "Invalid review ID" });
    }

    const { name, title, content } = req.body;
    const newData = { name, title, content };

    const updatedReview = await Review.findByIdAndUpdate(reviewID, newData, {
      new: true,
    });

    if (!updatedReview) {
      return res.status(404).json({ error: "Review not found" });
    }

    res.status(200).json({ message: "Review updated successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error updating  review!" });
  }
});

///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

db.on("error", (error) => console.log("MongoDB connection error: ", error));
db.once("open", () => console.log("Connected to MongoDB"));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
