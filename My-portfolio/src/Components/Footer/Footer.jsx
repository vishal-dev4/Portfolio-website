import React from 'react'
import './Footer.css';
import Wave from '../../img/wave.png';
import Insta from '@iconscout/react-unicons/icons/uil-instagram';
import Facebook from '@iconscout/react-unicons/icons/uil-facebook';
import Github from '@iconscout/react-unicons/icons/uil-github';
import Twitter from '@iconscout/react-unicons/icons/uil-twitter';
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin';


function Footer() {
  return (
    <div className='footer'>
      <img src={Wave} alt="" style={{width: '100%'}}/>
      <div className='f-contact'>
      <h1>Get In Touch</h1>
      <h2>You can reach out to me at</h2>
      <span> ✉️vc4772845@gmail.com</span>
      <span>📞+91 7355771649</span>
      <div className='f-icons'>
        <a href="https://twitter.com/VishalC2417" target='_blank'><Twitter color='white' size='3rem'/></a>
        <a href="https://www.linkedin.com/in/vishal-chaudhary-422054222/" target='_blank'><Linkedin color='white' size='3rem'/></a>
        <a href="https://www.instagram.com/vishalchaudhary2774/" target='_blank'><Insta color='white' size='3rem'/></a>
        <a href="https://www.facebook.com/profile.php?id=100021146896242" target='_blank'><Facebook color='white' size='3rem'/></a>
        <a href="https://github.com/vishal-dev4" target='_blank'><Github color='white' size='3rem'/></a>
      </div>
      <div>
      <p>Created By Vishal Chaudhary | © 2023. All Rights Reserved</p>
      </div>
      </div>
    </div>
  )
}

export default Footer
