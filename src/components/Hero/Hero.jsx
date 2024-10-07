import React, {useRef} from 'react'
import './Hero.css'

import {motion, useInView} from 'framer-motion'


const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.2,  
        delayChildren: 0.1
      },
    },
  };
  
  const childVariants = {
    hidden: { opacity: 0, y: '100%' },
    visible: {
      opacity: 1,
      y: '0%',
      transition: { duration: 1 },
    },
  };
  
const Hero = () => {
    const heroref= useRef(null);
    const isheroView = useInView(heroref, {once:true});

    const text1 =" Creating Tomorrow, Today";

    const scrollToSection = (sectionId) => {
      const section = document.getElementById(sectionId);
      section.scrollIntoView({ behavior: 'smooth' });
    };
   
  return (
    <div className="hero" id="hero-container">
        <motion.div className="hero-text" 
        ref={heroref}
        initial="hidden"
        animate= {isheroView ? "visible" : "hidden"}
        variants={containerVariants}>
         <motion.p variants= {childVariants}>With your trusted Partner</motion.p>
         <br />
         <motion.h2>
         {text1.split('').map((char, index) => (
              <motion.span key={index} variants={childVariants}>
                {char}
              </motion.span>
            ))}
            </motion.h2>
       
        <br />
        <br />
         <motion.button class="button"   onClick={() => scrollToSection('service-container')} variants ={childVariants}>Explore

         </motion.button>

        </motion.div>
        <div className="hero-img">
        <iframe src='https://my.spline.design/radialglass-8a3982626adf9da52a1d230ef372138a/' frameborder='0' width='200%' height='100%'></iframe>
        <script type="module" src="https://unpkg.com/@splinetool/viewer@1.9.28/build/spline-viewer.js"></script>
<spline-viewer url="https://prod.spline.design/ZrrXpuk0RGZ0krYv/scene.splinecode"></spline-viewer>

        </div>
    </div>
  )
}

export default Hero