import "./Shop.css";
import React, { useContext, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../../components/FoodItem/FoodItem";
import heroImage1 from "../../assets/images/51xYCxjhGqL._SL1500_ (1)-Photoroom.png";
import heroImage2 from "../../assets/images/21bivbS4ilL (1).png";
import heroImage3 from "../../assets/images/3116W0Ow3iL (1)-Photoroom (1)-Photoroom.png";
import heroImage4 from "../../assets/images/71Kv4RUvrxL._SL1500_ (1)-Photoroom (1)-Photoroom.png";
import heroImage5 from "../../assets/images/41yl8eW3s1L._SL1200_ (1)-Photoroom.png";
import heroImage6 from "../../assets/images/01_7e9498e70c.png"
import heroImage7 from "../../assets/images/40_c37e9128-e2d6-400e-b536-b41ede464ac9.png"
const Shop = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);

  const initialCategory = queryParams.get("category") || "all";
  const initialBrand = queryParams.get("brand") || "all";

  const { food_list: foodItems } = useContext(StoreContext);

  const [category, setCategory] = useState(initialCategory);
  const [selectedBrand, setSelectedBrand] = useState(initialBrand);
  const [priceRange, setPriceRange] = useState([0, 100000]);

  useEffect(() => {
    setCategory(initialCategory);
    setSelectedBrand(initialBrand);
  }, [initialCategory, initialBrand]);

  const categories = ["all", "Ac", "Refrigerator", "Washing Machine", "Water Purifier", "Deep Freezer","Air Cooler", "TV"];
  const brandOptions = {
    "Ac": ["Voltas", "LG", "Godrej", "Blue Star", "Haier"],
    "Refrigerator": ["Whirlpool", "Samsung", "Haier", "Godrej"],
    "Washing Machine": ["LG", "Godrej", "Whirlpool", "Haier"],
    "Water Purifier": ["Kent", "Aquaguard", "Pureit"],
    "Deep Freezer": ["Godrej", "Haier", "Blue Star"],
    "Air Cooler": ["Godrej", "Haier", "Blue Star"],
    "TV": ["Haier", "Samsung", "LG", "Mi"],
    "all": [],
  };

  const brands = brandOptions[category] || [];

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setSelectedBrand("all");
    navigate(`/shop?category=${encodeURIComponent(newCategory)}`);
  };

  const handleBrandChange = (newBrand) => {
    setSelectedBrand(newBrand);
    navigate(`/shop?category=${encodeURIComponent(category)}&brand=${encodeURIComponent(newBrand)}`);
  };

  const filteredItems = foodItems.filter((item) => {
    const isCategoryMatch = category === "all" || item.category?.toLowerCase() === category.toLowerCase();
    const isBrandMatch = selectedBrand === "all" || item.brand?.toLowerCase() === selectedBrand.toLowerCase();
    const isPriceMatch = item.finalPrice >= priceRange[0] && item.finalPrice <= priceRange[1];
    return isCategoryMatch && isBrandMatch && isPriceMatch;
  });

  useEffect(() => {
    const carousel = document.querySelector("#heroCarousel");
    if (carousel) {
      new window.bootstrap.Carousel(carousel, {
        interval: 5000, // Slide change interval
        ride: "carousel", // Auto start without stopping
        pause: false, // Prevent pause on hover
        wrap: true, // Infinite loop
      });
    }
  }, []);

  return (
    <>
      <div id="heroCarousel" className="carousel carousel-fade slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {[
            { image: heroImage1, title: "Ac" },
            { image: heroImage2, title: "Refrigerator" },
            { image: heroImage3, title: "Washing Machine" },
            { image: heroImage4, title: "Water Purifier" },
            { image: heroImage5, title: "Deep Freezer" },
            { image: heroImage6, title: "Air Cooler" },
            { image: heroImage7, title: "TV" },
          ].map((slide, index) => (
            <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={slide.title} data-bs-interval="1500">
              <div className="container text-start text-white">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <h1>{slide.title}</h1>
                    <p>Shop Now for Smart, Reliable, and Modern Home Appliances</p>
                    <Button variant="secondary" onClick={() => handleCategoryChange(slide.title)}>
                      Shop Now
                    </Button>
                  </div>
                  <div className="col-lg-6">
                    <img src={slide.image} className="w-100 img-fluid" style={{ maxHeight: "40vh" }} alt={slide.title} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>

      <Container fluid className="mt-4 shop-container">
        <Row className="align-items-center mb-4">
          <Col md={6} className="d-flex flex-wrap gap-2">
            {categories.map((cat) => (
              <Button key={cat} variant={category === cat ? "primary" : "outline-primary"} onClick={() => handleCategoryChange(cat)} className={`category-btn ${category === cat ? "active" : ""}`}>
                {cat}
              </Button>
            ))}
          </Col>
          
          {brands.length > 0 && (
            <Col md={3}>
              <Form.Select value={selectedBrand} onChange={(e) => handleBrandChange(e.target.value)}>
                <option value="all">All Brands</option>
                {brands.map((brand) => (
                  <option key={brand} value={brand}>{brand}</option>
                ))}
              </Form.Select>
            </Col>
          )}
          
          <Col md={3} className="d-flex align-items-center justify-content-end">
            <Form className="d-flex align-items-center ">
              <Form.Label className="fs-5 fw-bold">Price (₹):</Form.Label>
              <Form.Control type="number" placeholder="Min" value={priceRange[0]} onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])} />
              <span className="fw-bold">-</span>
              <Form.Control type="number" placeholder="Max" value={priceRange[1]} onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])} />
            </Form>
          </Col>
        </Row>
        <Row>
          {filteredItems.length > 0 ? filteredItems.map((item) => (
            <Col key={item._id} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <FoodItem item={item} />
            </Col>
          )) : <Col><p>No products found.</p></Col>}
        </Row>
      </Container>
    </>
  );
};

export default Shop;
