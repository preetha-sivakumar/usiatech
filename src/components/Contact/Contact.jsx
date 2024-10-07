import React, {useRef} from 'react'
import './Contact.css'

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
  const childVariants1 = {
    hidden: { opacity: 0, y: '100%' },
    visible: {
      opacity: 1,
      y: '0%',
      transition: { duration: 2 },
    },
  };
  
const Contact = () => {
    const contactref= useRef(null);
    const iscontactView = useInView(contactref, {once:true});

    const text1 =" Get in Touch";

   
  return (
    <div className="contact" id="contact-container">
         <div className="contact-img">
         <iframe src='https://my.spline.design/earthdayandnight-bc9c7f66aea93aa59d0beddf73393f4e/' frameborder='0' width='100%' height='100%'></iframe>       
        
         <script type="module" src="https://unpkg.com/@splinetool/viewer@1.9.28/build/spline-viewer.js"></script>
         <spline-viewer url="undefined"></spline-viewer>
          </div>
        <motion.div className="contact-form" 
          ref={contactref}
          initial="hidden"
          animate= {iscontactView ? "visible" : "hidden"}
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
   <div className="form">


        <motion.form  variants ={containerVariants}>
        <motion.div class="form-card"  variants ={childVariants1}>
          <motion.input class="form-input" type="text" name="full_name" required="required"   />
          <motion.label class="form-label" for="full_name">Full Name</motion.label>
        </motion.div>

        <motion.div class="form-card"  variants ={childVariants1}>
          <motion.input class="form-input" type="email" name="email"  required="required"/>
          <motion.label class="form-label" for="email">Email</motion.label>
        </motion.div>

        <motion.div class="form-card"  variants ={childVariants1}>
          <motion.input   class="form-input"   type="number" name="phone_number" required="required" />
          <motion.label class="form-label" for="phone_number">Message</motion.label>
        </motion.div>

        <motion.button class="button" variants ={childVariants1}>Submit

</motion.button>
  </motion.form>
  </div>
        <br />
        
       
       
   </motion.div>
       </div>
    
  )
}

export default Contact