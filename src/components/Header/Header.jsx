import React from "react";
import { useEffect } from "react";
import "../../assets/css/style.css";
import heroImage1 from "../../assets/images/Untitled design (28) (1).png";
import heroImage2 from "../../assets/images/Untitled design (21) (1) (1).png";
import heroImage3 from "../../assets/images/1200-675-20908254-thumbnail-16x9-pm-surya-ghar-scheme.png";
import "./Header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const carousel = document.querySelector("#heroCarousel");
    if (carousel) {
      new window.bootstrap.Carousel(carousel, {
        interval: 5000, // Slide change interval
        ride: "carousel", // Auto start without stopping
        pause: false, // Prevent pause on hover
        wrap: true, // Infinite loop
      });
    }
  }, []);

  return (
    <div>
      <div id="heroCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
          {/* Slide 1 */}
          <div className="carousel-item active bg-slide-1" data-bs-interval="1200">
            <div className="container text-start text-white">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <h1>Home Appliances</h1>
                  <p>Shop Now for Smart, Reliable, and Modern Home Appliances</p>
                  <a href="#" className="btn btn-secondary me-2" onClick={() => navigate("/shop")}>Shop Now</a>
                  <a href="#" className="btn btn-outline-light">Explore</a>
                </div>
                <div className="col-lg-6 text-center">
                  <img src={heroImage1} className="img-fluid banner-img" alt="Couch Service" />
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item bg-slide-2" data-bs-interval="1200">
            <div className="container text-start text-white">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <h1>Services</h1>
                  <p>Get Trusted Home Appliance Services Now – Fast, Efficient, and Hassle-Free</p>
                  <a href="#" className="btn btn-secondary me-2" onClick={() => navigate("/Service")}>Get Now</a>
                </div>
                <div className="col-lg-6 text-center">
                  <img src={heroImage2} className="img-fluid banner-img" alt="Solar Service 1" />
                </div>
              </div>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="carousel-item bg-slide-3" data-bs-interval="1200">
            <div className="container text-start text-white">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <h1>Solar Services</h1>
                  <p>Keep your solar panels working efficiently year-round.</p>
                  <a href="#" className="btn btn-secondary me-2" onClick={() => navigate("/solar")}>Get Now</a>
                </div>
                <div className="col-lg-6 text-center">
                  <img src={heroImage3} className="img-fluid banner-img" alt="Solar Service 2" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
