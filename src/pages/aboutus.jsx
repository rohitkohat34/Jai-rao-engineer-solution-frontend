import React from "react";
import { Link } from "react-router-dom";
import "./AboutUs.css";
import aboutImage from "../assets/images/mechanic-with-laptop-white-background_1368-4145.png";

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        {/* Left Section - Image */}
        <div className="about-image">
          <img src={aboutImage} alt="About Us" />
        </div>

        {/* Right Section - Text */}
        <div className="about-text">
          <h2 className="about-title">About Us</h2>
          <p className="about-description">
            Welcome to our shopping experience. We offer high-quality products at the best prices.
          </p>
          <p className="about-description">
            Jay Rao Engineer Solutions is a comprehensive service provider specializing in the sales,
            repair, maintenance, and installation of various household and commercial appliances.
          </p>
          <p className="about-description">
            Founded on May 1, 2019, by Er. Sanyog D. Uikey, a seasoned mechanical engineer with
            extensive experience, our company is committed to delivering high-quality solutions
            tailored to meet the specific needs of our clients.
          </p>
          <p className="about-description">
            Join us in revolutionizing the e-commerce world. Your satisfaction is our priority.
          </p>
          <Link to="/shop" className="shop-now-btn">Shop Now</Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
