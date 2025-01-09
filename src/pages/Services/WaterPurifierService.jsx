import React, { useState } from 'react'; 
import axios from 'axios'
import './WaterPurifierService.css';
import { assets } from '../../assets/assets';

const WaterPurifierService = () => {
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

  const addServiceToBackend = async (service) => {
    try {
      const response = await axios.post('http://localhost:4000/api/services', {
        title: service.title,
        price: service.price,
        rating: service.rating,
        category: 'Repair',  // Add appropriate category
        userId: 'user_id_placeholder', // Replace with actual userId if available
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

  const waterpurifierrepair = [
    { title: "Water leakage", rating: 3.9, price: 399},
    { title: "Low water flow", rating: 3.9, price: 399},
    { title: "Water leakage", rating: 3.9, price: 399},
    { title: "Foul taste/odour", rating: 3.9, price: 399},
    { title: "Unknown Issue", rating: 3.9, price: 399},
    { title: "Not working", rating: 3.9, price: 399},
  ]

  const waterpurifierservice = [
    { title: "Water purifer service", rating: 3.9, price: 599}
  ]

  const waterpurifierinstall = [
    { title: "Water purifer installation", rating: 3.9, price: 449}
  ]
  
  const waterpurifieruninstall = [
    { title: "Water purifer uninstallation", rating: 3.9, price: 299}
  ]

  return (
    <div className="container">
      <div className="left">
        <h1>Water Purifier Services 
        <br/>&amp; Repair</h1>
        <br/>
        <div className="warranty">Up to 180-day warranty on all repairs</div>
        <br/>
        <div className="services">
          <div className="service">
            <img
              alt="repair"
              src={assets.waterpurifierrepair}
            />
            <p>Repair</p>
          </div>
          
          <div className="service">
            <img
              alt="service"
              src={assets.waterpurifierservice}
            />
            <p>Services</p>
          </div>
          <div className="service">
            <img
              alt="install"
              src={assets.waterpurifierinstall}
            />
            <p>Installation/<br/>Uninstallation</p>
          </div>
        </div>
      </div>
      <div className="right">
        <h2>Repair</h2>
        <p>
          <strong>Water purifier check-up</strong>
        </p>
        <p>Starts at ₹99</p>
        <p>Complete check-up to identify issues before repair</p>
        <p className="details" onClick={() => openPopup( <div className="container">
      <h1>Water purifier check-up</h1>
      <br/>
      <hr className="horizontal-line" />
      <br/>
      <div className="cards-container">
      
        {waterpurifierrepair.map((service, index) => (
          <div className="card" key={index}>
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
          alt="water purifier service"
          src={assets.purifierrepair}
        />

        <div className="add-button">
          <button onClick={() => openPopup( <div className="containers">
      <h1>Water purifier check-up</h1>
      <br/>
      <hr className="horizontal-line" />
      <br/>
      <div className="cards-container">
      
        {waterpurifierrepair.map((service, index) => (
          <div className="card" key={index}>
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
      <h2>Service</h2>
          <p>
            <strong>Water purifier filter check-up</strong>
          </p>
          <p>Starts at ₹99</p>
          <p>Filter & membrane check-up followed by filter replacement if required</p>
          <p className="details" onClick={() => openPopup(<div className="containers">
      <h1>Water purifier filter check-up</h1>
      <br/>
      <hr className="horizontal-line" />
      <br/>
      <div className="cards-containers">
      
        {waterpurifierservice.map((service, index) => (
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
            alt="Technician examining an AC unit"
            src={assets.waterpurifiers}
          />

          <div className="add-button">
            <button onClick={() => openPopup(<div className="containers">
      <h1>Water purifier filter check-up</h1>
      <br/>
      <hr className="horizontal-line" />
      <br/>
      <div className="cards-containers">
      
        {waterpurifierservice.map((service, index) => (
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
        <h2>Installation/Uninstallation</h2>
          <p>
            <strong>Water Purifier Installation</strong>
          </p>
          <p>₹499</p>
          
          <p className="details" onClick={() => openPopup(<div className="containers">
      <h1>Water Purifier Installation</h1>
      <br/>
      <hr className="horizontal-line" />
      <br/>
      <div className="cards-containers">
      
        {waterpurifierinstall.map((service, index) => (
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
            src={assets.waterpurifierinstall}
          />

          <div className="add-button">
            <button onClick={() => openPopup(<div className="containers">
      <h1>Water purifier installation </h1>
      <br/>
      <hr className="horizontal-line" />
      <br/>
      <div className="cards-containers">
      
        {waterpurifierinstall.map((service, index) => (
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
            <strong>Water purifier Uninstallation</strong>
          </p>
          <p>₹499 </p>
          
          <p className="details" onClick={() => openPopup(<div className="containers">
      <h1>Water purifier Uninstallation</h1>
      <br/>
      <hr className="horizontal-line" />
      <br/>
      <div className="cards-containers">
      
        {waterpurifieruninstall.map((service, index) => (
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
            alt="Technician examining an AC unit"
            src={assets.waterpurifierinstall}
          />

          <div className="add-button">
            <button onClick={() => openPopup(<div className="containers">
      <h1>Water purifier Uninstallation</h1>
      <br/>
      <hr className="horizontal-line" />
      <br/>
      <div className="cards-containers">
      
        {waterpurifieruninstall.map((service, index) => (
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

export default WaterPurifierService;
