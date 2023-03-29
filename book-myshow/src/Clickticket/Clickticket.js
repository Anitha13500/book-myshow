import React from 'react'
import { useParams } from 'react-router-dom';
import "./Clickticket.css";
import Movie from "../Movie.json";

const Clickticket = () => {

        const {ticket}=useParams()
        console.log(ticket);
        let fetchData=Movie.find((e)=>e.MovieName==ticket)
    const date1=new Date()
    const date2=date1.getDate()

    const date3=new Date()
    const date4=date3.getDate()

    const date5=new Date()
    const date6 = date5.getDate()
    // const date7=new Date()
    // const date8=date7.getDate()
  return (
    <div>
        <div className='tamil1'>
            <div className='out'>
                <h1>{fetchData.MovieName}-Tamil</h1>
            </div>
        </div>
        <div className='ticketmain'>
            <div className='container'>
                 <div className="ticket1">
                    <div className='ticket2'>
                    
                        <div className='date1'>
                            {date2}
                        </div>
                        <div className='date2'>
                            {date4 +1}
                        </div>
                        <div className='date2'>
                            {date6 +2}
                        </div>
                        {/* <div className='date2'>
                            {date8 +3}
                        </div> */}
                    </div>
                    
                        <div className='days'>
                            <h2>Tamil-2D</h2>
                        </div>
                  
                </div>
            </div>
        </div>
        <div className=''></div>
    </div>
  )
}

export default Clickticket











