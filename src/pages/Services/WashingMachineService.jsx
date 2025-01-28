import React, { useContext, useState } from 'react';
import './WashingMachine.css';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
const WashingMachine = () => {
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

  const washingmachineauto = [
    { title: "Noise issue", rating: 3.9, price: 499 },
    { title: "Power Issue", rating: 3.9, price: 499 },
    { title: "Draining issue", rating: 3.9, price: 499 },
    { title: "Error in display", rating: 3.9, price: 499 },
    { title: "Not spinning", rating: 3.9, price: 499 },
    { title: "Unknown issue", rating: 3.9, price: 499 },
  ]

  const washingmachineinstall = [
    { title: "Fully automatic top load", rating: 3.9, price: 499 },
    { title: "Fully automatic front load", rating: 3.9, price: 499 },
    { title: "Semi-automatic", rating: 3.9, price: 499 }
  ]

  const washingmachineuninstall = [
    { title: "Fully automatic top load", rating: 3.9, price: 399 },
    { title: "Fully automatic front load", rating: 3.9, price: 399 },
    { title: "Semi-automatic", rating: 3.9, price: 399 }
  ]

  return (
    <div className="container">
      <div className="left">
        <h1>Washing Machine Services
          <br />&amp; Repair</h1>
        <br />
        <div className="warranty">Up to 180-day warranty on all repairs</div>
        <br />
        <div className="services">
          <div className="service">
            <img
              alt="service"
              src={assets.washingservice}
            />
            <p>Service</p>
          </div>

          <div className="service">
            <img
              alt="repair"
              src={assets.washingrepair}
            />
            <p>Repair</p>
          </div>
          <div className="service">
            <img
              alt="install"
              src={assets.washingmachine}
            />
            <p>Installation/<br />
              Uninstallation</p>
          </div>
        </div>
      </div>
      <div className="right">
        <h2>Repair</h2>
        <p>
          <strong>Fully automatic washing machine check-up (top load)</strong>
        </p>
        <p>Starts at ₹99</p>
        <p>Complete check-up to identify issues before repair</p>
        <p className="details" onClick={() => openPopup(<div className="container">
          <h1>Fully automatic washing machine check-up (top load)</h1>
          <br />
          <hr className="horizontal-line" />
          <br />
          <div className="cards-container">

            {washingmachineauto.map((service, index) => (
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
          alt="washing machine"
          src={assets.washinginstall}
        />

        <div className="add-button">
          <button onClick={() => openPopup(<div className="container">
            <h1>Fully automatic washing machine check-up (top load)</h1>
            <br />
            <hr className="horizontal-line" />
            <br />
            <div className="cards-container">

              {washingmachineauto.map((service, index) => (
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
          <p>
            <strong>Fully automatic washing machine check-up (front load)</strong>
          </p>
          <p>Starts at ₹99</p>
          <p>Complete check-up to identify issues before repair</p>
          <p className="details" onClick={() => openPopup(<div className="containers">
            <h1>Fully automatic washing machine check-up (front load)</h1>
            <br />
            <hr className="horizontal-line" />
            <br />
            <div className="cards-containers">

              {washingmachineauto.map((service, index) => (
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
            alt="washing machine"
            src={assets.washinginstall}
          />

          <div className="add-button">
            <button onClick={() => openPopup(<div className="containers">
              <h1>Fully automatic washing machine check-up (front load)</h1>
              <br />
              <hr className="horizontal-line" />
              <br />
              <div className="cards-containers">

                {washingmachineauto.map((service, index) => (
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
            <strong>Semi-automatic washing machine check-up</strong>
          </p>
          <p>Starts at ₹99</p>
          <p>Complete check-up to identify issues before repair</p>
          <p className="details" onClick={() => openPopup(<div className="containers">
            <h1>Semi-automatic washing machine check-up</h1>
            <br />
            <hr className="horizontal-line" />
            <br />
            <div className="cards-containers">

              {washingmachineauto.map((service, index) => (
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
            alt="washing machine"
            src={assets.washingmachines}
          />

          <div className="add-button">
            <button onClick={() => openPopup(<div className="containers">
              <h1>Semi-automatic washing machine check-up</h1>
              <br />
              <hr className="horizontal-line" />
              <br />
              <div className="cards-containers">

                {washingmachineauto.map((service, index) => (
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
          <h2>Installation</h2>
          <p>
            <strong>Washing machine Installation</strong>
          </p>
          <p>₹499</p>

          <p className="details" onClick={() => openPopup(<div className="containers">
            <h1>Washing Machine Installation</h1>
            <br />
            <hr className="horizontal-line" />
            <br />
            <div className="cards-containers">

              {washingmachineinstall.map((service, index) => (
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
            alt="install"
            src={assets.washinginstall}
          />

          <div className="add-button">
            <button onClick={() => openPopup(<div className="containers">
              <h1>Washing Machine installation </h1>
              <br />
              <hr className="horizontal-line" />
              <br />
              <div className="cards-containers">

                {washingmachineinstall.map((service, index) => (
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
          <h2>Uninstallation</h2>
          <p>
            <strong>Washing Machine Uninstallation</strong>
          </p>
          <p>₹499 </p>

          <p className="details" onClick={() => openPopup(<div className="containers">
            <h1>Washing Machine Uninstallation</h1>
            <br />
            <hr className="horizontal-line" />
            <br />
            <div className="cards-containers">

              {washingmachineuninstall.map((service, index) => (
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
            alt="washing machine"
            src={assets.washinginstall}
          />

          <div className="add-button">
            <button onClick={() => openPopup(<div className="containers">
              <h1>Washing Machine Uninstallation</h1>
              <br />
              <hr className="horizontal-line" />
              <br />
              <div className="cards-containers">

                {washingmachineuninstall.map((service, index) => (
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

export default WashingMachine;
