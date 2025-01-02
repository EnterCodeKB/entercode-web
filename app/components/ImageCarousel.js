import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../styles/ImageCarousel.module.css";

const ImageCarousel = ({ images }) => {
  const settings = {
    dots: true, // Visa prickarna
    infinite: true, // Tillåt loopning
    speed: 700, // Mjukare övergång
    slidesToShow: 1, // Visa en bild åt gången
    slidesToScroll: 1, // Scrolla en bild åt gången
    arrows: true, // Visa pilar
    autoplay: true, // Automatisk bildrotation
    autoplaySpeed: 3000, // Rotera var tredje sekund
  };

  return (
    <div className={styles.carousel}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className={styles.slide}>
            <img
              src={image}
              alt={`Bild ${index + 1}`}
              className={styles.image}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
