import React, { useEffect, useRef } from 'react';
import {  motion, useInView } from 'framer-motion';
import { FaCog, FaDollarSign, FaRocket } from 'react-icons/fa';

import './Serv5.css'
import Navbar from '../../components/Navbar/Navbar'

import pic2 from '../../assets/cyber.jpg'
import pills from '../../assets/coding.jpg'
import videoSource from '../../assets/vid.mp4'

import serv5 from '../../assets/serv5.png'
import timeline from '../../assets/timeline.png'
import icon from '../../assets/icon.png'

const services = [
    {
      title: "In-Depth Security Assessments",
      description: "Identifying vulnerabilities before they can be exploited"
    },
    {
      title: " Advanced Threat Detection",
      description: " Leveraging cutting-edge technology to spot potential risks in real time"
    },
    {
      title: "Rapid Response Strategies",
      description: " Implementing swift, effective countermeasures to neutralize threats "
    },
    {
        title: "Proactive Defense Mechanisms",
        description: " Anticipating and preventing security breaches before they occur"
      },
    
   
  ];


 


  
const Serv5 = () => {

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
        <p>CyberSecurity</p>
      </div>
    </div>

    </div>
    
       
    <div className="serv22" >
          <div className="rows-div">
            <div className="col-1">
              
                <p className="descrip">
                We stand as your unwavering sentinel, dedicated to safeguarding your digital assets with stateof-the-art cybersecurity services. Our mission is to create an impenetrable shield around your
digital ecosystem, ensuring your business remains resilient against the ever-evolving landscape
of cyber threats.Our comprehensive cybersecurity arsenal includes:


                </p>
                
            </div>
            <div className="col-2">
              <div className="about-img1">
                {/* <img className="image-left" src={pic2} alt="Image Left" title="Image Left" />
                <img className="image-right" src={pills} alt="Image Right" title="Image Left" />
                */}
                <img src={serv5} alt="" />
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
         <h3> Fortify Your Digital Presence</h3>
        </div>
     
    <div className="b-cards">
     <div className="about-1">
                <div className="image-l"   />
                <div className="image-r">
                    <h2>Ironclad Data Protection</h2>
                    <br />
                    <p>Ensuring the confidentiality and integrity of your critical information</p>
                    </div>
                 <div className="topsection"> <h2>01</h2></div>
              </div>

              <div className="about-1">
                <div className="image-l"   />
                <div className="image-r">
                    <h2>Elevate Engagement </h2>
                    <br />
                    <p>Maintaining the availability of your systems and data</p>
                    </div>
                 <div className="topsection"> <h2>02</h2></div>
              </div>
              <div className="about-1">
                <div className="image-l"   />
                <div className="image-r">
                    <h2>Drive Innovation </h2>
                    <br />
                    <p> Meeting and exceeding industry-specific security standards
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
                    <p>Focusing on your core business while we vigilantly guard your digital data
                    </p>
                    </div>
                 <div className="topsection"> <h2>04</h2></div>
              </div>
              </div>
    </div>
   
    
   
    </>
  )
}

export default Serv5