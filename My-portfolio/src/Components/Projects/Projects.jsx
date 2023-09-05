import React from 'react'
import './Projects.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import 'swiper/css';
import {themeContext} from "../../Context";
import { useContext } from "react";

function Projects() {
 
  const smallScreen = window.innerWidth <= 480;

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='projects' id='Projects'>
      <span style={{color: darkMode? 'white': ''}}>Recent Projects</span>
      <span>Projects</span>

      {/*slider */}
      <Swiper
      spaceBetween={smallScreen? 20 : -900}
      slidePerView={smallScreen? 1 : 3}
      grabCursor={true}
      className='projects-slider'
      >
        <SwiperSlide>
          <div className='p-card'>
            <span style={{color: darkMode? 'white': ''}}>Myntra</span>
            <img src={Sidebar} alt="" />
          </div>
          <div className='p-hidden'>
              <span style={{color: darkMode? 'white': ''}}>Myntra</span>
              <span style={{color: 'var(--gray)'}}>details about myntra website details about myntra website details about myntra website details about myntra website details about myntra website details about myntra website</span>
              <div className='p-staks'>
                <span style={{color: 'var(--gray)'}}>Tech Stack:</span>
                <span style={{color: 'var(--gray)'}}>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
              </div>
              <div className='p-buttons'>
                <button className='button'>Source Code</button>
                <button className='button'>Live</button>
              </div>
          </div>
        </SwiperSlide>
        
        <SwiperSlide className='swiper-slide'>
          <div className='p-card'>
            <span style={{color: darkMode? 'white': ''}}>Myntra</span>
            <img src={HOC} alt="" />
          </div>
          <div className='p-hidden'>
              <span style={{color: darkMode? 'white': ''}}>Myntra</span>
              <span style={{color: 'var(--gray)'}}>details about myntra website details about myntra website details about myntra website details about myntra website details about myntra website details about myntra website</span>
              <div className='p-staks'>
                <span style={{color: 'var(--gray)'}}>Tech Stack:</span>
                <span style={{color: 'var(--gray)'}}>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
              </div>
              <div className='p-buttons'>
                <button className='button'>Source Code</button>
                <button className='button'>Live</button>
              </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className='swiper-slide'>
          <div className='p-card'>
            <span style={{color: darkMode? 'white': ''}}>Myntra</span>
            <img src={Ecommerce} alt="" />
          </div>
          <div className='p-hidden'>
              <span style={{color: darkMode? 'white': ''}}>Myntra</span>
              <span style={{color: 'var(--gray)'}}>details about myntra website details about myntra website details about myntra website details about myntra website details about myntra website details about myntra website</span>
              <div className='p-staks'>
                <span style={{color: 'var(--gray)'}}>Tech Stack:</span>
                <span style={{color: 'var(--gray)'}}>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
              </div>
              <div className='p-buttons'>
                <button className='button'>Source Code</button>
                <button className='button'>Live</button>
              </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className='swiper-slide'>
          <div className='p-card'>
            <span style={{color: darkMode? 'white': ''}}>Myntra</span>
            <img src={MusicApp} alt="" />
          </div>
          <div className='p-hidden'>
              <span style={{color: darkMode? 'white': ''}}>Myntra</span>
              <span style={{color: 'var(--gray)'}}>details about myntra website details about myntra website details about myntra website details about myntra website details about myntra website details about myntra website</span>
              <div className='p-staks'>
                <span style={{color: 'var(--gray)'}}>Tech Stack:</span>
                <span style={{color: 'var(--gray)'}}>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
              </div>
              <div className='p-buttons'>
                <button className='button'>Source Code</button>
                <button className='button'>Live</button>
              </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Projects
