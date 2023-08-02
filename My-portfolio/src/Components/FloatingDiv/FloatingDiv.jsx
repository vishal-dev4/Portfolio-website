import React from 'react'
import './FloatingDiv.css'
import {themeContext} from "../../Context";
import { useContext } from "react";

function FloatingDiv(props) {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='floatingdiv'>
      <img src={props.image} alt="" />
      <span style={{color: darkMode? 'black' : ''}}>{props.text1}
      <br/>{props.text2}
      </span>
    </div>
  )
}

export default FloatingDiv
