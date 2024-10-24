import React, { useEffect, useRef } from 'react';
import {  motion, useInView } from 'framer-motion';

import './Serv6.css'
import Navbar from '../../components/Navbar/Navbar'

import cloud from '../../assets/cloud.png'
import pills from '../../assets/cloud1.webp'
import videoSource from '../../assets/vid.mp4'

import serv6 from '../../assets/serv6.png'
import icon from '../../assets/icon.png'

const services = [
    {
      title: "Multi-Cloud Proficiency",
      description: "Leveraging the full potential of DevOps, AZURE, AWS, and GCP platforms"
    },
    {
      title: "IoT/OT Security",
      description: "Safeguarding your interconnected devices and operational technology"
    },
    {
      title: "Identity and Access Management",
      description: "Implementing robust AD/PAM solutions for ironclad security"
    },
    {
      title: "Proactive Defense",
      description: "Advanced threat and vulnerability management to stay ahead of potential risks"
    },
    {
      title: "Holistic Network Protection",
      description: "Comprehensive security measures to fortify you entire network"
    },
  ];
  
const Serv6 = () => {

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
        <p>Cloud Services</p>
      </div>
    </div>

    </div>
    <div className="about-container" id="about-container">
       
    <div className="acontainer" >
          <div className="row-aligns-item-center">
            <div className="col-lg">
              <div className="aheading">
                
                <p className="descrip">
                We specialize in cloud infrastructure design and optimization, coupled with robust DevSecOps
                implementation. We architect and fine-tune cloud environments, seamlessly integrating
                cutting-edge DevSecOps practices to ensure optimal performance, scalability, and security.Our
                comprehensive expertise encompasses:
  </p>
                
              </div>
            </div>
            <div className="col-lg">
              <div className="about-img">
                <img className="image-left" src={cloud} alt="Image Left" title="Image Left" />
                <img className="image-right" src={pills} alt="Image Right" title="Image Left" />
               
                
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
    <div className="image">
        <img src={serv6} alt="" className="service1img" />
    </div>
 
      </div>
    </>
  )
}

export default Serv6