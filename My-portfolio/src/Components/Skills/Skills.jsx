import React from 'react'
import './Skills.css';
import Card from '../Cards/Card';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Resume from '../My-resume.pdf';
import {themeContext} from "../../Context";
import { useContext } from "react";
import Html from '../../img/html.png';
import Css from '../../img/css.png';
import JavaScript from '../../img/javascript.png';
import Bootstrap from '../../img/bootstrap.png';
import Chakra from '../../img/chakra-ui.png';
import Cypress from '../../img/cypress.jpg';
import Github from '../../img/githubimg.png';
import Express from '../../img/express.png';
import Json from '../../img/json.png';
import Material from '../../img/material.png';
import Mongodb from '../../img/mongodb.png';
import Netlify from '../../img/netlify.png';
import Node from '../../img/nodejs.png';
import Npm from '../../img/npm.png';
import Postman from '../../img/postman.png';
import Reactjs from '../../img/react.png';
import Redux from '../../img/redux.png';
import Typescript from '../../img/typescript.png';
import Vercel from '../../img/vercel.png';
// import {motion} from 'framer-motion';

function Skills() {

  const transition = {duration: 1, type: 'spring'};
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='skills' id='Skills'>
      <div>
        <div className="awesome">
          <span style={{color: darkMode? 'white' : ''}}>My Awesome</span>
          <span>Skills</span>
          <span>As a full stack developer, I possess a comprehensive set of skills that enable me to handle all
            aspects of web application development. On the front-end, I excel in crafting intuitive and responsive
            user interfaces using HTML, CSS, and JavaScript. I have a strong command of modern and very famous 
            front-end librarie React, allowing me to build dynamic and interactive web experiences.</span>
          <a href={Resume} download><button className='button s-button'>Resume <span>&#8595;</span></button></a>
          
          <div className="blur s-blurl" style={{background: '#ABF1FF94'}}></div>
        </div>
        {/*for cards*/}
        <div className="cards">
            <div initial={{left: '25%'}} whileInView={{left: '14rem'}} transition={transition} style={{left: '1rem', top: '-1rem'}}>
            <Card emoji={HeartEmoji} heading={'Front-end'} details={'I am proficient in HTML, CSS, and JavaScript, enabling me to create responsive and interactive designs. With experience in modern front-end framework React, I can efficiently develop dynamic and feature-rich applications.'}/>
            </div>
            <div style={{top: '4rem', left: '13rem'}}>
              <Card emoji={Glasses} heading={'Back-end'} details={'On the back-end, I am adept at designing and developing robust server-side applications. My proficiency lies in language Node.js, along with framework Express. I have hands-on experience in creating RESTful APIs, managing database MongoDB, and ensuring data security and integrity.'}/>
            </div>
            <div style={{top: '9rem', left: '25rem'}}>
              <Card emoji={Humble} heading={'Version Control'} details={"I am well-versed in version control systems like Git, which are essential for efficient and collaborative software development. I can effectively manage and track changes to code throughout the development process. By leveraging branching and merging strategies, I ensure smooth collaboration with teammates, allowing us to work on features and bug fixes simultaneously."}/>
            </div>
            <div className='blur s-blur2' style={{background: 'var(--purple)'}}></div>
        </div>
      </div>

      <div className="all-skills">
            
            <div className='all-f-skill'>
              <span>Frontend</span>
              <div>
                        <div>
                        <img src={Html} alt="" />
                        <span>HTML</span>
                        </div>
                        <div>
                        <img src={Css} alt="" />
                        <span>CSS</span>
                        </div>
                        <div>
                        <img src={JavaScript} alt="" />
                        <span>JAVASCRIPT</span>
                        </div>
                        <div>
                        <img src={Bootstrap} alt="" />
                        <span>BOOTSTRAP</span>
                        </div>
                        <div>
                        <img src={Netlify} alt="" />
                        <span>NETLIFY</span>
                        </div>

                    <div>
                      <img src={Reactjs} alt="" />
                      <span>REACT</span>
                    </div>
                    <div>
                      <img src={Postman} alt="" />
                      <span>POSTMAN</span>
                    </div>
                    <div>
                      <img src={Github} alt="" />
                      <span>GITHUB</span>
                    </div>
                    <div>
                      <img src={Cypress} alt="" />
                      <span>CYPRESS</span> 
                    </div>
                    <div>
                      <img src={Json} alt="" />
                      <span>JSON</span>
                    </div>
                  
                    <div>
                      <img src={Redux} alt="" />
                      <span>REDUX</span>
                    </div>
                    <div>
                      <img src={Typescript} alt="" /> 
                      <span>TYPESCRIPT</span>
                    </div>
                    <div>
                      <img src={Material} alt="" />
                      <span>MATERIAL UI</span>
                    </div>
                    <div>
                      <img src={Chakra} alt="" />
                      <span>CHAKRA UI</span>
                    </div>
                    <div>
                      <img src={Vercel} alt="" />
                      <span>VERCEL</span>
                    </div>
                 
            </div>
           </div>

          <div className="back-end">
            <span>Backend</span>
            <div className='back-end-skill'>
              <div>
              <img src={Node} alt="" />
              <span>NODE JS</span>
              </div>
              <div>
              <img src={Express} alt="" />
              <span>EXPRESS</span>
              </div>
              <div>
              <img src={Mongodb} alt="" />
              <span>MONGO DB</span>
              </div>
              <div>
              <img src={Npm} alt="" />
              <span>NPM</span>
              </div>
            </div>
          </div>
     
      
      
     </div>
    </div>
  )
}

export default Skills
