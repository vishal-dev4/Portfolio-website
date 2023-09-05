import React from 'react'
import './GithubStats.css';

import {themeContext} from "../../Context";
import { useContext } from "react";
import GitHubCalender from 'react-github-calendar';
 
function Work() {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='works'>
      <div className='awesome'>
        <span style={{color: darkMode? 'white': ''}}>Github Calender</span>
        <div className='calender'>
          <GitHubCalender username='vishal-dev4'/>
        </div>
        <span style={{color: 'var(--orange)', fontSize: '2.4rem', fontWeight: 600}}>Github Stats</span>
        <div className='stats'>
          <img src={`https://github-readme-streak-stats.herokuapp.com/?user=vishal-dev4&${darkMode? 'theme=dark' : 'theme=light'}&hide_border=true`} alt="" />
          <img src={`https://github-readme-stats.vercel.app/api?username=vishal-dev4&${darkMode? 'theme=dark' : 'theme=light'}&hide_border=true&include_all_commits=true&count_private=true`} alt="" />
          <img src={`https://github-readme-stats.vercel.app/api/top-langs/?username=vishal-dev4&${darkMode? 'theme=dark' : 'theme=light'}&hide_border=true&include_all_commits=true&count_private=true&layout=compact`} alt="" />
        </div>
      </div>
      
        {/* <button className='button s-button'>Hire me</button> */}
        <div className="blur s-blurl" style={{background: '#ABF1FF94'}}></div>
    </div>
  )
} 

export default Work
