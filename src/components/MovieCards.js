import React from "react";
import "../App.css"
import ReviewForm from "./ReviewForm";

function MovieCards({ movies }) {
    console.log(movies);
  return (
    <div className="card my-3">
      
        {movies.map((movie) => {
          return(
            <div>
           
            
               
              <div className="container"  key={movie.id}>

                <div > {movie.image}</div>
                <div >Name: {movie.title}</div> 
                <div>Movie Rank: {movie.rank}</div> 
                <div >Movie id: {movie.id}</div> 
                


              
              </div>
              <div className="container">
              <div><ReviewForm/></div>
            

              </div>
            </div>
            
          
              
          
            
        );
          
          
        })}
      
        
          

    </div>
  );
}

export default MovieCards