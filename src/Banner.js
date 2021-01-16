import React ,{useState,useEffect} from 'react'
import requests from './Requests';
import axios from './axios';
import './Banner.css';
const Banner = () => {
     const [movies , setMovies ] = useState([])

      useEffect( ()=> {
        async function fetchData()
        {
            const request= await axios.get(requests.fetchNetflixOriginals);
            // // console.log(request)
            setMovies(
            request.data.results[
            Math.floor(Math.random() * request.data.results.length - 1)
            ]
                );
                // Math.floor(Math.random() * request.data.results.length -1)
            return request;
            }
            fetchData()

            },[]);
            console.table(movies)
            function truncate(str, n) 
            {
                return str?.length > n ? str.substr(0, n - 1) + "..." : str;
            }
         return (
         <header className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
                backgroundPosition: "center center"
            }}
        >
            <div className="banner__contents">

                {/* title*/}
                      <h1 className="banner_title">
                        {movies?.title || movies?.name || movies?.original_name}
                     </h1>
                {/* 2 buttons */}
                        <div className="banner_buttons">
                <button className="banner_button">Play</button>
                <button className="banner_button">My List</button>
                </div>
                <h1 className="banner_description">{truncate(movies?.overview, 150)}</h1>
            </div>

            <div className="banner--fadeBottom" />
                {/* description */}

           
        </header>
       
    )
}

export default Banner
