import React, { useContext, useState } from 'react';
import './RefrigeratorService.css';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios'

import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const RefrigeratorService = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupContent, setPopupContent] = useState('');
  const [selectedService, setSelectedService] = useState(null);


  const openPopup = (content) => {
    setPopupContent(content);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setPopupContent('');
  };

  const { token } = useContext(StoreContext);
  let decodedToken;
  if (token) {
    try {
      decodedToken = jwtDecode(token);
    } catch (error) {
      console.error('Error decoding token:', error);
    }
  } else {
    console.log('No token available');
  }

  const addServiceToBackend = async (service) => {
    try {
      const response = await axios.post('http://localhost:4000/api/services', {
        title: service.title,
        price: service.price,
        rating: service.rating,
        category: 'Repair',  // Add appropriate category
        userId: decodedToken.id, // Replace with actual userId if available
      });
      alert(`Service "${service.title}" added successfully!`);
      console.log(response.data);
    } catch (error) {
      console.error('Error adding service:', error.message);
      alert('Failed to add service. Please try again.');
    }
  };

  const handleAddClick = (service) => {
    setSelectedService(service); // Set the selected service
    addServiceToBackend(service); // Send service to backend
  };

  const refrigeratorservice = [
    { title: "Excess cooling (frost formation)", rating: 3.9, price: 199 },
    { title: "No cooling", rating: 3.9, price: 199 },
    { title: "No power", rating: 3.9, price: 199 },
    { title: "Noise issue", rating: 3.9, price: 199 },
    { title: "Door issue", rating: 3.9, price: 199 },
    { title: "Water leakage", rating: 3.9, price: 499 },
  ]

  return (
    <div className="container">
      <div className="left">
        <h1>Refrigerator Services
          <br />&amp; Repair</h1>
        <br />
        <div className="warranty">Up to 180-day warranty on all repairs</div>
        <br />
        <div className="services">
          <div className="service">
            <img
              alt="single door"
              src={assets.singledoorref}
            />
            <p>Single door</p>
          </div>

          <div className="service">
            <img
              alt="double door"
              src={assets.doubledoorref}
            />
            <p>Double door</p>
          </div>
          <div className="service">
            <img
              alt="AC unit being uninstalled"
              src={assets.sideref}
            />
            <p>Side-by-side door</p>
          </div>
        </div>
      </div>
      <div className="right">
        <h2>Single door</h2>
        <p>
          <strong>Single door refrigerator check-up</strong>
        </p>
        <p>Starts at ₹99</p>
        <p>Complete check-up to identify issues before repair</p>
        <p className="details" onClick={() => openPopup(<div className="container">
          <h1>Single door refrigerator check-up</h1>
          <br />
          <hr className="horizontal-line" />
          <br />
          <div className="cards-container">

            {refrigeratorservice.map((service, index) => (
              <div className="card cards" key={index}>
                <div className="title">{service.title}</div>
                <div className="rating">
                  <i className="fas fa-star"></i> {service.rating}
                </div>
                <div className="price">₹{service.price}</div>
                <button className="add-button">Add</button>
              </div>
            ))}
          </div>
        </div>)}>
          View details
        </p>
        <img
          alt="single door"
          src={assets.singledoorref}
        />

        <div className="add-button">
          <button onClick={() => openPopup(<div className="container">
            <h1>Single door refrigerator check-up</h1>
            <br />
            <hr className="horizontal-line" />
            <br />
            <div className="cards-container">

              {refrigeratorservice.map((service, index) => (
                <div className="card cards" key={index}>
                  <div className="title">{service.title}</div>
                  <div className="rating">
                    <i className="fas fa-star"></i> {service.rating}
                  </div>
                  <div className="price">₹{service.price}</div>
                  <button className="add-button" onClick={() => handleAddClick(service)}>Add</button>
                </div>
              ))}
            </div>
          </div>)}>Add</button>
        </div>
        <div className="right1">
          <h2>Double door</h2>
          <p>
            <strong>Double door refrigerator check-up(inverter)</strong>
          </p>
          <p>Starts at ₹99</p>
          <p>Complete check-up to identify issues before repair</p>
          <p className="details" onClick={() => openPopup(<div className="containers">
            <h1>Double door refrigerator check-up(inverter)</h1>
            <br />
            <hr className="horizontal-line" />
            <br />
            <div className="cards-containers">

              {refrigeratorservice.map((service, index) => (
                <div className="cards" key={index}>
                  <div className="titles">{service.title}</div>
                  <div className="ratings">
                    <i className="fas fa-star"></i> {service.rating}
                  </div>
                  <div className="prices">₹{service.price}</div>
                  <button className="add-buttons">Add</button>
                </div>
              ))}
            </div>
          </div>)}>
            View details
          </p>
          <img
            alt="double door"
            src={assets.doubledoorref}
          />

          <div className="add-button">
            <button onClick={() => openPopup(<div className="containers">
              <h1>Double door refrigerator check-up (inverter)</h1>
              <br />
              <hr className="horizontal-line" />
              <br />
              <div className="cards-containers">

                {refrigeratorservice.map((service, index) => (
                  <div className="cards" key={index}>
                    <div className="titles">{service.title}</div>
                    <div className="ratings">
                      <i className="fas fa-star"></i> {service.rating}
                    </div>
                    <div className="prices">₹{service.price}</div>
                    <button className="add-buttons" onClick={() => handleAddClick(service)}>Add</button>
                  </div>
                ))}
              </div>
            </div>)}>Add</button>
          </div>
        </div>


        <div className="right1">

          <p>
            <strong>Double door refrigerator check-up (non-inverter)</strong>
          </p>
          <p>Starts at ₹99</p>
          <p>Complete check-up to identify issues before repair</p>
          <p className="details" onClick={() => openPopup(<div className="containers">
            <h1>Double door refrigerator check-up (non-inverter)</h1>
            <br />
            <hr className="horizontal-line" />
            <br />
            <div className="cards-containers">

              {refrigeratorservice.map((service, index) => (
                <div className="cards" key={index}>
                  <div className="titles">{service.title}</div>
                  <div className="ratings">
                    <i className="fas fa-star"></i> {service.rating}
                  </div>
                  <div className="prices">₹{service.price}</div>
                  <button className="add-buttons">Add</button>
                </div>
              ))}
            </div>
          </div>)}>
            View details
          </p>
          <img
            alt="double door"
            src={assets.doubledoorref}
          />

          <div className="add-button">
            <button onClick={() => openPopup(<div className="containers">
              <h1>Double door refrigerator check-up (non-inverter) </h1>
              <br />
              <hr className="horizontal-line" />
              <br />
              <div className="cards-containers">

                {refrigeratorservice.map((service, index) => (
                  <div className="cards" key={index}>
                    <div className="titles">{service.title}</div>
                    <div className="ratings">
                      <i className="fas fa-star"></i> {service.rating}
                    </div>
                    <div className="prices">₹{service.price}</div>
                    <button className="add-buttons" onClick={() => handleAddClick(service)}>Add</button>
                  </div>
                ))}
              </div>
            </div>)}>Add</button>
          </div>
        </div>
        <div className="right1">
          <h2>Side-by-side door</h2>
          <p>
            <strong>Side-by-side door refrigerator check-up</strong>
          </p>
          <p>Starts at ₹99</p>
          <p>Complete check-up to identify issues before repair</p>
          <p className="details" onClick={() => openPopup(<div className="containers">
            <h1>Side-by-side door refrigerator check-up</h1>
            <br />
            <hr className="horizontal-line" />
            <br />
            <div className="cards-containers">

              {refrigeratorservice.map((service, index) => (
                <div className="cards" key={index}>
                  <div className="titles">{service.title}</div>
                  <div className="ratings">
                    <i className="fas fa-star"></i> {service.rating}
                  </div>
                  <div className="prices">₹{service.price}</div>
                  <button className="add-buttons">Add</button>
                </div>
              ))}
            </div>
          </div>)}>
            View details
          </p>
          <img
            alt="side by side door "
            src={assets.sideref}
          />

          <div className="add-button">
            <button onClick={() => openPopup(<div className="containers">
              <h1>Side-by-side door refrigerator check-up</h1>
              <br />
              <hr className="horizontal-line" />
              <br />
              <div className="cards-containers">

                {refrigeratorservice.map((service, index) => (
                  <div className="cards" key={index}>
                    <div className="titles">{service.title}</div>
                    <div className="ratings">
                      <i className="fas fa-star"></i> {service.rating}
                    </div>
                    <div className="prices">₹{service.price}</div>
                    <button className="add-buttons" onClick={() => handleAddClick(service)}>Add</button>
                  </div>
                ))}
              </div>
            </div>)}>Add</button>
          </div>
        </div>
      </div>

      {isPopupOpen && (
        <div className="popup">
          <div className="popup-content">

            <p>{popupContent}</p>
            <button className="close-button" onClick={closePopup}>&times;</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RefrigeratorService;
