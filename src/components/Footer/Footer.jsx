import React from 'react';
import { Link } from 'react-router-dom';
import sofaImage from '../../assets/images/customer service.png';
import logo from "../../assets/images/WhatsApp Image 2024-11-19 at 13.33.38_2f20e3c4 (1) (1).png";
import './Footer.css';
import { FaTelegramPlane, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container relative">
        
        {/* Sofa Image for Mobile View */}
        <div className="sofa-img-mobile text-center mb-3 d-block d-md-none">
          <img src={sofaImage} alt="Sofa" className="img-fluid" />
        </div>

        <div className="row align-items-center g-5 mb-5">
          <div className="col-lg-4 text-center text-lg-start">
            
            {/* Footer Logo */}
            <div className="mb-4 footer-logo-wrap">
              <a href="#" className="footer-logo">
                <img src={logo} alt="Company Logo" className="img-fluid responsive-logo" />
              </a>
            </div>

            {/* Sofa Image for Desktop View */}
            <div className="sofa-img text-center mb-3 d-none d-md-block">
              <img src={sofaImage} alt="Sofa" className="img-fluid" />
            </div>

            <p className="mb-4">
              Our company specializes in the sales and services of high-quality home appliances, ensuring a seamless and convenient experience for our customers.
            </p>
            <ul className="list-unstyled custom-social d-flex justify-content-center justify-content-lg-start">
              <li><FaTelegramPlane size={30} /></li>
              <li><FaTwitter size={30} /></li>
              <li><FaInstagram size={30} /></li>
              <li><FaLinkedin size={30} /></li>
            </ul>
          </div>

          <div className="col-lg-8">
            <div className="row text-center text-lg-start">
              <div className="col-6 col-sm-3">
                <ul className="list-unstyled">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/Shop">Shop</Link></li>
                  <li><Link to="/Service">Services</Link></li>
                  <li><Link to="/blog">Blog</Link></li>
                </ul>
              </div>
              <div className="col-6 col-sm-3">
                <ul className="list-unstyled">
                  <li><Link to="/contact">Contact Us</Link></li>
                  <li><a href="/support">Support</a></li>
                  <li><a href="/shop">Sales</a></li>
                  <li><a href="/feedback">Feedback</a></li>
                </ul>
              </div>
              <div className="col-6 col-sm-3">
                <ul className="list-unstyled">
                  <li><a href="#">Jobs</a></li>
                  <li><a href="/ourteam">Our team</a></li>
                  <li><a href="/aboutus">About Us</a></li>
                  <li><a href="/privacypolicy">Privacy Policy</a></li>
                </ul>
              </div>
              <div className="col-6 col-sm-3"></div>
            </div>
          </div>
        </div>
    
        <div className="border-top copyright py-3">
          <div className="row align-items-center">
            <div className="col-lg-6 text-center text-lg-start">
              <p className="mb-0">
                Copyright &copy; {new Date().getFullYear()}. All Rights Reserved.
              </p>
            </div>
            <div className="col-lg-6 text-center text-lg-end">
              <ul className="list-unstyled d-inline-flex m-0">
                <li className="me-4"><a href="#">Terms &amp; Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
