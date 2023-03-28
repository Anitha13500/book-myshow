import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Movie from '../Movie.json'
import "../MovieClick/Movieclick.css"
// import MovieName from '../MovieName.json'
const Movieclick = () => {
  const {ids}=useParams()
  let getData=Movie.find ((e)=>e.MovieName===ids)
  console.log(getData);
  const navigate1=useNavigate()
  const ticket=()=>{
    navigate1('/Clickticket' )
  }
  return (
    <>
        <div className='Moviemain' style={{background:`linear-gradient(to right,black,transparent),url(${getData.backgroundimage})`}} height="50vh" width="100%">  
           <div className='movieimg'>
                <div className='Moviefirst'>
                    <img src= {getData.image} alt="Movie Name" />
                </div>
                <div className='moviebtn'>
                  <h2>{getData.MovieName}</h2>
                  <button onClick={()=> ticket()}>Book Tickets</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Movieclick
