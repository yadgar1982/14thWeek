import "./Review.css";
import StarRating from "./StarRating";
// Component to render a single review
// const Review = ({ rating , id, name, completed,rate, removeReview, toggleReview }) => {
const Review = ({ rating , id, name, completed, rate, Movie , removeReview, toggleReview }) => {
  //destructuring id, name, completed, confidence, removereview, and togglereview from props
  return (
    <div>
        
          <li>
          
          {/* // <div className="box">{Movie}</div> */}
        
          

          {/* Checkbox to mark a review as completed */}
          <input
            type="checkbox"
            checked={completed}
            onChange={() => toggleReview(id)}
          />
          {/* Display the review name and rate level */}
          
          <span
            style={{
              textDecoration: completed ? "line-through" : "none",
            }}
          >
            
            {name} (Rate: {rate} )  {rating}
         
          </span>
          {/* Button to remove a review */}
          <button className="buttond" onClick={() => removeReview(id)}>Remove</button>
        </li>

    </div>
    
  );
};

export default Review;
