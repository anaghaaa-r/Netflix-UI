import React from 'react'
import { useState, useEffect } from 'react'
import instance from '../instance'
import requests from '../request'
import '../STYLES/Banner.css'

function Banner() {
    const [movie, setMovie] = useState([])

    async function fetchData() 
        {
            const movieData = await instance.get(requests.fetchNetflixOriginals) // const request to movieData
            setMovie(movieData.data.results[
                Math.floor(Math.random() * movieData.data.results.length - 1)
            ])
        }

    useEffect(() => {
        fetchData()
    }, [])

    console.log("Individual Banner movie: ", movie);

    function truncate(str, n)
    {
        return str?.length > n ? str.substr(0, n-1) + "..." : str
    }
    return (
        <header 
        className='banner'
        style={{
            backgroundSize: "cover",
            backgroundImage: `url(
            https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
            backgroundPosition: "center"
            // backgroundPosition: "top",
            // backgroundAttachment: "fixed"
        }}>
        <div className='banner_contents'>
            <h1 className='banner_title'>
                {movie.title || movie.name || movie.original_name}
            </h1>
            <h1 className='banner_desc'>
               {truncate(movie.overview, 150)}
            </h1>
        </div>
        </header>
    )
}

export default Banner