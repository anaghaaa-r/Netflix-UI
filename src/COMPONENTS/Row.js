import React from 'react'
import { useState, useEffect } from 'react'
import instance from '../instance'
import '../STYLES/Row.css'

const image_url="https://image.tmdb.org/t/p/original/"

function Row({ title, fetchUrl, isLarge }) {
    const [movies, setMovies] = useState([])

    // const fetchData = async () =>{
    //     const request = await instance.get(fetchUrl)
    //     setMovies(request.data.results)
    // }
    
    async function fetchData() {
        const movieData = await instance.get(fetchUrl)
        // console.log('request: ', request)
        // movieData instead of request
        setMovies(movieData.data.results)
    }

    useEffect(() => {
        fetchData()
    }, [])

    console.log("NetflixOriginals: ", movies)
    return (
        <div className='row'>
            <h1>{title}</h1>
            <div className='row_posters'>
                {movies.map((movie) => (
                    <div>
                        <img key={movie.id}
                        className={`row_poster ${isLarge && "row_posterLarge"}`}
                        src={`${image_url}${ isLarge ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Row