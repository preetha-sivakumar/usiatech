import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Careers from './Pages/Careers'
import Serv1 from './Pages/Serv/Serv1'
import Serv2 from './Pages/Serv/Serv2'
import Serv3 from './Pages/Serv/Serv3'
import Serv4 from './Pages/Serv/Serv4'
import Serv5 from './Pages/Serv/Serv5'
import Serv6 from './Pages/Serv/Serv6'

const App = () =>{
    return(
        <Routes>
            <Route path="/" element={<Home /> } />
            <Route path ="/careers" element={<Careers />} />
            <Route path ="/service" element={<Serv1 /> } />
            <Route path ="/service1" element={<Serv2 /> } />
            <Route path ="/service2" element={<Serv3 /> } />
            <Route path ="/service3" element={<Serv4 /> } />
            <Route path ="/service4" element={<Serv5 /> } />
            <Route path ="/service5" element={<Serv6 /> } />
        </Routes>
    )
}

export default App