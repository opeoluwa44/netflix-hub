import React, {useEffect, useState} from 'react'
import axios from "./axios";
import requests from './requests';
import './Banner.css'

const base_url = "https://image.tmdb.org/t/p/original/"

export default function Banner() {
    const [background, setBackground] = useState("")


    useEffect(() => {
      async function dataFetch(){
        const request = await axios.get(requests.fetchNetflixOriginals)
        //console.log(request)
        setBackground(request.data.results[Math.floor(Math.random()*request.data.results.length-1)])
        return request
      }
      dataFetch()
      
    }, [])

    function truncate(str, n){
      return str?.length > n ? str.substr(0, n-1) + "..." : str;
  }
    
    
  return (
    <header className='banner' style={{backgroundImage:`url("${base_url}${background.backdrop_path}")`}}>
        <div className='banner-contents'>
          <h1 className='banner-title'>{background?.original_name || background?.title}</h1>
          <h3 className='banner-description'>{truncate(background?.overview, 200)}</h3>
          <div className='banner-buttons'>
            <button className='banner-button banner-red'>Join now</button>
            <button className='banner-button'>Sign in</button>
          </div>
        </div>
        <div className='banner-fade-bottom'></div>
    </header>
  )
}
