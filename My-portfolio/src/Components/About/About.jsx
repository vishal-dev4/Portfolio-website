import React from 'react'
import './About.css';
import Student from '../../img/student.png';
import Email from '../../img/email.png';
import Location from '../../img/location.png';
import Mobile from '../../img/mobile.png';
import {themeContext} from "../../Context";
import { useContext } from "react";


function About() {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

  return (
    <div className='about' id='About'>
        <div className="a-left">
            <div className='a-about'>
                <span style={{color: darkMode? 'white': ''}}>About <span>Me</span></span>
                
                <span>Hi everyone, I am Vishal Chaudhary from Basti, Uttar Pradesh. 
                I have completed my BCA (Bachelor of Computer Application) 
                from Makhanlal Chaturvedi National University of Journalism and 
                Communication, Bhopal. I enjoy learning computer programming and
                fundamentals. My interest in web development started back last
                year when i was trying to edit things on the web-taught me a 
                lot about HTML & CSS!.
                </span>
            </div>
        </div>
       <div className="a-right">
           <div>
            <span> <img src={Student} alt="" style={{filter: darkMode? 'invert(99%) brightness(99%)':''}}/>Vishal Chaudhary</span>
            <span> <img src={Email} alt="" style={{filter: darkMode? 'invert(100%) brightness(100%)':''}}/>vc4772845@gmail.com</span>
           </div>
           <div>
           <span> <img src={Mobile} alt="" style={{filter: darkMode? 'invert(99%) brightness(99%)':''}}/>+91 7355771649</span>
           <span className='location'> <img src={Location} alt="" style={{transform: 'scale(0.2)', marginRight: '-2rem', filter: darkMode? 'invert(100%) brightness(100%)':''}}/>Basti, Uttar Pradesh</span>
           </div>
       </div>
    </div>
  )
}

export default About
