import React from 'react';
import './header.css';
import { logoImage, screenMockups } from './imports';

const Header = () => {
  return (
    <div className='huddle__landing-header'> 
      <div className="huddle__landing-header_nav">
        <div className="huddle__landing-header_nav-logo">
          <a href="#"><img src={logoImage} alt="logo" /></a>
        </div>
        <div className="huddle__landing-header_nav-tryit">
          <button>Try It Free</button>
        </div>
      </div>
      <div className="huddle__landing-header_content">
        <h1>Build The Community Your Fans Will Love</h1>
        <p>Huddle re-imagines the way we build communities. You have a voice, but so does 
          your audience. Create connections with your users as you engage in genuine discussion</p>
        <button>Get Started For Free</button>
      </div>
      <div className="huddle__landing-header_mockups">
        <img src={screenMockups} alt="screen mockups" />
      </div>
    </div>
  )
}

export default Header;