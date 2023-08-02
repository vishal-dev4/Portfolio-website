import React, { useState } from 'react';
import './Navbar.css';
import Resume from '../resume.pdf';
import Toggle from '../Toggle/Toggle';
import Menu from '../../img/hamburger.png';
import {Link} from 'react-scroll';
import {themeContext} from "../../Context";
import { useContext } from "react";

function Navbar() {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const mobile = window.innerWidth<=480 ? true : false ;
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className='n-wrapper' style={{backgroundColor: darkMode? 'black': ''}}>
      <div className="n-left">
        <div className="n-name">Vishal</div>
        <Toggle/>
      </div>
      <div className="n-right">
        {(menuOpened===false && mobile===true)? (
          <div className='menubar'>
          <img src={Menu} alt="" style={{width: '1.5rem', height: '1.5rem'}}
          onClick={()=>{setMenuOpened(true)}}/>
          </div>
        ) : (
          <div className="n-list">
            {(menuOpened===true)? (<button className='close-menu' onClick={()=>setMenuOpened(false)}>X</button>):('')}
          <ul style={{listStyleType: 'none'}}>
            <Link onClick={()=>setMenuOpened(false)} spy={true} to='Navbar' smooth={true} activeClass='activeClass' >
              <li>Home</li>
            </Link>

            <Link onClick={()=>setMenuOpened(false)} spy={true} to='About' smooth={true} activeClass='activeClass' >
              <li>About</li>
            </Link>

            <Link onClick={()=>setMenuOpened(false)} spy={true} to='Skills' smooth={true} >
            <li>Skills</li>
            </Link>

            <Link onClick={()=>setMenuOpened(false)} spy={true} to='Projects' smooth={true} >
            <li>Projects</li>
            </Link>

            <Link onClick={()=>setMenuOpened(false)} spy={true} to='Contact' smooth={true} >
            <li>Contact</li>
            </Link>
                
          </ul>
      </div>
        )}
        

        <a href={Resume} download><button className='button n-button'>Resume <span>&#8595;</span></button></a>
        
      </div>
    </div>
  )
}

export default Navbar
