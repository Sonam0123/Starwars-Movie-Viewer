import React from 'react'

const MovieList = ({ title, onClick}) => {
  return (
    <div className='movies'>
        <img src={`/images/${title.poster}`} alt="" />
       <button onClick={onClick} 
       className='movieListBtn'>  
        {title.title}</button>
    </div>
  )
}

export default MovieList