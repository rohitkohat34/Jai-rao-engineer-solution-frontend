import React, { useState } from "react";
import axios from "axios";
import { FaLocationArrow } from "react-icons/fa";
import { MdEmail, MdCall } from "react-icons/md";
import heroImage1 from "../assets/images/pixelcut-export.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/contact", formData);
      setResponseMessage(response.data.message);
      setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" }); // Reset form
    } catch (error) {
      setResponseMessage("Failed to send message. Please try again.");
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <div id="heroCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active bg-slide-1" data-bs-interval="2000">
            <div className="container text-start text-white">
              <div className="row align-items-center">
                <div className="col-lg-6"></div>
                <div className="col-lg-6">
                  <img src={heroImage1} className="img-fluid w-100" style={{ maxHeight: "140vh" }} alt="Couch Service" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Google Map */}
      <div className="map-container" style={{ width: "100%", height: "500px" }}>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d3721.7240857100383!2d79.11101097471695!3d21.123563584516717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d21.1236773!2d79.113697!4m5!1s0x3bd4c78d72e96a89%3A0x25bd5a83d81ee096!2sChota%20Taj%20Bagh%20Rd%2C%20near%20HANUMAN%20TEMPLE%2C%20Ayurvedic%20Layout%2C%20SQURE%2C%20Nagpur%2C%20Maharashtra%20440024!3m2!1d21.123679499999998!2d79.1134756!5e0!3m2!1sen!2sin!4v1740745187516!5m2!1sen!2sin"
          width="100%"
          height="500"
          style={{ border: "0" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Contact Form Section */}
      <div className="untree_co-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-12 pb-4">
              {/* Contact Info */}
              <div className="row mb-5">
                <div className="col-lg-4">
                  <div className="service no-shadow align-items-center link horizontal d-flex active">
                    <div className="service-icon color-1 mb-4">
                      <FaLocationArrow size={30} />
                    </div>
                    <div className="service-contents">
                      <p>12 near Hanuman Temple, Chota Tajbagh Square, Nagpur- 440034</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="service no-shadow align-items-center link horizontal d-flex active">
                    <div className="service-icon color-1 mb-4">
                      <MdEmail size={30} />
                    </div>
                    <div className="service-contents">
                      <p>jayraoengineersolutions@gmail.com</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="service no-shadow align-items-center link horizontal d-flex active">
                    <div className="service-icon color-1 mb-4">
                      <MdCall size={30} />
                    </div>
                    <div className="service-contents">
                      <p>8806732711</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-6">
                    <div className="form-group">
                      <label className="text-black" htmlFor="firstName">First name</label>
                      <input type="text" name="firstName" className="form-control" value={formData.firstName} onChange={handleChange} required />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <label className="text-black" htmlFor="lastName">Last name</label>
                      <input type="text" name="lastName" className="form-control" value={formData.lastName} onChange={handleChange} required />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label className="text-black" htmlFor="phone">Phone no.</label>
                  <input type="text" name="phone" className="form-control" value={formData.phone} onChange={handleChange} required />
                </div>

                <div className="form-group">
                  <label className="text-black" htmlFor="email">Email address</label>
                  <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
                </div>

                <div className="form-group mb-5">
                  <label className="text-black" htmlFor="message">Message</label>
                  <textarea name="message" className="form-control" value={formData.message} onChange={handleChange} required></textarea>
                </div>

                <button type="submit" className="btn btn-primary-hover-outline">Send Message</button>

                {responseMessage && <p className="mt-3">{responseMessage}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
