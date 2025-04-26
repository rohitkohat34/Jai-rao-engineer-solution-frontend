import React, { useState, useContext } from 'react';
import axios from 'axios'
import { jwtDecode } from 'jwt-decode';
import './ACService.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext'
import image from "../../assets/images/acsale.jpg"
const ACService = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupContent, setPopupContent] = useState('');
  const [selectedService, setSelectedService] = useState(null);
  const [invoiceUrl, setInvoiceUrl] = useState(null);

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
        category: 'Repair',
        userId: decodedToken.id, // Send userId from the decoded token
      });
      alert(`Service "${service.title}" added successfully!`);
      console.log(response.data);
      setSelectedService(response.data);
    } catch (error) {
      console.error('Error adding service:', error);
      alert(`Failed to add service. Error: ${error.response ? error.response.data.message : error.message}`);
    }
  };

  





const handleAddClick = async (service) => {
  setSelectedService(service);
  await addServiceToBackend(service);

  
};

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};



  const acrepair = [
    { title: "Less/no cooling", rating: 3.8, price: 499 },
    { title: "Power issue", rating: 3.8, price: 499 },
    { title: "Unwanted noise/smell", rating: 3.8, price: 499 },
    { title: "Water leakage", rating: 3.8, price: 499 },


  ];

  const acgas = [
    { title: "AC gas leak fix & refill", rating: 3.8, price: 3000 },
    { title: "AC gas top-up", rating: 3.8, price: 1500 },
  ]

  const acservice = [
    { title: "Split AC", rating: 3.8, price: 227 },
    { title: "Window AC", rating: 3.8, price: 227 },
  ]

  const acservices = [
    { title: "Anti-rust deep clean AC service", rating: 3.8, price: 227 },

  ]

  const acinstall = [
    { title: "Split AC", rating: 3.8, price: 699 },
    { title: "Window AC", rating: 3.8, price: 599 },

  ]

  const acuninstall = [
    { title: "Split AC", rating: 3.8, price: 599 },
    { title: "Window AC", rating: 3.8, price: 499 },

  ]

  return (
    <div className="container">
      <div className="left">
        <h1>AC Services &amp; Repair</h1>

        <div className="warranty">Up to 90-day warranty on all repairs</div>
        <br />
        <div className="services">
          <div className="service" onClick={() => scrollToSection('ac repair')}>
            <img
              alt="repair"
              src={assets.acrepair}
            />
            <p>Repair</p>
          </div>
          <div className="service"  onClick={() => scrollToSection('ac service')}>
            <img
              alt="Technician servicing an AC unit"
              src={assets.acservice}
            />
            <p>Service</p>
          </div>
          <div className="service" onClick={() => scrollToSection('ac install')}>
            <img
              alt="service"
              src={assets.acintallation}
            />
            <p>Installation/<br />Uninstallation</p>
          </div>

        
        </div>
        <div className="text-center mt-4">
  <img className="img-fluid" style={{ width: "600px", height: "auto" }} src={image} alt="Service" />
</div>
      </div>
      <div className="right">
        <h2>Repair &amp; Gas Refill</h2>
        <p>
          <strong>AC repair</strong>
        </p>
        <p>Starts at ₹299</p>
        <p>Detailed examination to find problems before fixing them</p>
        <p className="details" onClick={() => openPopup(<div className="containers">
          <h1 id="ac repair">AC Repair</h1>
          <br />
          <hr className="horizontal-line" />
          <br />
          <div className="cards-container">

            {acrepair.map((service, index) => (
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
          alt="repair"
          src={assets.acimage}
        />

        <div className="add-button">
          <button onClick={() => openPopup(<div className="containers">
            <h1>AC Repair</h1>
            <br />
            <hr className="horizontal-line" />
            <br />
            <div className="cards-container">

              {acrepair.map((service, index) => (
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
            <strong>AC gas leak fix & refill</strong>
          </p>
          <p>Starts at ₹1999</p>
          <p>Before gas is refilled, a thorough inspection is done to find and repair any leaks.</p>
          <p className="details" onClick={() => openPopup(<div className="containers">
            <h1>AC gas leak fix & refill</h1>
            <br />
            <hr className="horizontal-line" />
            <br />
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
              <br />
              <hr className="horizontal-line" />
              <br />
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
          <h2 id="ac service">Services</h2>
          <p>
            <strong>Foam-jet service </strong>
          </p>
          <p>Starts at ₹449</p>
          <p>Complete indoor unit cleaning with a foam-jet sprayer</p>
          <p>Applicable for both window & split ACs</p>
          <p className="details" onClick={() => openPopup(<div className="containers">
            <h1>Foam-jet service </h1>
            <br />
            <hr className="horizontal-line" />
            <br />
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
              <br />
              <hr className="horizontal-line" />
              <br />
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
          <p>Starts at ₹449</p>
          <p>uses an anti-rust spray to protect and completely clean your air conditioner, preventing gas leaks.</p>
          <p className="details" onClick={() => openPopup(<div className="containers">
            <h1>Anti-rust deep clean AC service</h1>
            <br />
            <hr className="horizontal-line" />
            <br />
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
              <br />
              <hr className="horizontal-line" />
              <br />
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
          <h2 id="ac install">Installation</h2>
          <p>
            <strong>Ac Installation</strong>
          </p>
          <p>₹1199 </p>

          <p className="details" onClick={() => openPopup(<div className="containers">
            <h1>AC Installation</h1>
            <br />
            <hr className="horizontal-line" />
            <br />
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
              <br />
              <hr className="horizontal-line" />
              <br />
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
          <p>₹649 </p>

          <p className="details" onClick={() => openPopup(<div className="containers">
            <h1>AC Uninstallation</h1>
            <br />
            <hr className="horizontal-line" />
            <br />
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
              <br />
              <hr className="horizontal-line" />
              <br />
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
