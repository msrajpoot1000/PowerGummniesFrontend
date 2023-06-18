import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const Section3 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlide = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  const slideItems = [
    {
      image: 'https://powergummies.com/cdn/shop/files/VERSUON-2-DAPPER-BACKGROUND-WITHOU-ICON_1024x1024.jpg?v=1666188663',
      caption: 'First Slide',
      description: 'Slide 1 description',
    },
    {
      image: 'https://powergummies.com/cdn/shop/files/gradiant_colour_website_1024x1024.png?v=1639567309',
      caption: 'Second Slide',
      description: 'Slide 2 description',
    },
    // Add more slide items as needed
  ];

    return (
      
        <Carousel activeIndex={activeIndex} onSelect={handleSlide}>
            maish
      {slideItems.map((item, index) => (
        <Carousel.Item key={index}>
          <div
            className="carousel-image"
            style={{
              backgroundImage: `url('${item.image}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '400px', // Adjust the height according to your needs
            }}
          ></div>
          <Carousel.Caption>
            <h3>{item.caption}</h3>
            <p>{item.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Section3;
