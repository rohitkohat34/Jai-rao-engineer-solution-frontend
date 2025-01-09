import React, { useState } from 'react'; 
import axios from 'axios'

import './ACService.css';
import { assets } from '../../assets/assets';
const ACService = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupContent, setPopupContent] = useState('');
  const [selectedService, setSelectedService] = useState(null);
  const [mobileNumber, setMobileNumber] = useState('');
  
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
        category: 'Repair',
        userId: '67712d55d11963089c52ce3b', 
        mobileNumber: '9876543210', // Replace with actual mobile number
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

  

  const acrepair = [
    { title: "Less/no cooling", rating: 3.8, price: 499 },
    { title: "Power issue", rating: 3.8, price: 499 },
    { title: "Unwanted noise/smell", rating: 3.8, price: 499 },
    { title: "Water leakage", rating: 3.8, price: 499 },
    
    
  ];

  const acgas = [
    { title: "AC gas leak fix & refill", rating: 3.8, price: 3000},
    { title: "AC gas top-up", rating: 3.8, price: 1500},
  ]
  
  const acservice = [
    { title: "Split AC", rating: 3.8, price: 227},
    { title: "Window AC", rating: 3.8, price: 227},
  ]
  
  const acservices = [
    { title: "Anti-rust deep clean AC service", rating: 3.8, price: 227},
    
  ]

  const acinstall = [
    { title: "Split AC", rating: 3.8, price: 699},
    { title: "Window AC", rating: 3.8, price: 599},
    
  ]

  const acuninstall = [
    { title: "Split AC", rating: 3.8, price: 599},
    { title: "Window AC", rating: 3.8, price: 499},
    
  ]

  return (
    <div className="container">
      <div className="left">
        <h1>AC Services &amp; Repair</h1>
        
        <div className="warranty">Up to 180-day warranty on all repairs</div>
        <br/>
        <div className="services">
          <div className="service">
            <img
              alt="repair"
              src={assets.acrepair}
            />
            <p>Repair</p>
          </div>
          <div className="service">
            <img
              alt="Technician servicing an AC unit"
              src={assets.acservice}
            />
            <p>Service</p>
          </div>
          <div className="service">
            <img
              alt="service"
              src={assets.acintallation}
            />
            <p>Installation/<br/>Uninstallation</p>
          </div>
          
        </div>
      </div>
      <div className="right">
        <h2>Repair &amp; Gas Refill</h2>
        <p>
          <strong>AC repair</strong>
        </p>
        <p>Starts at ₹99</p>
        <p>Detailed examination to find problems before fixing them</p>
        <p className="details" onClick={() => openPopup( <div className="containers">
      <h1>AC Repair</h1>
      <br/>
      <hr className="horizontal-line" />
      <br/>
      <div className="cards-container">
      
        {acrepair.map((service, index) => (
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
          alt="repair"
          src={assets.acimage}
        />

        <div className="add-button">
          <button onClick={() => openPopup( <div className="containers">
      <h1>AC Repair</h1>
      <br/>
      <hr className="horizontal-line" />
      <br/>
      <div className="cards-container">
      
        {acrepair.map((service, index) => (
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
          <p>
            <strong>AC gas leak fix & refill</strong>
          </p>
          <p>Starts at ₹99</p>
          <p>Before gas is refilled, a thorough inspection is done to find and repair any leaks.</p>
          <p className="details" onClick={() => openPopup(<div className="containers">
      <h1>AC gas leak fix & refill</h1>
      <br/>
      <hr className="horizontal-line" />
      <br/>
      <div className="cards-containers">
      
        {acgas.map((service, index) => (
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
            alt="ac image"
            src={assets.gasleakproof}
          />

          <div className="add-button">
            <button onClick={() => openPopup(<div className="containers">
      <h1>AC gas leak fix & refill</h1>
      <br/>
      <hr className="horizontal-line" />
      <br/>
      <div className="cards-containers">
      
        {acgas.map((service, index) => (
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
        <h2>Services</h2>
          <p>
            <strong>Power saver AC service</strong>
          </p>
          <p>Starts at ₹99</p>
          <p>Complete indoor unit cleaning with a foam-jet sprayer</p>
          <p className="details" onClick={() => openPopup(<div className="containers">
      <h1>Power saver AC service</h1>
      <br/>
      <hr className="horizontal-line" />
      <br/>
      <div className="cards-containers">
      
        {acservice.map((service, index) => (
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
            alt="power ac"
            src={assets.powerac}
          />

          <div className="add-button">
            <button onClick={() => openPopup(<div className="containers">
      <h1>Power saver AC service</h1>
      <br/>
      <hr className="horizontal-line" />
      <br/>
      <div className="cards-containers">
      
        {acservice.map((service, index) => (
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
            <strong>Anti-rust deep clean AC service</strong>
          </p>
          <p>Starts at ₹99</p>
          <p>uses an anti-rust spray to protect and completely clean your air conditioner, preventing gas leaks.</p>
          <p className="details" onClick={() => openPopup(<div className="containers">
      <h1>Anti-rust deep clean AC service</h1>
      <br/>
      <hr className="horizontal-line" />
      <br/>
      <div className="cards-containers">
      
        {acservices.map((service, index) => (
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
            alt="ac clean"
            src={assets.cleaningac}
          />

          <div className="add-button">
            <button onClick={() => openPopup(<div className="containers">
      <h1>AC gas leak fix & refill</h1>
      <br/>
      <hr className="horizontal-line" />
      <br/>
      <div className="cards-containers">
      
        {acservices.map((service, index) => (
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
            <strong>Ac Installation</strong>
          </p>
          <p>₹499 </p>
          
          <p className="details" onClick={() => openPopup(<div className="containers">
      <h1>AC Installation</h1>
      <br/>
      <hr className="horizontal-line" />
      <br/>
      <div className="cards-containers">
      
        {acinstall.map((service, index) => (
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
            alt="ac install"
            src={assets.acimage}
          />

          <div className="add-button">
            <button onClick={() => openPopup(<div className="containers">
      <h1>AC installation </h1>
      <br/>
      <hr className="horizontal-line" />
      <br/>
      <div className="cards-containers">
      
        {acinstall.map((service, index) => (
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
        <h2>Unintallation</h2>
          <p>
            <strong>Ac Uninstallation</strong>
          </p>
          <p>₹499 </p>
          
          <p className="details" onClick={() => openPopup(<div className="containers">
      <h1>AC Uninstallation</h1>
      <br/>
      <hr className="horizontal-line" />
      <br/>
      <div className="cards-containers">
      
        {acuninstall.map((service, index) => (
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
            alt="ac uninstall"
            src={assets.acimage}
          />

          <div className="add-button">
            <button onClick={() => openPopup(<div className="containers">
      <h1>AC Uninstallation</h1>
      <br/>
      <hr className="horizontal-line" />
      <br/>
      <div className="cards-containers">
      
        {acinstall.map((service, index) => (
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

export default ACService; 
