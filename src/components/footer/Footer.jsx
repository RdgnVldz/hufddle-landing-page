import React from 'react';
import './footer.css';
import {logoImage, iconPhone, iconEmail } from './imports';
import {ImFacebook2} from 'react-icons/im';
import { FiInstagram } from 'react-icons/fi';
import { FaTwitterSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="huddle__landing-footer section__margin">
      <div className="huddle__landing-footer_top-background"></div>
      <div class="huddle__landing-footer_container">
        <div className="huddle__landing-footer_cta">
          <div className="huddle__landing-footer_cta-title">
            <img src={logoImage} alt="logo" />
          </div>
          <div className="huddle__landing-footer_cta-text">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem.</p>
            <p className="huddle__landing-footer_cta-text_icons"><img src={iconPhone} /> <span>Phone: +1-543-123-4567</span></p>
            <p className="huddle__landing-footer_cta-text_icons"><img src={iconEmail} /> <span>example@huddle.com</span></p>
          </div>
          <div class="huddle__landing-footer-cta-icons">
            <p><ImFacebook2 /></p>
            <p><FiInstagram /></p>
            <p><FaTwitterSquare /></p>
          </div>
        </div>

        <div className="huddle__landing-footer_newsletter">
          <h3>
            NEWSLETTER
          </h3>
          <p>
            To recieve tips on how to grow your community, sign up to our weekly newsletter. We'll never send you spam or pass on your email address
          </p>
          <div className="huddle__landing-footer_newsletter-title">
            <input type="email" name="email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default Footer;