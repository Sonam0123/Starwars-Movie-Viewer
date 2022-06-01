import React from 'react'
import MovieList from './MovieList'

const Sidebar = ({movieData, setIndex}) => {
    const movieTitles = movieData.movies.map((titles, index) => {


         return  <MovieList onClick={() => {setIndex(index)}} index={index} setIndex={setIndex} title={titles} />
    })
  return (
    <div>
        {movieTitles}
    </div>
  )
}
export default Sidebar