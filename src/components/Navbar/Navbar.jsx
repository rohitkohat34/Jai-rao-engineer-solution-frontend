import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/style.css";
import "../../assets/css/tiny-slider.css";
import userIcon from "../../assets/images/user.svg";
import cartIcon from "../../assets/images/cart.svg";
import logo from "../../assets/images/WhatsApp Image 2024-11-19 at 13.32.21_689e0080 (1).jpg"; // Import the logo image
import LoginPopup from "../LoginPopup/LoginPopup";

const Navbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [showLogin, setShowLogin] = useState(false);
  const [showCartDropdown, setShowCartDropdown] = useState(false);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="custom-navbar navbar navbar-expand-md navbar-dark bg-dark" aria-label="Furni navigation bar">
      <div className="container">
        {/* Navbar Brand with Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} alt="Logo" className="me-6" style={{ height: "70px" }} /> 
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={handleNavCollapse}
          data-bs-toggle="collapse"
          data-bs-target="#navbarsFurni"
          aria-controls="navbarsFurni"
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isNavCollapsed ? "" : "show"}`} id="navbarsFurni">
          <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/shop">Shop</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/solar">Solar</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Service">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">Blog</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact us</Link>
            </li>
          </ul>

          <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
            {/* User Login Icon */}
            <li>
              <a className="nav-link" href="#" onClick={() => setShowLogin(true)}>
                <img src={userIcon} alt="User" />
              </a>
            </li>

            {/* Cart Dropdown */}
            <li className="nav-item dropdown">
              <a 
                className="nav-link dropdown-toggle" 
                href="#" 
                id="cartDropdown" 
                role="button" 
                data-bs-toggle="dropdown" 
                aria-expanded={showCartDropdown}
                onClick={() => setShowCartDropdown(!showCartDropdown)}
              >
                <img src={cartIcon} alt="Cart" />
              </a>
              <ul className={`dropdown-menu dropdown-menu-end ${showCartDropdown ? "show" : ""}`} aria-labelledby="cartDropdown">
                <li><Link className="dropdown-item" to="/cart">View Cart</Link></li>
                <li><Link className="dropdown-item" to="/myorders">My Orders</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
    </nav>
  );
};

export default Navbar;
