import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
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
    //     const navigate2=useNavigate()
    //     const theatorsheet=()=>{
    //   navigate2(`Theator/${getData.MovieName}`)
    // }
   
  return (
    <div>
       
            <div className='out'>
                <h1 className='container'>{fetchData.MovieName}-Tamil</h1>
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
                     
                     
                    </div>
                    
                        <div className='days'>
                            <h2>Tamil-2D</h2>
                        </div>
                  
                </div>
            </div>
        </div>
        <div className='bag'>
            <div className='container'>
                <div className='the'>
                    <div className='theatormain'>
                        <div className='theatorname'>
                            <h1>Jothi Theatre:chennai</h1>
                        </div>
                        <div className='timemain'>
                            <div className='time'>
                            <h3>10:45 AM</h3> 
                            </div>
                            <div className='time'>
                            <h3>2:45 AM</h3> 
                            </div>
                            <div className='time'>
                            <h3>6:45 AM</h3> 
                            </div>
                        </div>
                    </div>
                    <div className='theatormain'>
                        <div className='theatorname'>
                            <h1>Kasi Talkies:chennai</h1>
                        </div>
                        <div className='timemain'>
                            <div className='time'>
                            <h3>10:45 AM</h3> 
                            </div>
                            <div className='time'>
                            <h3>2:45 AM</h3> 
                            </div>
                            <div className='time'>
                            <h3>6:45 AM</h3> 
                            </div>
                        </div>
                    </div>
                    <div className='theatormain'>
                        <div className='theatorname'>
                            <h1>Albert Theatres:chennai</h1>
                        </div>
                        <div className='timemain'>
                            <div className='time'>
                            <h3>10:45 AM</h3> 
                            </div>
                            <div className='time'>
                            <h3>2:45 AM</h3> 
                            </div>
                            <div className='time'>
                            <h3>6:45 AM</h3> 
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Clickticket











