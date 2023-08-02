import React from 'react'
import './Card.css';
import {themeContext} from "../../Context";
import { useContext } from "react";

function Card({emoji, heading, details}) {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='card'>
      <img src={emoji} alt="" />
      <span style={{color: darkMode? 'white': ''}}>{heading}</span>
      <span>{details}</span>
    </div>
  )
}

export default Card
