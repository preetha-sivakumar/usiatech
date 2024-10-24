import React, { useEffect, useRef } from 'react';
import {  motion, useInView } from 'framer-motion';

import './Serv1.css'
import Navbar from '../../components/Navbar/Navbar'

import pic2 from '../../assets/cyber.jpg'
import pills from '../../assets/coding.jpg'
import videoSource from '../../assets/vid.mp4'

import serv1 from '../../assets/serv1.png'
import icon from '../../assets/icon.png'

const services = [
    {
      title: "Full Stack Development",
      description: "End-to-end solutions that bridge front-end aesthetics with robust back-end functionality."
    },
    {
      title: "Site Reliability Engineering",
      description: "Ensuring your digital infrastructure remains resilient, scalable, and consistently performant."
    },
    {
      title: "Design & Architecture",
      description: "Crafting intuitive and scalable system designs that form the backbone of your digital ecosystem."
    },
    {
      title: "UI/UX & Front-End Development",
      description: "Creating captivating user interfaces and experiences that engage and delight your audience."
    },
    {
      title: "Mobile App Development",
      description: "Building responsive and feature-rich applications for iOS and Android platforms."
    },
    {
      title: "Service & Back-End Development",
      description: "Developing powerful, secure, and efficient server-side solutions to drive your business logic."
    },
    {
      title: "Apps Support & Maintenance",
      description: "Providing ongoing care and updates to keep your applications running smoothly and securely."
    },
    {
      title: "Quality Engineering & Assurance",
      description: "Implementing rigorous testing methodologies to ensure flawless performance and user satisfaction."
    }
  ];
  
const Serv1 = () => {

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
        <p>Digital/Managed Services</p>
      </div>
    </div>

    </div>
    <div className="about-container" id="about-container">
       
    <div className="acontainer" >
          <div className="row-aligns-item-center">
            <div className="col-lg">
              <div className="aheading">
                
                <p className="descrip">
                  At the forefront of digital innovation, we deliver a comprehensive suite of cutting-edge services
                  designed to revolutionize your business operations. Our team of seasoned experts harnes ses
                  the power of advanced technologies to create seamless, efficient, and high-performance
                  solutions tailored to your unique needs. Our extensive portfolio of services includes:
                </p>
                
              </div>
            </div>
            <div className="col-lg">
              <div className="about-img">
                <img className="image-left" src={pic2} alt="Image Left" title="Image Left" />
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
        <img src={serv1} alt="" className="service1img" />
    </div>
 
      </div>
    </>
  )
}

export default Serv1