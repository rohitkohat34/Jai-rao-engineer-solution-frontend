import React, { useState, useContext } from 'react';
import axios from 'axios'
import { jwtDecode } from 'jwt-decode';
import { assets } from '../../assets/assets';
import './SolarService.css';
import { StoreContext } from '../../context/StoreContext'
import img2 from "../../assets/images/logods.jpg"
import './services.css'



const services = () => {
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
  let decodedToken = null;

  if (token) {
    try {
      decodedToken = jwtDecode(token); // Decode the token
    } catch (error) {
      console.error('Error decoding token:', error);
    }
  }

  const addServiceToBackend = async (service) => {
    if (!decodedToken) {
      alert('You need to be logged in to add a service.');
      return; // Prevent sending request if user is not logged in
    }

    try {
      const response = await axios.post('http://localhost:3000/api/services', {
        title: service.title,
        price: service.price,
        rating: service.rating,
        category: 'installation',
        userId: decodedToken.id, // Send userId from the decoded token
      });
      alert(`Service "${service.title}" added successfully!`);
      console.log(response.data);
    } catch (error) {
      console.error('Error adding service:', error);
      alert(`Failed to add service. Error: ${error.response ? error.response.data.message : error.message}`);
    }
  };

 

  const handleAddClick = (service) => {
    setSelectedService(service); // Set the selected service
    addServiceToBackend(service); // Send service to backend
  };

 
  const solarService = [
    { title: "Solar Service", rating: 4.0, price: 499 },
  ];


  return (
    <div className="container">
      <div className="left">
        <h1>Solar Services </h1>
        <div className="warranty">Up to 180-day warranty on all repairs</div>
        <div className="services">

          <div className="service">
            <img
              alt="solar sales"
              src={assets.solarsales}
            />
            <p>Sales</p>
          </div>

          <div className="service">
            <img
              alt="solar services"
              src={assets.solaeservices}
            />
            <p>Service</p>
          </div>
          <div className="service">
            <img
              alt="solar installation"
              src={assets.solarinstall}
            />
            <p>Install</p>
          </div>

        </div>
      </div>

    <div className="right1">
                              <p><strong><h3>Solar services</h3></strong></p>
                              <p>Starts from ₹499 </p>
                              <p className="details" onClick={() => openPopup()}>
                                View details
                              </p>
                              <img
                                alt="solar install"
                                src={assets.solaeservices}
                              />

                              <div className="add-button">
          <button onClick={() => openPopup(<div className="containers">
            <h1>Solar Services</h1>
            <br />
            <hr className="horizontal-line" />
            <br />
            <div className="cards-container">

              {solarService.map((service, index) => (
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

export default services;
