import React, { useEffect, useRef } from 'react';
import {  motion, useInView } from 'framer-motion';
import { FaCog, FaDollarSign, FaRocket } from 'react-icons/fa';

import './Serv4.css'
import Navbar from '../../components/Navbar/Navbar'

import pic2 from '../../assets/cyber.jpg'
import pills from '../../assets/coding.jpg'
import videoSource from '../../assets/vid.mp4'

import serv4 from '../../assets/serv4.png'
import timeline from '../../assets/timeline.png'
import icon from '../../assets/icon.png'

const services = [
    {
      title: "Intelligent Content Creation",
      description: " Producing high-quality, contextually relevant content at scale"
    },
    {
      title: " Advanced Predictive Analytics",
      description: " Forecasting trends and outcomes with remarkable accuracy"
    },
    {
      title: "Hyper-Personalized User Experiences",
      description: "Tailoring interactions to individual preferences and behaviours "
    },
    
   
  ];


 


  
const Serv4 = () => {

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
        <p>Generative Artifical Intelligence</p>
      </div>
    </div>

    </div>
    
       
    <div className="serv22" >
          <div className="rows-div">
            <div className="col-1">
              
                <p className="descrip">
                We harness the groundbreaking potential of Generative AI to revolutionize business operations
and creative processes across diverse industries. Our cutting-edge Gen AI solutions empower
organizations to achieve unprecedented levels of automation, creativity, and
personalization.Our Generative AI capabilities enable:

                </p>
                
            </div>
            <div className="col-2">
              <div className="about-img1">
                {/* <img className="image-left" src={pic2} alt="Image Left" title="Image Left" />
                <img className="image-right" src={pills} alt="Image Right" title="Image Left" />
                */}
                <img src={serv4} alt="" />
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
         <h3> Unlock Your Full Potential</h3>
        </div>
     
    <div className="b-cards">
     <div className="about-1">
                <div className="image-l"   />
                <div className="image-r">
                    <h2>Streamline Operations </h2>
                    <br />
                    <p>Automate complex tasks and processes for enhanced efficiency</p>
                    </div>
                 <div className="topsection"> <h2>01</h2></div>
              </div>

              <div className="about-1">
                <div className="image-l"   />
                <div className="image-r">
                    <h2>Elevate Customer Engagement </h2>
                    <br />
                    <p>Deliver personalized, AI-driven interactions that delight and retain customers</p>
                    </div>
                 <div className="topsection"> <h2>02</h2></div>
              </div>
              <div className="about-1">
                <div className="image-l"   />
                <div className="image-r">
                    <h2>Drive Innovation </h2>
                    <br />
                    <p>Stay ahead of the curve with AI-generated insights and creative solutions
                    </p>
                    </div>
                 <div className="topsection"> <h2>03</h2></div>
              </div>


   </div>
   <div className="b-cards">
     <div className="about-1">
                <div className="image-l"   />
                <div className="image-r">
                    <h2>Optimize Decision-Making</h2>
                    <br />
                    <p>Leverage AI-powered analytics for data-driven strategies
                    </p>
                    </div>
                 <div className="topsection"> <h2>04</h2></div>
              </div>
              </div>
    </div>
   
    
   
    </>
  )
}

export default Serv4