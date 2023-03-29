import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Clickticket from './Clickticket/Clickticket'
import Mainpage from './Mainpage/Mainpage'
import Movieclick from './MovieClick/Movieclick'

const Router = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Mainpage />}> </Route>
                <Route path='/movieclick/:ids' element={ <Movieclick />}></Route>
                <Route path='/Clickticket/:ticket' element={<Clickticket />}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Router
