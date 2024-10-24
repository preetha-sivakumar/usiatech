import React, { useEffect, useRef } from 'react';
import {  motion, useInView } from 'framer-motion';
import { FaCog, FaDollarSign, FaRocket } from 'react-icons/fa';

import './Serv3.css'
import Navbar from '../../components/Navbar/Navbar'


import videoSource from '../../assets/vid.mp4'

import serv3 from '../../assets/serv3.png'


const services = [
    {
      title: "Advanced Statistical Analysis",
      description: "Uncovering hidden patterns and trends in your data"
    },
    {
      title: " Dynamic Data Visualization",
      description: "Translating complex information into clear, compelling visual narratives"
    },
    {
      title: "Precision-Driven Insights",
      description: "Delivering accurate, timely, and relevant business intelligence "
    },
    
    {
      title: "Predictive Analytics",
      description: "Forecasting future trends to inform strategic planning and risk management "
    }
  ];


 


  
const Serv3 = () => {

  return (
    <>
    <Navbar />
    <div className="serv1-container">
        <div className="video-background-container">
      {/* <video autoPlay loop muted playsInline className="video-background">
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <div className="content-overlay">
        {/* <h1>SERVICES</h1> */}
        <p>Data Engineering</p>
      </div>
    </div>

    </div>
    
       
    <div className="serv22" >
          <div className="rows-div">
            <div className="col-1">
              
                <p className="descrip">
                We harness the power of cutting-edge analytics to transform raw data into actionable insights.
Our advanced analytics capabilities are designed to elevate your decision-making process,
providing you with a competitive edge in today's data-driven landscape.Our comprehensive
suite of analytics solutions includes:
                </p>
                
            </div>
            <div className="col-2">
              <div className="about-img1">
                {/* <img className="image-left" src={pic2} alt="Image Left" title="Image Left" />
                <img className="image-right" src={pills} alt="Image Right" title="Image Left" />
                */}
                <img src={serv3} alt="" />
              </div>
            </div>
          </div>

       </div>

       <div className="services-container">
      {services.map((service, index) => (
        <div key={index} className="service-card">
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
    <div className="benefits">
        <div className="b-title">
         <h3> Catalyze Your Transition</h3>
        </div>
     
    <div className="b-cards">
     <div className="about-1">
                <div className="image-l"   />
                <div className="image-r">
                    <h2>Data-Backed Strategies </h2>
                    <br />
                    <p>Make confident decisions supported by robust analytical evidence
                    </p>
                    </div>
                 <div className="topsection"> <h2>01</h2></div>
              </div>

              <div className="about-1">
                <div className="image-l"   />
                <div className="image-r">
                    <h2>Enhanced Performance </h2>
                    <br />
                    <p> Minimize operational expenses through intelligent automation</p>
                    </div>
                 <div className="topsection"> <h2>02</h2></div>
              </div>
              <div className="about-1">
                <div className="image-l"   />
                <div className="image-r">
                    <h2>Competitive Advantage </h2>
                    <br />
                    <p>Stay ahead of market trends with predictive insights
                    </p>
                    </div>
                 <div className="topsection"> <h2>03</h2></div>
              </div>


   </div>
   <div className="b-cards">
     <div className="about-1">
                <div className="image-l"   />
                <div className="image-r">
                    <h2>Improved  Efficiency </h2>
                    <br />
                    <p>Streamline processes based on data-driven recommendations
                    </p>
                    </div>
                 <div className="topsection"> <h2>04</h2></div>
              </div>
              </div>
    </div>
   
    
   
    </>
  )
}

export default Serv3