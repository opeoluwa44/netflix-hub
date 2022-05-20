import React from 'react'
import "./Frame.css"

export default function Frame({srcUrl, name, addHeight, movie, handleMovie}) {

    const handleClick =()=>{
      handleMovie(movie)
    }


  return (
    <div className={`frame ${addHeight && "frameHeight"}`}>
      <img className={`row-poster ${addHeight && "row-posterHeight"}`} 
      src={srcUrl} alt={name} onClick={handleClick}></img>
      <span className='movie-title'>{name}</span>

    </div>
  )
}
