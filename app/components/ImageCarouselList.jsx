import React from "react";
import ImageCarousel from "./ImageCarousel";
import styles from "../styles/ImageCarouselList.module.css";

const ImageCarouselList = ({ carouselData }) => {
  return (
    <div className={styles.carouselList}>
      {carouselData.map((images, index) => (
        <div key={index} className={styles.carouselItem}>
          <ImageCarousel images={images} />
        </div>
      ))}
    </div>
  );
};

export default ImageCarouselList;
