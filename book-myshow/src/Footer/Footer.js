import React from 'react'
import "./Footer.css"
import logo from "../assest/Image/bookmyshowlogo.png";
const Footer = () => {
  return (
    <div>
        <div className='footer'>
        <div className='footermain'>
            <div className='foot1'>
                <hr></hr>
            </div>
            <div className='footimg'>sss\\
              <img src={logo}  alt="footerimage"/>
            </div>
            <div className='foot1'>
                <hr></hr>
            </div>

        </div>
        <div>
        </div>
        </div>
    </div>
  )
}

export default Footer
