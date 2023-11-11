import React,{ useState} from 'react';
import './App.css';
import myArray from './components/myArray';
import MovieCards from './components/MovieCards';

import Nav from './components/nav';



import "./App.css"

function App() {
  const [movies, setMovies] = useState (myArray);
  return (
    <>
    <div><Nav/></div>
    <div > 
      <MovieCards movies={movies}/>
    
    </div>
    </>
  );
}

export default App;
