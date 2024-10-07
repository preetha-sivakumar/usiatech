import React from 'react'

import './About.css'
import logo from '../../assets/logo.png'
const About = () => {
  return (
    <div className="about" id="about-container">
    <div className="part">

    
      <div className="about-text">
         <h2>
            Behind the Vision
         </h2>
         <p class="desc">At UsiaTech, we bridge the gap between ambition and achievement. Our consulting approach focuses on understanding your unique business challenges and turning them into opportunities with innovative tech solutions.
            <br />
            <br />
             With expertise that spans multiple industries, we tailor our services to help you streamline operations, maximize efficiency, and stay ahead of trends. Our goal? To empower your business with technology that drives growth and long-term success.</p>
      </div>
      <div className="about-img">
       {/* <img src={logo} alt="" /> */}
      </div>
      </div>
      <br />
      <br />
      <h3 class="whyus">Why choose us?</h3>
      <br />
      <br />
      <hr  class="divider"/>
      <div className="cards">
      <div class="container">
  <div class="card">
    <div class="box">
      <div class="content">
        <h2>01</h2>
        <h3>Tailored Solutions</h3>
        <p>We customize our strategies to meet your unique business needs.</p>
        
      </div>
    </div>
  </div>

  <div class="card">
    <div class="box">
      <div class="content">
        <h2>02</h2>
        <h3>Expert Guidance</h3>
        <p>Our seasoned professionals ensure seamless implementation and support.</p>
     
      </div>
    </div>
  </div>

  <div class="card">
    <div class="box">
      <div class="content">
        <h2>03</h2>
        <h3>Future-Focused Innovation</h3>
        <p>We help you stay ahead with cutting-edge, scalable technology.</p>
       
      </div>
    </div>
  </div>
</div>
      </div>
     


    </div>
  )
}

export default About