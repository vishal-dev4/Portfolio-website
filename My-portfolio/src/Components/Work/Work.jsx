import React from 'react'
import './Work.css';

import {themeContext} from "../../Context";
import { useContext } from "react";

 
function Work() {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='works'>
      <div className="awesome">
        <span style={{color: darkMode? 'white': ''}}>Work for All these</span>
        <span>Brands & Clients</span>
        <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, sint?<br/>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, corporis.
        </span>

        <button className='button s-button'>Hire me</button>
        <div className="blur s-blurl" style={{background: '#ABF1FF94'}}></div>
      </div>
      {/*right side */}
      <div className="w-right">
        
      </div>
    </div>
  )
} 

export default Work
