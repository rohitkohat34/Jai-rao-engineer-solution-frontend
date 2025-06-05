import './FoodDetails.css';
import React, { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import { Container, Row, Col, Button } from "react-bootstrap";

const FoodDetails = () => {
  const { food_list, addToCart } = useContext(StoreContext) || {};
  const { id } = useParams();
  const navigate = useNavigate();
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!food_list || !Array.isArray(food_list) || food_list.length === 0) {
    return <p className="text-center mt-5">Loading...</p>;
  }

  const foodItem = food_list.find(item => item._id?.toString() === id);

  if (!foodItem) {
    return <p className="text-center mt-5">Food item not found.</p>;
  }

  const {
    name,
    price,
    description,
    discount,
    finalPrice,
    images,
    image: legacyImage
  } = foodItem;

  // Support both new and old images
  const imageUrls = Array.isArray(images) && images.length > 0
    ? images.map(img => `http://localhost:3000/images/${img}`)
    : legacyImage
      ? [`http://localhost:3000/images/${legacyImage}`]
      : [];

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(price);
  };

  const handleAddToCart = () => {
    addToCart(foodItem._id);
    setTimeout(() => navigate("/cart"), 300);
  };

  const descriptionPoints = description
    ? description.split(/\n|,/).map(point => point.trim()).filter(Boolean)
    : ["No description available"];

  return (
    <Container className="food-details-container">
      <Row className="justify-content-center align-items-center">
        <Col md={5} className="image-container">
          {imageUrls.length > 0 && (
            <>
              <img
                src={imageUrls[selectedImageIndex]}
                alt={name}
                className="food-image main-image"
              />
              {imageUrls.length > 1 && (
                <div className="thumbnail-container mt-3">
                  {imageUrls.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`Thumbnail ${idx}`}
                      className={`thumbnail-image ${selectedImageIndex === idx ? "selected-thumbnail" : ""}`}
                      onClick={() => setSelectedImageIndex(idx)}
                    />
                  ))}
                </div>
              )}
            </>
          )}
        </Col>

        <Col md={6} className="text-container">
          <h2 className="food-name">{name}</h2>
          <h5 className="food-description-title">Product Highlights:</h5>
          <ul className="food-description">
            {descriptionPoints
              .slice(0, showFullDescription ? descriptionPoints.length : 3)
              .map((point, index) => (
                <li key={index}>• {point}</li>
              ))}
          </ul>
          {descriptionPoints.length > 3 && (
            <Button
              variant="link"
              className="view-more-button"
              onClick={() => setShowFullDescription(!showFullDescription)}
            >
              {showFullDescription ? "View Less" : "View More"}
            </Button>
          )}
          <p className="food-item-price">
            {discount === 0 ? (
              <span className="final-price">{formatPrice(price)}</span>
            ) : (
              <>
                <span className="original-price">{formatPrice(price)}</span>
                <span className="final-price">{formatPrice(finalPrice)}</span>
              </>
            )}
          </p>
          <Button className="add-to-cart-button" onClick={handleAddToCart}>
            <span role="img" aria-label="cart">🛒</span> Add to Cart
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default FoodDetails;
