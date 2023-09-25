import React, { useState, useEffect } from "react";
import axios from "axios";

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    content: "",
  });
  const [selectedReview, setSelectedReview] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get("http://localhost:5003/reviews");
        setReviews(response.data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (selectedReview) {
        await axios.put(
          `http://localhost:5003/update/${selectedReview._id}`,
          formData
        );
        setReviews((prevReview) =>
          prevReview.map((review) =>
            review._id === selectedReview._id
              ? { ...review, ...formData }
              : review
          )
        );
      } else {
        const response = await axios.post(
          "http://localhost:5003/create",
          formData
        );
        setReviews([...reviews, response.data]);
      }
      setFormData({ name: "", title: "", content: "" });
      setSelectedReview(null);
    } catch (error) {
      console.error("Error creating review:", error);
    }
  };

  const handleDelete = async (reviewID) => {
    try {
      await axios.delete(`http://localhost:5003/remove/${reviewID}`);
      setReviews(reviews.filter((review) => review._id !== reviewID));
    } catch (error) {
      console.error("Error deleting review:", error);
    }
  };

  const handleUpdate = (reviewID) => {
    const selected = reviews.find((review) => review._id === reviewID);
    if (selected) {
      setSelectedReview(selected);
      setFormData(selected);
    }
  };

  const lastThreeReviews = reviews.slice(-3);

  return (
    <div className="reviews--section">
      <form className="reviews--form" onSubmit={handleSubmit}>
        <h2 className="reviews--heading">Add a Review</h2>
        <div className="reviews--divider"></div>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          className="review--input"
        />
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          className="review--input"
        />
        <textarea
          name="content"
          placeholder="Your Review"
          value={formData.content}
          onChange={handleChange}
          className="review--input"
        />
        <button type="submit" className="btn btn-primary">
          {selectedReview ? "Update" : "Submit"}
        </button>
      </form>

      <h2 className="reviews--heading">Reviews</h2>
      <ul className="reviews--list">
        {lastThreeReviews.map((review) => (
          <li className="review--item" key={review._id}>
            <h3 className="review--title">{review.title}</h3>
            <p className="review--name">{review.name}</p>
            <p className="review--content">{review.content}</p>
            <button
              className="btn btn-primary reviews-btn"
              onClick={() => handleUpdate(review._id)}
            >
              Update
            </button>
            <button
              className="btn btn-primary reviews-btn"
              onClick={() => handleDelete(review._id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Reviews;
