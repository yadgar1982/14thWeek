import "./reviewList.css";
import Review,{useState} from "./review";





// Component to render the list of reviews
const ReviewList = ({ rating , reviews, removeReview, toggleReview, Movie }) => {

  //destructuring reviews, removereview, and togglereview from props

  return (
    
    
    <ul>
      <li className="box">
  

      </li>

      <li>
       
        {Movie}</li>
        

      
      {reviews.length > 0 ? (
        reviews.map(
          (
            review //mapping over reviews array and rendering a review component for each review object
          ) => (
            <Review 

          
              key={Review.id} //setting the key prop to the id of the review object
              {...review} //spreading the review object as props to the review component
             
              removeReview={removeReview} //passing down the removereview function as a prop
              toggleReview={toggleReview} //passing down the togglereview function as a prop
              
              
              
            />
            
            
            
          )
        )
      ) : (
        <h2 style={{ textAlign: "center", color: "DarkGreen" }}>
          No Reviews!
        </h2>
      )}
      
      
    </ul>
    

  );
};

export default ReviewList;
