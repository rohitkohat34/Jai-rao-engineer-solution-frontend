import React from 'react';
import './ExploreMenu.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/style.css';

// Importing images

import product1 from '../../assets/images/product-1.png';
import product2 from '../../assets/images/product-2.png';
import product3 from '../../assets/images/product-3.png';
import crossIcon from '../../assets/images/cross.svg';
import truckIcon from '../../assets/images/truck.svg';
import bagIcon from '../../assets/images/bag.svg';
import supportIcon from '../../assets/images/support.svg';
import returnIcon from '../../assets/images/return.svg';
import whyChooseImg from '../../assets/images/salies.jpg';
import imgGrid1 from "../../assets/images/Appliances.png";
import imgGrid2 from "../../assets/images/salesandservie.png";
import imgGrid3 from "../../assets/images/Untitled design (55).png";
import solarservice from "../../assets/images/solarservice.jpg"

const ExploreMenu = () => {
  

  return (
    <div>
      <div className="product-section">
        <div className="container">
          <div className="row">
            
            {/* Why Choose Us Section */}
            <div className="why-choose-section">
              <div className="container">
                <div className="row justify-content-between">
                  <div className="col-lg-6">
                    <h2 className="section-title">Why Choose Us</h2>
                    <p>Choose us for quality products, fast shipping, secure payments, 24/7 support, hassle-free returns, and an exceptional shopping experience.</p>
                    <div className="row my-5">
                      <div className="col-6 col-md-6">
                        <div className="feature">
                          <div className="icon">
                            <img src={truckIcon} alt="Fast & Free Shipping" className="img-fluid" />
                          </div>
                          <h3>Fast &amp; Free Shipping</h3>
                          <p>Enjoy Fast & Free Shipping on all orders! Shop now for quick and hassle-free delivery.</p>
                        </div>
                      </div>
                      <div className="col-6 col-md-6">
                        <div className="feature">
                          <div className="icon">
                            <img src={bagIcon} alt="Easy to Shop" className="img-fluid" />
                          </div>
                          <h3>Easy to Shop</h3>
                          <p>Enjoy a seamless, hassle-free experience with fast checkout and secure payments.</p>
                        </div>
                      </div>
                      <div className="col-6 col-md-6">
                        <div className="feature">
                          <div className="icon">
                            <img src={supportIcon} alt="24/7 Support" className="img-fluid" />
                          </div>
                          <h3>24/7 Support</h3>
                          <p>Get 24/7 support! Our team is always available to assist you anytime, anywhere</p>
                        </div>
                      </div>
                      <div className="col-6 col-md-6">
                        <div className="feature">
                          <div className="icon">
                            <img src={returnIcon} alt="Hassle Free Returns" className="img-fluid" />
                          </div>
                          <h3>Hassle Free Returns</h3>
                          <p>Enjoy hassle-free returns! Shop with confidence knowing you can return items easily and quickly</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="img-wrap">
                      <img src={whyChooseImg} alt="Why Choose Us" className="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* We Help Section */}
            <div className="we-help-section">
              <div className="container">
                <div className="row justify-content-between">
                  <div className="col-lg-7 mb-5 mb-lg-0">
                    <div className="imgs-grid">
                      <div className="grid grid-1">
                        <img src={imgGrid1} alt="Interior Design 1" />
                      </div>
                      <div className="grid grid-2">
                        <img src={imgGrid2} alt="Interior Design 2" />
                      </div>
                      <div className="grid grid-3">
                        <img src={imgGrid3} alt="Interior Design 3" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 ps-lg-5">
                    <h2 className="section-title mb-4">
                      We Help You Make Modern Home Appliances Sales and Services
                    </h2>
                    <p>
                      We help you create a modern home with high-quality appliances that enhance your daily life. Our products are designed for efficiency, style, and convenience.
                    </p>
                    <ul className="list-unstyled custom-list my-4">
                      <li>High-Quality Appliances</li>
                      <li>Seamless Sales Experience</li>
                      <li>Reliable Services</li>
                      <li>Customer Satisfaction</li>
                    </ul>
                    <p>
                      <a href="/shop" className="btn">
                        Explore Now
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="why-choose-section">
              <div className="container">
                <div className="row justify-content-between">
                  <div className="col-lg-6">
                    <h2 className="section-title">Solar Services</h2>
                    <p>Reliable and efficient solar services for installation, maintenance, and repair. Harness the power of the sun with expert solutions. Go green and save energy today.</p>
                    <div className="row my-5">
                      <div className="col-6 col-md-6">
                        <div className="feature">
                          
                          <h4 className='text-danger'>On-Grid Solar System</h4>
                          <p>Efficient on-grid solar systems for seamless energy savings and reduced electricity bills. Connect to the grid and harness solar power effortlessly.</p>
                        </div>
                      </div>
                      <div className="col-6 col-md-6">
                        <div className="feature">
                          
                          <h4 className='text-danger'>Off-Grid Solar System</h4>
                          <p>Reliable off-grid solar systems for uninterrupted power in remote locations. Store solar energy and enjoy complete energy independence.</p>
                        </div>
                      </div>
                      <div className="col-6 col-md-6">
                        <div className="feature">
                          
                          <h4 className='text-danger'>Hybrid Solar System</h4>
                          <p>Hybrid solar systems combine the best of on-grid and off-grid solutions, ensuring continuous power supply.Store excess energy and stay powered day and night.</p>
                        </div>
                      </div>
                      <p>
                      <a href="/solar" className="btn">
                        Get Now
                      </a>
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="img-wrap">
                      <img src={solarservice} alt="Why Choose Us" className="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
            
            

          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreMenu;
