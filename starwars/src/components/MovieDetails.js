import React from 'react'

const MovieDetails = ({movieData, index}) => {
console.log(movieData.movies[index])
const characters = movieData.movies[index].main_characters.map((cast) => {
        return <div>{cast}</div>    
})

  return (
    <div className='movieDetails'>
        <img id='mainImg' src={`/images/${movieData.movies[index].hero_image}`} alt="" />
        <h1>{movieData.movies[index].title}</h1>
        <h2>Cast:</h2>
         <p> {characters}</p>
        <h2>Description:</h2>
        <p> {movieData.movies[index].description}</p>
    </div>
  )
}
export default MovieDetails