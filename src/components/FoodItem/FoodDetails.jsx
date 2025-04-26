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

  if (!food_list || !Array.isArray(food_list) || food_list.length === 0) {
    return <p className="text-center mt-5">Loading...</p>;
  }

  const foodItem = food_list.find((item) => item._id?.toString() === id);

  if (!foodItem) {
    return <p className="text-center mt-5">Food item not found.</p>;
  }

  const { name, price, description, image, discount, finalPrice } = foodItem;

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(price);
  };

  const handleAddToCart = () => {
    addToCart(foodItem._id);
    setTimeout(() => navigate("/cart"), 300);
  };

  const descriptionPoints = description
    ? description.split(/\n|,/).map(point => point.trim()).filter(point => point)
    : ["No description available"];

  return (
    <Container className="food-details-container">
      <Row className="justify-content-center align-items-center">
        <Col md={5} className="image-container">
          <img 
            src={`http://localhost:3000/images/${image}`} 
            alt={name} 
            className="food-image"
          />
        </Col>
        <Col md={6} className="text-container">
          <h2 className="food-name">{name}</h2>
          <h5 className="food-description-title">Product Highlights:</h5>
          <p className="food-description">
            {descriptionPoints.slice(0, showFullDescription ? descriptionPoints.length : 3).map((point, index) => (
              <li key={index}>• {point}</li>
            ))}
          </p>
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
           <span>🛒</span>  Add to Cart
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default FoodDetails;