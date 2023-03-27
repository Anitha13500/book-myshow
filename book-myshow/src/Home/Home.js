import React from 'react'
// import MovieName from "../MovieName.json"
import Movie from "../Movie.json"
import Product from '../Component/Product'
// import Product1 from"../Component/Product1"
import "./Home.css"
import Footer from '../Footer/Footer'
const Home = () => {
    // console.log("MovieName",MovieName)
  return (
    <div className="home">
        
        <div className='Home container'>
        <h1>Recommented Movies</h1>
            <div className='homeimg'>
            {Movie?.map((product,index) => (
                <Product product={product} key={index}/>
            ))}
            </div>
            {/* <div className='homeimg'>
            {MovieName?.map((product,index) => (
                <Product1 product={product} key={index}/>
            ))}
            </div> */}
        </div>
        < Footer/>
    </div>
  )
}

export default Home
