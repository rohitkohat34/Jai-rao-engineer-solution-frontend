import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import "./FoodItem.css";

const FoodItem = ({ item }) => {
  const navigate = useNavigate();

  if (!item || !item._id) {
    console.error("Invalid item data:", item);
    return null;
  }

  const { _id, name, finalPrice, image, discount, price, category, brand } = item;

  const formatPriceInRupees = (priceInRupees) => {
    return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(priceInRupees);
  };

  const handleNavigation = (e) => {
    e.stopPropagation();
    navigate(`/food/${_id}`);
  };

  return (
    <Card className="food-item shadow-sm border-0" onClick={handleNavigation}>
      <div className="food-item-img-container">
        <Card.Img
          variant="top"
          src={`http://localhost:3000/images/${image}`}
          className="food-item-image img-fluid"
          alt={name}
        />
      </div>
      <Card.Body className="d-flex flex-column justify-content-between">
        <Card.Title className="text-truncate">{name}</Card.Title>
        <Card.Text className="text-muted">
  {category} - {brand !== "unknown" ? brand : "No Brand"}
</Card.Text>


        <p className="food-item-price">
          {discount === 0 ? (
            <span className="final-price">{formatPriceInRupees(price)}</span>
          ) : (
            <>
              <span className="original-price">{formatPriceInRupees(price)}</span>
              <span className="final-price">{formatPriceInRupees(finalPrice)}</span>
            </>
          )}
        </p>

        <Button variant="primary" className="view-details-btn" onClick={handleNavigation}>
          View Details
        </Button>
      </Card.Body>
    </Card>
  );
};

export default FoodItem;
