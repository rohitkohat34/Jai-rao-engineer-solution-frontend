import React, { useContext, useState } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
import { FaTimes } from 'react-icons/fa'; // For close icon

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems = {}, addToCart, removeFromCart, url } = useContext(StoreContext);

  const [showPopup, setShowPopup] = useState(false); // State for popup visibility

  const itemQuantity = cartItems[id] || 0;

  const formatPriceInRupees = (priceInRupees) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(priceInRupees);
  };

  const openPopup = () => setShowPopup(true);
  const closePopup = () => setShowPopup(false);

  // Convert description into an array of points
  const descriptionPoints = description.split(',').map((point) => point.trim());

  return (
    <>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <button className="popup-close-btn" onClick={closePopup}>
              <FaTimes />
            </button>
            <img className="popup-image" src={`${url}/images/${image}`} alt={name} />
            <h2 className="popup-title">{name}</h2>
            <ul className="popup-description"><h5>Specifications :</h5>
              {descriptionPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
            <p className="food-item-price">{formatPriceInRupees(price)}</p>
            <div className="popup-counter">
              <img
                onClick={() => removeFromCart(id)}
                src={assets.remove_icon_red}
                alt="Remove from cart"
              />
              <p>{itemQuantity}</p>
              <img
                onClick={() => addToCart(id)}
                src={assets.add_icon_green}
                alt="Add to cart"
              />
            </div>
          </div>
        </div>
      )}

      <div className="food-item">
        <div className="food-item-img-container">
          <img className="food-item-image" src={`${url}/images/${image}`} alt={name} />
          {itemQuantity === 0 ? (
            <img
              className="add"
              onClick={() => addToCart(id)}
              src={assets.add_icon_white}
              alt="Add to cart"
            />
          ) : (
            <div className="food-item-counter">
              <img
                onClick={() => removeFromCart(id)}
                src={assets.remove_icon_red}
                alt="Remove from cart"
              />
              <p>{itemQuantity}</p>
              <img
                onClick={() => addToCart(id)}
                src={assets.add_icon_green}
                alt="Add to cart"
              />
            </div>
          )}
        </div>
        <div className="food-item-info">
          <div className="food-item-name-rating">
            <p>{name}</p>
            <img src={assets.rating_starts} alt="Rating stars" />
          </div>
          <div className="food-item-desc">
            <p>{descriptionPoints.slice(0, 2).join(', ')}...</p>
            <button className="view-more-btn" onClick={openPopup}>
              View More
            </button>
          </div>
          <p className="food-item-price">{formatPriceInRupees(price)}</p>
        </div>
      </div>
    </>
  );
};

export default FoodItem;
