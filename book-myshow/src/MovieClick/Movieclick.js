import React from 'react'
import { useParams } from 'react-router-dom'
import Movie from '../Movie.json'
import "../MovieClick/Movieclick.css"
// import MovieName from '../MovieName.json'
const Movieclick = () => {
  const {ids}=useParams()
  let getData=Movie.find ((e)=>e.MovieName===ids)
  console.log(getData);
  return (
    <div>
        <div className='Moviemain'>
            <div className='Moviefirst'>
                <img src= {getData.image} alt="Movie Name" />
            </div>
            <div className='moviebtn'>
               <h2>{getData.MovieName}</h2>
               <button>Book Tickets</button>
            </div>
        </div>
    </div>
  )
}

export default Movieclick
