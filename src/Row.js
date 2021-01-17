import React ,{useState,useEffect} from 'react'
import axios from './axios';
import './Row.css'
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
const base_url = "https://image.tmdb.org/t/p/original"

const Row = ({title , fetchUrl ,isLargeRow}) => {
    const [movies , SetMovies ] = useState([])
      const [trailerUrl, setTrailerUrl] = useState("");
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
  
 const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    }
  }
 const handleClick = (movie) => {
    // console.table(movie?.title)
    if (trailerUrl) {
      setTrailerUrl('')
    } else {
      movieTrailer( movie?.title || "")
        .then(url => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
        }).catch((error) => console.log(error));
    }
  }
 console.table(movies)
    return (
        <div className="row">
            <h2> {title} </h2>
                <div className="row__posters">
                   {/* row__poster */}
                   {
                        movies.map(movie =>(
                            <img 
                            key={movie.id}
                            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                            src={`${base_url}${ isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                            alt= {movie.name} />
                        ))
                   }
                </div>
        </div>
    )
}

export default Row
