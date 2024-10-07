import React, {useRef, useEffect} from 'react'
import {  motion, useInView } from 'framer-motion';
import logo from '../../assets/logo1.png'
import logo1 from '../../assets/logo2.png'
import './Footer.css'



const fadeInUpVariants = {
  hidden: { opacity: 0, y: '100%' },
  visible: {
    opacity: 1,
    y: '0%',
    transition: { duration: 1, ease: 'easeOut', delay: 0.2 },
  },
};
const Footer = () => {

  const footerref = useRef(null);
  const isfooterView = useInView(footerref, { once: true }); // Only trigger once when in view

  useEffect(() => {
    console.log('is footer view ->', isfooterView);
    
  }, [isfooterView  ]);

  return (
    
    <div class="site-footer">
      <div class="container">
        <div class="row">
          <motion.div class="section">
            <motion.h6 ref = {footerref} initial="hidden" animate={isfooterView ? 'visible' : 'hidden'} variants={fadeInUpVariants}>
            <div className="logo">
    <img src={logo1} alt=""class="logo1" />
    <img src={logo} alt=""  class="logo2"/>
   
    </div>
            </motion.h6>
            <motion.p class="footer-text" ref = {footerref} initial="hidden" animate={isfooterView ? 'visible' : 'hidden'} variants={fadeInUpVariants}>We are committed to delivering exceptional results and empowering our clients to thrive in a rapidly evolving technological landscape.</motion.p>
            </motion.div>

          <motion.div class="section1">
            <motion.h6 ref = {footerref} initial="hidden" animate={isfooterView ? 'visible' : 'hidden'} variants={fadeInUpVariants}>Quick Links</motion.h6>
            <motion.ul class="footer-links">
              <motion.li ref = {footerref} initial="hidden" animate={isfooterView ? 'visible' : 'hidden'} variants={fadeInUpVariants}><a href="#hero-1">Behind the Vision</a></motion.li>
              <motion.li ref = {footerref} initial="hidden" animate={isfooterView ? 'visible' : 'hidden'} variants={fadeInUpVariants}><a href="#about-container">What we Do</a></motion.li>
              <motion.li ref = {footerref} initial="hidden" animate={isfooterView ? 'visible' : 'hidden'} variants={fadeInUpVariants}> <a href="#service-container">Get in Touch</a></motion.li>
              <motion.li ref = {footerref} initial="hidden" animate={isfooterView ? 'visible' : 'hidden'} variants={fadeInUpVariants}><a href="#reviews">Careers</a></motion.li>
             
            </motion.ul>
          </motion.div>
          <motion.div class="section1">
            <motion.h6 ref = {footerref} initial="hidden" animate={isfooterView ? 'visible' : 'hidden'} variants={fadeInUpVariants}>Social Media</motion.h6>
            <motion.ul class="footer-links">
              <motion.li ref = {footerref} initial="hidden" animate={isfooterView ? 'visible' : 'hidden'} variants={fadeInUpVariants}><a href="#hero-1">LinkedIn</a></motion.li>
              <motion.li ref = {footerref} initial="hidden" animate={isfooterView ? 'visible' : 'hidden'} variants={fadeInUpVariants}><a href="#about-container">Facebook</a></motion.li>
              <motion.li ref = {footerref} initial="hidden" animate={isfooterView ? 'visible' : 'hidden'} variants={fadeInUpVariants}> <a href="#service-container">Link3</a></motion.li>
              <motion.li ref = {footerref} initial="hidden" animate={isfooterView ? 'visible' : 'hidden'} variants={fadeInUpVariants}> <a href="#service-container">Link4</a></motion.li>

      
             
            </motion.ul>
          </motion.div>

         
        </div>
        <br />
        {/* <hr class="div"/> */}
      
      </div>
      <hr class="div"/>
               
            <p class="copyright-text">Copyright &copy; 2024 All Rights Reserved </p> 
      
    
</div>
  )
}

export default Footer