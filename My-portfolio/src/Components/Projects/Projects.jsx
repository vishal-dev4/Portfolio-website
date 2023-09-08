import React from 'react';
import './Projects.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import Fitnessclub from "../../img/fitness-club.png";
import RealEstate from "../../img/realstate.png";
import Stopwatch from "../../img/stopwatch.png";
import TicTac from "../../img/tic-tac-toe.png";
import Fashntra from "../../img/fashntra.png";
import Calculator from '../../img/calculator.png';
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
      slidePerView={smallScreen? 3 : 1}
      grabCursor={true}
      className='projects-slider'
      >
        <SwiperSlide>
          <div className='p-card'>
            <span style={{color: darkMode? 'white': ''}}>Fitness club</span>
            <img src={Fitnessclub} alt="" />
          </div>
          <div className='p-hidden'>
              <span style={{color: darkMode? 'white': ''}}>Fitness club</span>
              <span style={{color: 'var(--gray)'}}>Achieve your health and fitness goals with our all-in-one app, featuring workout routines, nutrition tracking, and more. Whether you're a beginner or a seasoned athlete, our app offers personalized fitness plans tailored to your needs.</span>
              <div className='p-staks'>
                <span style={{color: 'var(--gray)'}}>Tech Stack:</span>
                <span style={{color: 'var(--gray)'}}>React</span>
                <span>Html</span>
                <span>Css</span>
                <span>JavaScript</span>
              </div>
              <div className='p-buttons'>
                <button className='button' onClick={()=>window.open('https://github.com/vishal-dev4/fitness-club', "_black")}>Source Code</button>
                <button className='button' onClick={()=>window.open('https://fitness-club-ashen.vercel.app/', "_blank")}>Live</button>
                
              </div>
          </div>
        </SwiperSlide>
        
        <SwiperSlide className='swiper-slide'>
          <div className='p-card'>
            <span style={{color: darkMode? 'white': ''}}>Real Estate</span>
            <img src={RealEstate} alt="" />
          </div>
          <div className='p-hidden'>
              <span style={{color: darkMode? 'white': ''}}>Real Estate</span>
              <span style={{color: 'var(--gray)'}}>Explore a world of properties at your fingertips, a vast of homes, apartments, and commercial spaces. App simplifies your property search with advanced filters, virtual tours, and real-time market insights.</span>
              <div className='p-staks'>
                <span style={{color: 'var(--gray)'}}>Tech Stack:</span>
                <span style={{color: 'var(--gray)'}}>React</span>
                <span>Html</span>
                <span>Css</span>
                <span>JavaScript</span>
              </div>
              <div className='p-buttons'>
                <button className='button' onClick={()=>window.open('https://github.com/vishal-dev4/Realstate/tree/master/homyz', "_black")}>Source Code</button>
                <button className='button' onClick={()=>window.open('https://realstate-world.vercel.app/', "_black")}>Live</button>
              </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className='swiper-slide'>
          <div className='p-card'>
            <span style={{color: darkMode? 'white': ''}}>Tic Tac Toe</span>
            <img src={TicTac} alt="" />
          </div>
          <div className='p-hidden'>
              <span style={{color: darkMode? 'white': ''}}>Tic Tac Toe</span>
              <span style={{color: 'var(--gray)'}}>Experience the classic game of Tic Tac Toe in a modern, digital format. Play against friends or family. Enjoy a visually appealing interface and responsive gameplay for hours of entertainment.</span>
              <div className='p-staks'>
                <span style={{color: 'var(--gray)'}}>Tech Stack:</span>
                <span style={{color: 'var(--gray)'}}>Html</span>
                <span>Css</span>
                <span>JavaScript</span>
              </div>
              <div className='p-buttons'>
                <button className='button' onClick={()=>window.open('https://github.com/vishal-dev4/Learning-react-projects/tree/master/Tic-tac-toe', "_black")}>Source Code</button>
                <button className='button' onClick={()=>window.open('https://teal-froyo-865c3b.netlify.app/', "_black")}>Live</button>
              </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className='swiper-slide'>
          <div className='p-card'>
            <span style={{color: darkMode? 'white': ''}}>Fashntra</span>
            <img src={Fashntra} alt="" />
          </div>
          <div className='p-hidden'>
              <span style={{color: darkMode? 'white': ''}}>Fashntra</span>
              <span style={{color: 'var(--gray)'}}>Fashntra is E-Commerce Website & is a clone of Myntra. With a vast collection of products of fashion and clothing, we offer a seamless shopping experience.!</span>
              <div className='p-staks'>
                <span style={{color: 'var(--gray)'}}>Tech Stack:</span>
                <span style={{color: 'var(--gray)'}}>Html</span>
                <span>Css</span>
                <span>JavaScript</span>
              </div>
              <div className='p-buttons'>
                <button className='button' onClick={()=>window.open('https://github.com/ersudhist/-nauseating-fowl-3676', "_black")}>Source Code</button>
                <button className='button' onClick={()=>window.open('https://dashing-monstera-1cd591.netlify.app', "_black")}>Live</button>
              </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className='swiper-slide'>
          <div className='p-card'>
            <span style={{color: darkMode? 'white': ''}}>Stopwatch</span>
            <img src={Stopwatch} alt="" />
          </div>
          <div className='p-hidden'>
              <span style={{color: darkMode? 'white': ''}}>Stopwatch</span>
              <span style={{color: 'var(--gray)'}}>Stopwatch app is your go-to tool for accurate timekeeping in any situation. With a user-friendly interface, it's perfect for timing workouts, laps, or events. Whether you're a student, teacher, or just need precise timing, we've got you covered.</span>
              <div className='p-staks'>
                <span style={{color: 'var(--gray)'}}>Tech Stack:</span>
                <span style={{color: 'var(--gray)'}}>React</span>
                <span>Html</span>
                <span>Css</span>
                <span>JavaScript</span>
              </div>
              <div className='p-buttons'>
                <button className='button' onClick={()=>window.open('https://github.com/vishal-dev4/Learning-react-projects/tree/master/stopwatch', "_black")}>Source Code</button>
                <button className='button' onClick={()=>window.open('https://stopwatch-beryl.vercel.app/', "_black")}>Live</button>
              </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className='swiper-slide'>
          <div className='p-card'>
            <span style={{color: darkMode? 'white': ''}}>Calculator</span>
            <img src={Calculator} alt="" style={{height: smallScreen? '83%' : '87%'}}/>
          </div>
          <div className='p-hidden'>
              <span style={{color: darkMode? 'white': ''}}>Calculator</span>
              <span style={{color: 'var(--gray)'}}>Simplify your math tasks with the calculator app, calculator app is designed for hassle-free arithmetic operations. It boasts a clean and intuitive interface for quick calculations on the go.</span>
              <div className='p-staks'>
                <span style={{color: 'var(--gray)'}}>Tech Stack:</span>
                <span style={{color: 'var(--gray)'}}>Html</span>
                <span>Css</span>
                <span>JavaScript</span>
              </div>
              <div className='p-buttons'>
                <button className='button' onClick={()=>window.open('https://github.com/vishal-dev4/Calculator', "_black")}>Source Code</button>
                <button className='button' onClick={()=>window.open('https://vishal-dev4.github.io/Calculator/', "_black")}>Live</button>
              </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Projects
