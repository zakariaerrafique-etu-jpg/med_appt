import { useState } from "react";
import "../styles/review.css";

function GiveReviews({ doctorName }) {
  const [formData, setFormData] = useState({
    name: "",
    review: "",
    rating: "5"
  });

  const [submitted, setSubmitted] = useState(false);

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

    setErrors({
      ...errors,
      [e.target.name]: ""
    });
  };

  const validate = () => {
    const validationErrors = {};

    if (!formData.name.trim()) {
      validationErrors.name = "Name is required";
    }

    if (!formData.review.trim()) {
      validationErrors.review = "Review is required";
    }

    if (!formData.rating) {
      validationErrors.rating = "Rating is required";
    }

    return validationErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log({
      doctor: doctorName,
      ...formData
    });

    alert("Thank you! Your review has been submitted.");

    setSubmitted(true);

    setFormData({
      name: "",
      review: "",
      rating: "5"
    });
  };

  return (
    <div className="review-container">

      <h2>Give Review</h2>

      {doctorName && (
        <h3>{doctorName}</h3>
      )}

      <form onSubmit={handleSubmit}>

        <label>Name</label>

        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
        />

        <p className="error">{errors.name}</p>

        <label>Review</label>

        <textarea
          name="review"
          rows="5"
          placeholder="Write your review"
          value={formData.review}
          onChange={handleChange}
        />

        <p className="error">{errors.review}</p>

        <label>Rating</label>

        <select
          name="rating"
          value={formData.rating}
          onChange={handleChange}
        >
          <option value="1">1 Star</option>
          <option value="2">2 Stars</option>
          <option value="3">3 Stars</option>
          <option value="4">4 Stars</option>
          <option value="5">5 Stars</option>
        </select>

        <p className="error">{errors.rating}</p>

        <button
          type="submit"
          disabled={submitted}
        >
          {submitted ? "Review Submitted" : "Submit Review"}
        </button>

      </form>

    </div>
  );
}

export default GiveReviews;
