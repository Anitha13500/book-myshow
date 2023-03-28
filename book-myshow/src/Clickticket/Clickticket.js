import React from 'react'
import "./Clickticket.css";

const Clickticket = () => {
    const date1=new Date()
    const date2=date1.getDate()

    const date3=new Date()
    const date4=date3.getDate()

    const date5=new Date()
    const date6 = date5.getDate()
  return (
    <div>
        <div className='ticketmain'>
            <div className='ticket1'>
                 <div className='container'>
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
                </div>
            </div>
        </div>
    </div>
  )
}

export default Clickticket
