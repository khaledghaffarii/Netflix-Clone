import React ,{useState,useEffect} from 'react'
import axios from './axios';
import './Row.css'

const base_url = "https://image.tmdb.org/t/p/original"

const Row = ({title , fetchUrl}) => {
    const [movies , SetMovies ] = useState([])
 // IF [] RUN ONCE WHEN THE ROW LOADS, AND DON'T RUN AGAIN
    useEffect( ()=> {
   async function fetchData(){
 const request= await axios.get(fetchUrl);
// console.log(request)
 SetMovies(request.data.results)
 return request;
}
fetchData()

 },[fetchUrl]);
 console.table(movies)
    return (
        <div className="row">
            <h2> {title} </h2>
                <div className="row_posters">
                   {/* row__poster */}
                   {
                    movies.map(movie =>(
                        <img src={`${base_url}${movie.poster_path}`} alt= {movie.name} />
                    ))
                   }
                </div>
        </div>
    )
}

export default Row
