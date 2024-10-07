import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo1.png'
import logo1 from '../../assets/logo2.png'
const Navbar = () => {

  const [sticky, setSticky] = useState(false);
  useEffect (()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 100 ? setSticky(true) : setSticky(false);
    })
  }, [])



  return (
   <nav  class={`containernav ${sticky? 'dark-nav' : ''}`}>
    <div className="logo">
    <img src={logo1} alt=""class="logo1" />
    <img src={logo} alt=""  class="logo2"/>
   
    </div>
    
    <ul>
        <li><a href="./">Home</a></li>
        
        <li> <a href="#about-container">About Us</a>     </li>
        <li><a href="#service-container" className="href">Services</a></li>
         
        <li><a href="#contact-container">Contact Us</a></li>

       
        
    </ul>
   </nav>
  )
}

export default Navbar