import React from 'react'
import './CodingOverview.css'
import NumberCounter from 'react-countup';
import {themeContext} from "../../Context";
import { useContext } from "react";

function Experience() {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='coding-overview'>
      <div className="achievement">
        <div  className="circle" style={{border: darkMode? "8px solid #e9b345" : ""}}>
    
          <NumberCounter end={1200} start={1150} delay="4" prefix="+" />
          </div>
        <span>Hrs</span>
        <span>Coding</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{border: darkMode? "8px solid #e9b345" : ""}}>
        <NumberCounter end={30}  delay="4" prefix="+" />
          </div>
        <span>Mini</span>
        <span>Projects</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{border: darkMode? "8px solid #e9b345" : ""}}>
          <NumberCounter end={5}  delay="4" prefix="+" />
          </div>
        <span>Major</span>
        <span>Projects</span> 
      </div>
      <div className="achievement">
        <div className="circle" style={{border: darkMode? "8px solid #e9b345" : ""}}>
          <NumberCounter end={300} start={250} delay="4" prefix="+"/>
          </div>
        <span>DSA</span>
        <span>Problems</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{border: darkMode? "8px solid #e9b345" : ""}}>
        <NumberCounter end={200} start={150} delay="4" prefix="+" /></div>
        <span>Hrs</span>
        <span>Soft Skills</span>
      </div>
    </div>
  )
}

export default Experience
