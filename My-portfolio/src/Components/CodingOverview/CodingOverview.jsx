import React from 'react'
import './CodingOverview.css'

import {themeContext} from "../../Context";
import { useContext } from "react";

function Experience() {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='coding-overview'>
      <div className="achievement">
        <div  className="circle" style={{border: darkMode? "8px solid #e9b345" : ""}}>1200+</div>
        <span>Hrs</span>
        <span>Coding</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{border: darkMode? "8px solid #e9b345" : ""}}>30+</div>
        <span>Mini</span>
        <span>Projects</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{border: darkMode? "8px solid #e9b345" : ""}}>5+</div>
        <span>Major</span>
        <span>Projects</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{border: darkMode? "8px solid #e9b345" : ""}}>300+</div>
        <span>DSA</span>
        <span>Problems</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{border: darkMode? "8px solid #e9b345" : ""}}>200+</div>
        <span>Hrs</span>
        <span>Soft Skills</span>
      </div>
    </div>
  )
}

export default Experience
