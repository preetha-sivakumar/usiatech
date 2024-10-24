import React, { useEffect, useRef } from 'react';
import {  motion, useInView } from 'framer-motion';
import { FaCog, FaDollarSign, FaRocket } from 'react-icons/fa';

import './Serv2.css'
import Navbar from '../../components/Navbar/Navbar'

import pic2 from '../../assets/cyber.jpg'
import pills from '../../assets/coding.jpg'
import videoSource from '../../assets/vid.mp4'

import serv1 from '../../assets/serv1.png'
import timeline from '../../assets/timeline.png'
import icon from '../../assets/icon.png'

const services = [
    {
      title: "Strategic Consulting",
      description: "Tailored guidance to align automation initiatives with your business objectives"
    },
    {
      title: " Custom Development",
      description: "Creating innovative automation solutions designed specifically for your unique needs ."
    },
    {
      title: "Platform Expertise",
      description: "Leveraging our deep knowledge to select and implement the ideal automation platforms for your ecosystem "
    },
    
    {
      title: "Ongoing Operational Support",
      description: "Ensuring your automated processes run smoothly and continue to deliver value long after implementation "
    }
  ];




  
const Serv2 = () => {

  return (
    <>
    <Navbar />
    <div className="serv1-container">
        <div className="video-background-container">
      <video autoPlay loop muted playsInline className="video-background">
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content-overlay">
        {/* <h1>SERVICES</h1> */}
        <p>Workflow Process Automation</p>
      </div>
    </div>

    </div>
    
       
    <div className="serv22" >
          <div className="rows-div">
            <div className="col-1">
              
                <p className="descrip">
                We specialize in crafting Workflow Process Automation solutions that propel your business to
                new heights of operational excellence. By harnessing the power of cutting-edge automation
                technologies, we transform complex workflows into streamlined, cost-effective processes that
                significantly boost productivity.Our comprehensive suite of services encompasses:
                </p>
                
            </div>
            <div className="col-2">
              <div className="about-img">
                {/* <img className="image-left" src={pic2} alt="Image Left" title="Image Left" />
                <img className="image-right" src={pills} alt="Image Right" title="Image Left" />
                */}
                <img src={timeline} alt="" />
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
         <h3> Empower Your Organization</h3>
        </div>
     
    <div className="b-cards">
     <div className="about-1">
                <div className="image-l"   />
                <div className="image-r">
                    <h2>Simplify Operations </h2>
                    <br />
                    <p>Streamline complex workflows for enhanced efficiency</p>
                    </div>
                 <div className="topsection"> <h2>01</h2></div>
              </div>

              <div className="about-1">
                <div className="image-l"   />
                <div className="image-r">
                    <h2>Reduce Costs </h2>
                    <br />
                    <p> Minimize operational expenses through intelligent automation</p>
                    </div>
                 <div className="topsection"> <h2>02</h2></div>
              </div>
              <div className="about-1">
                <div className="image-l"   />
                <div className="image-r">
                    <h2>Maximize Productivity </h2>
                    <br />
                    <p>Unleash your team's potential by automating routine tasks</p>
                    </div>
                 <div className="topsection"> <h2>03</h2></div>
              </div>

   </div>
    </div>
   
    
   
    </>
  )
}

export default Serv2