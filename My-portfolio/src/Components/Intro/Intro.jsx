import React from 'react'
import './Intro.css'
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Twitter from '@iconscout/react-unicons/icons/uil-twitter';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/profile-pick(1).png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import {themeContext} from "../../Context";
import { useContext } from "react";
import {Link} from 'react-scroll';
// import {motion} from 'framer-motion';



function Intro() {

  const transition = {duration : 2, type: 'spring'}

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='intro'>
      <div className="i-left">
        <div className="i-name">
            <span style={{color: darkMode? 'white': ''}}>Hey, I Am</span>
            <span style={{ after: darkMode? 'black': ''}} id={ darkMode? 'black_background' : '' }>Vishal Chaudhary</span>
            <span>Passionate Full Stack Web Developer with a specialization in MERN Stack. Skilled,
              collaborative and attentive developer with a drive to develop the most relevant products.
              Always looking forward to learning something new to strengthen skills learned.
            </span>
        </div>
         <Link spy={true} to='Contact' smooth={true} >
           <button className='button i-button'>Hire me</button>
         </Link>
    <div className="i-icons">
        <a href="https://github.com/vishal-dev4" target='_blank'><img src={Github} alt="Github" /></a>
        <a href="https://www.linkedin.com/in/vishal-chaudhary-422054222/" target='_blank'><img src={LinkedIn} alt="LinkedIn" /></a>
        <a href="https://twitter.com/VishalC2417" target='_blank'><Twitter color='orange' size='6rem'/></a>
    </div>
      </div>
    <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />

        <div initial={{left: '-36%'}} whileInView={{left: '-24%'}} transition={transition} style={{top: '-3%', left:'-17%'}} className='floating-div'>
            <FloatingDiv image={thumbup} text1='Responsive Web' text2='Design'/>
        </div>
        <div style={{top: '-7%', left:'75%'}} className='floating-div'>
            <FloatingDiv image={Crown} text1='Full Stack' text2='Web Developer'/>
        </div>
        <div style={{top: '18rem', left:'1.4rem'}} className='floating-div'>
            <FloatingDiv image={thumbup} text1='Mern Stack' text2='Developer'/>
        </div>
        <div className='blur' style={{background: 'rgb(238 210 255)' }}></div>
        <div className='blur' style={{background: '#C1F5FF', top:'17rem', width:'21rem', height:'11rem', left:'-9rem' }}></div>
    </div>
    </div>
  )
}

export default Intro
