import movieTrailer from 'movie-trailer';
import React, {useEffect, useState} from 'react'
import axios from "./axios";
import "./Row.css";
import Frame from './Frame';
var getYouTubeID = require('get-youtube-id')



const base_url = "https://image.tmdb.org/t/p/original/"

function Row({title, fetchUrl, addHeight}) {
   const [movies, setMovies] = useState([])
   const [trailerId, setTrailerId] = useState("")

   useEffect(() => {
      async function dataFetch(){
        const request=  await axios.get(fetchUrl)
        //console.log(request.data.results)
        setMovies(request.data.results)
        return request
      }
     dataFetch()
   
    
   }, [fetchUrl])

  

    const handleClick=(movie)=>{

       if (trailerId){
          setTrailerId("")
       }else{
         movieTrailer(movie?.name || movie?.title || movie?.original_title || "")
         .then((url) =>{
            console.log(url)
            const id = getYouTubeID(url)
            setTrailerId(id)
         })
         .catch((error) =>{
            console.log(error)
         })
       }
   }

   
   


   return (
      <div className='row-posters-container'>
         <h2 className='header-title'>{title}</h2>

         {/*several row posters*/}
         <div className={`row-posters ${addHeight && "row-postersHeight"}`}>
            {movies.map(movie=><Frame key={movie.id} handleMovie={handleClick}  srcUrl={`${base_url}${addHeight?movie.poster_path:movie.backdrop_path}`} name={addHeight?movie.name:movie.title} addHeight={addHeight} movie={movie}/>)}
         </div>
         <div className='video-frame'>
            {trailerId &&<iframe width="100%" height="315" src={`https://www.youtube.com/embed/${trailerId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>}

         </div>
      </div>

   ) 

}

export default Row
