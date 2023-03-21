import React from 'react'
import logo from "../assest/Image/bookmyshowlogo.png";
import "./Header.css";
const Header = () => {
  return (
    <div>
        <div className="main">
            <div className='container'>
                <div className='logomain'>
                    <div className='logo'>
                        <div className='logoimg'>
                            <img src={logo} />
                        </div>
                        <div className='logoinput'>
                            <input type="text" id='inputid'placeholder='search for movies, Events,Plays,Sports and Activites'/>
                        </div>
                    </div>
                    <div className='btn'>
                        <button>sign in</button>
                    </div>
                </div>

            </div>
        </div>
        <div className='main1'>
            <div className='container'>
                <div className='movies'>
                    <a>Movies</a>
                    <a>Events</a>
                    <a>Plays</a>
                    <a>Sports</a>
                    <a>Activites</a>
                    <a>Buzz</a>
                </div>
            </div>
        </div>
        <div className='main2'>
            <div className='main2img'>
                <img src='https://assets-in.bmscdn.com/promotions/cms/creatives/1677493393240_web.jpg' />
            </div>
        </div>
    </div>
  )
}

export default Header
