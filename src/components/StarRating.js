import React, {useState} from "react";
import {FaStar} from "react-icons/fa";



const StarRating = () =>{
    const[rating, setRating]=useState(null);
    const[hover, setHover]=useState(null);
    return (

        <div>
            {[...Array(5)].map((star, i)=> {
                const ratingVal= i + 1;
                return ( <label>
                    <input type ="radio" name="rating" 
                    value ={ratingVal} 
                    onClick={()=>setRating (ratingVal)}
                    
                    
                     />
                    
                    <FaStar className="star" color={ratingVal <= (hover || rating) ? "gold" :"green"} 
                    size={25}
                    onMouseEnter={()=> setHover(ratingVal)}
                    onMouseLeave={()=> setHover(null)}/>

                    </label>
                );
                
            })}
            <p className="box"> Stars:-   {rating} </p>
           
            
          
           

        </div>
    )
        
    
}




export default StarRating