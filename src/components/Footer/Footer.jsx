import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id="footer">
      <div className='footer-content'>
        <div className='footer-content-left'>
          <img src={assets.logo} alt="" />
          <p>Chota Taj Bagh Rd, near HANUMAN TEMPLE, <br/>Nagpur,Maharashtra 440024</p>
          <div className='footer-social-icon'>
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className='footer-content-center'>
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Sales</li>
            <li>Services</li>
          </ul>
        </div>
        <div className='footer-content-right'>
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>8806732711 / 7385035981</li>
            <li>jayraoengineerssolutions@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr/>
      <p className='footer-copy-right'>Copyrights 2024 @ jayraoengineerssolutions.com - All Right Reserved</p>
    </div>
  )
}

export default Footer
