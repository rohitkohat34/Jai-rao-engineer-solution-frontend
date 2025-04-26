import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import banner1 from "../../assets/images/banner1.png";
import banner2 from "../../assets/images/banner2.png";
import banner3 from "../../assets/images/banner3.png";
import banner4 from "../../assets/images/banner4.png";
import banner5 from "../../assets/images/banner5.png";
import banner6 from "../../assets/images/banner8.png";
import banner7 from "../../assets/images/banner9.png";
import banner8 from "../../assets/images/banner10.png"

const FoodDisplay = () => {
  const navigate = useNavigate();
  const scrollRef1 = useRef(null);
  const scrollRef2 = useRef(null);

  const banners = [
    { image: banner1, category: "Ac" },
    { image: banner2, category: "Refrigerator" },
    { image: banner3, category: "Washing Machine" },
    { image: banner4, category: "Water Purifier" },
    { image: banner5, category: "Deep Freezer" },
    { image: banner7, category: "TV" },
    { image: banner8, category: "Air Cooler" },
  ];

  const services = [
    { image: banner1, category: "Ac", link: "/services/ac" },
    { image: banner2, category: "Refrigerator", link: "/services/refrigerator" },
    { image: banner3, category: "Washing Machine", link: "Services/washingMachine" },
    { image: banner4, category: "Water Purifier", link: "/Services/waterPurifier" },
    { image: banner6, category: "Solar", link: "/solar" },
  ];

  useEffect(() => {
    const startAutoScroll = (scrollContainer) => {
      if (!scrollContainer) return;

      const scrollStep = 1;
      const scrollInterval = 20;

      const autoScroll = setInterval(() => {
        if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
          scrollContainer.scrollLeft = 0;
        } else {
          scrollContainer.scrollLeft += scrollStep;
        }
      }, scrollInterval);

      return () => clearInterval(autoScroll);
    };

    const stopScroll1 = startAutoScroll(scrollRef1.current);
    const stopScroll2 = startAutoScroll(scrollRef2.current);

    return () => {
      if (stopScroll1) stopScroll1();
      if (stopScroll2) stopScroll2();
    };
  }, []);

  const handleCategoryClick = (item) => {
    const link = item.link || `/shop?category=${encodeURIComponent(item.category)}`;
    navigate(link);
  };

  const renderBannerItems = (items, ref) => (
    <div
      ref={ref}
      className="scroll-container"
      style={{
        display: "flex",
        gap: "20px",
        overflowX: "auto",
        whiteSpace: "nowrap",
        paddingBottom: "10px",
        scrollBehavior: "smooth",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        maxWidth: "100%",
      }}
    >
      {items.map((item, index) => (
        <div
          key={index}
          onClick={() => handleCategoryClick(item)}
          style={{
            backgroundImage: `url(${item.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "250px",
            width: "250px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            flexShrink: 0,
            cursor: "pointer",
          }}
        >
          <div
            style={{
              background: "rgba(0, 0, 0, 0.6)",
              color: "#fff",
              padding: "10px 20px",
              borderRadius: "5px",
              fontSize: "16px",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {item.category}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="banner" style={{ width: "100%", overflowX: "hidden" }}>
      <div className="container">
        <h2 className="text-uppercase text-danger">Discover The Collections</h2>
        {renderBannerItems(banners, scrollRef1)}
      </div>
      <div className="container text-center">
        <h2 className="text-uppercase text-danger">Services</h2>
        {renderBannerItems(services, scrollRef2)}
      </div>
    </div>
  );
};

export default FoodDisplay;
