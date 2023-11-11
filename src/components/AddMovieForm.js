import React,{useState} from 'react'
import myArray from './myArray';

function AddMovieForm({movies,setMovies}) {
    const [title,setTitle]= useState("");
    const [rank, setRank] = useState("");
    let newId ="1000a";
    const [id, setId] = useState(newId);

    const handleSubmit=(e)=>{
        e.preventDefault();
        const newMovie={title, rank, id};
        setMovies((movies)={...movies,newMovie});
        setTitle("");
        setRank("");
        newId=newId +"a";
        setId(newId);
        myArray.push(newMovie);

    }
  return (
    <div>
        <form>
            <label>Title</label>
            <input tyepe="text" value={title} onChange={(e)=> setTitle(e.target.value)}/>
            <label>Rank</label>
            <input tyepe="number" value={rank} onChange={(e)=> setRank(e.target.value)}/>
            <button onClick={(e)=> {handleSubmit(e)}}>Submit</button>
        </form>

    </div>
  )
}

export default AddMovieForm