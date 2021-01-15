import React ,{useState,useEffect} from 'react'
import axios from './axios'
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
 console.log(movies)
    return (
        <div>
            <h2> {title} </h2>
        </div>
    )
}

export default Row
