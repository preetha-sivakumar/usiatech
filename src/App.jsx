import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Careers from './Pages/Careers'


const App = () =>{
    return(
        <Routes>
            <Route path="/" element={<Home /> } />
            <Route path ="/careers" element={<Careers />} />
        </Routes>
    )
}

export default App