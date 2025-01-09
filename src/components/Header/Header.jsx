import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import './Header.css';

// Import header images
import header1 from '../../assets/header1.png';
import header2 from '../../assets/header2.png';
import header3 from '../../assets/header3.png';
import header4 from '../../assets/header4.png';
import header5 from '../../assets/header5.png';

const Header = () => {
  const headerImages = [header1, header2, header3, header4, header5];

  return (
    <div className='header'>
      <Carousel 
        autoPlay 
        infiniteLoop 
        showThumbs={false} 
        showStatus={false}
        interval={5000}
        dynamicHeight={false}
      >
        {headerImages.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index + 1}`} className="carousel-image" />
          </div>
        ))}
      </Carousel>
      
    </div>
  );
};

export default Header;
