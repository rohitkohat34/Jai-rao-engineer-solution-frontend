import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from "../../assets/assets";
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("menu");
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);

  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  const handleServiceNavigation = (path) => {
    setShowServicesDropdown(false); // Close dropdown after navigation
    navigate(path);
  };

  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="" className='logo' /></Link>
      <ul className='navbar-menu'>
        <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
        <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Shop</a>
        <div
          className='services-menu-wrapper'
          onClick={() => setShowServicesDropdown(!showServicesDropdown)}
        >
          <a
            href='#services'
            className={menu === "services" ? "active" : ""}
          >
            Services
          </a>
          {showServicesDropdown && (
            <ul className='services-dropdown'>
              <li onClick={() => handleServiceNavigation('/Services/solar')}>Solar</li>
              <li onClick={() => handleServiceNavigation('/Services/ac')}>AC</li>
              <li onClick={() => handleServiceNavigation('Services/washingmachine')}>Washing Machine</li>
              <li onClick={() => handleServiceNavigation('Services/waterpurifier')}>Water Purifier</li>
              
              <li onClick={() => handleServiceNavigation('Services/refrigerator')}>Refrigerator</li>
              
              
            </ul>
          )}
        </div>
        <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact-us</a>
      </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon} alt="" />
        <div className='navbar-search-icon'>
          <Link to='/cart'><img src={assets.basket_icon} alt="" /> </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        {!token ? (
          <button onClick={() => setShowLogin(true)}>Sign In</button>
        ) : (
          <div className='navbar-profile'>
            <img src={assets.profile_icon} alt="" />
            <ul className='nav-profile-dropdown'>
              <li onClick={() => navigate('/myorders')}><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
              <hr />
              <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
