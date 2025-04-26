import React from 'react';
import { FaLock, FaInfoCircle } from 'react-icons/fa';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-container light">
     
      

      <div className="content">
        <div className="header">
          
          <h3>Privacy Policy</h3>
        </div>
        <div className="intro">
          <FaInfoCircle className="intro-icon" />
          <p>
            Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you visit our ecommerce website.
          </p>
        </div>
        <section>
          <h2>1. Information We Collect</h2>
          <p>
            We may collect personal information, such as your name, email address, and payment details when you make a purchase.
          </p>
        </section>
        <section>
          <h2>2. How We Use Your Information</h2>
          <p>
            We use your information to process transactions, improve our services, and ensure the security of our platform.
          </p>
        </section>
        <section>
          <h2>3. Third-Party Services</h2>
          <p>
            We may share your data with trusted third-party services to enhance your experience and process payments securely.
          </p>
        </section>
        <section>
          <h2>4. Security</h2>
          <p>
            We implement advanced security measures to protect your information from unauthorized access.
          </p>
        </section>
        <section>
          <h2>5. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy periodically. Please review it regularly to stay informed of any changes.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
