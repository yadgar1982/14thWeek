import "../App.css"

import React, {useState } from "react";

import ReviewList from "./reviewList";
import {  reviewData } from "../data";
import StarRating from "./StarRating";



function ReviewForm(props) {

  // State to manage the list of reviews
  const [reviews, setReviews] = useState(reviewData);
  // State to manage the input field for new review names
  const [reviewName, setReviewName] = useState("");
  // State to manage the rate level for new reviews
  const [rate, setRate] = useState(5);
  // const [movie, setMovie]=useState();


  // Function to add a new review
  const addReview = () => {
    if (reviewName) {
      const newReview = {
        id: reviews.length + 1,
        name: reviewName,
        completed: false,
        rate: parseInt(rate, 10),
        movie:"",
      };
      
      setReviews([...reviews, newReview]); // Add the new review to the list
      setReviewName(""); // Reset the input field for new review names
      // setRate(5); // Reset the rate level to default
    }
  };

  // Function to remove a review by id
  const removeReview = (id) => {
    const newReview = reviews.filter((review) => review.id !== id);
    setReviews(newReview);
  };

  // Function to toggle the 'completed' state of a review
  const toggleReview = (id) => {
    const newReviews = reviews.map(
      (review) =>
        review.id === id ? { ...review } : review //mapping over current reviews and updating the completed property of the review that matches the id
    );
    setReviews(newReviews); //updating the reviews state with the newreviews array
  };

  // Render the Review App
  return (
    <>
    

     <div className="review-header">
        {/* Input field for new review names */}
        <input
          className="add-review"
          type="text"
          placeholder="Add a new review..."
          value={reviewName}
          onChange={(e) => setReviewName(e.target.value)}
          style={{ flexGrow: 1, marginRight: "10px" }}
        />
        {/* Input field for rate level */}
        <input
          className="review-Rate"
          type="number"
          min="1"
          max="5"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
        />
        <button className="btn btn-success m-2" onClick={addReview}>Submit</button>
      </div>
      <StarRating/>
     
      <h1 style={{ textAlign: "center" }}>{props.title}</h1>
     
      {/* Component to render the list of reviews */}
      
      <ReviewList reviews={reviews} removeReview={removeReview} toggleReview={toggleReview} />

      
    </>
  
      
    
  );
}

export default ReviewForm;
