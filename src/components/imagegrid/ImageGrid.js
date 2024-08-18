import React, { useEffect, useRef } from 'react';
import styles from './ImageGrid.module.css';
import ScrollReveal from 'scrollreveal';

import image1 from "../../images/לאנס מאכלים 1.png";
import image2 from "../../images/לאנס מאכלים 2.png";
import image3 from "../../images/לאנס מאכלים 3.png";
import image4 from "../../images/לאנס מאכלים 4.png";
import image5 from "../../images/לאנס מאכלים 5.png";
import image6 from "../../images/לאנס מאכלים 6.png";
import image7 from "../../images/לאנס מאכלים 7.png";
import image8 from "../../images/לאנס מאכלים 8.png";
import image9 from "../../images/לאנס מאכלים 9.png";
import image10 from "../../images/לאנס מאכלים 10.png";
import image11 from "../../images/לאנס מאכלים 11.png";
import image12 from "../../images/לאנס מאכלים 12.png";
import image13 from "../../images/לאנס מאכלים 13.png";
import image14 from "../../images/לאנס מאכלים 14.png";
import image15 from "../../images/לאנס מאכלים 15.png";
import image16 from "../../images/לאנס מאכלים 16.png";
import image17 from "../../images/לאנס מאכלים 17.png";
import image18 from "../../images/לאנס מאכלים 18.png";
import image19 from "../../images/לאנס מאכלים 19.png";
import image20 from "../../images/לאנס מאכלים 20.png";
import image21 from "../../images/לאנס מאכלים 21.png";
import image22 from "../../images/לאנס מאכלים 22.png";
import image23 from "../../images/לאנס מאכלים 23.png";
import image24 from "../../images/לאנס מאכלים 24.png";
import image25 from "../../images/לאנס מאכלים 25.png";
import image26 from "../../images/לאנס מאכלים 26.png";
import image27 from "../../images/לאנס מאכלים 27.png";
import image28 from "../../images/לאנס מאכלים 28.png";

const images1 = [
  image1, image2, image3, image4, image5, image6, image7, image8, image9, image10,
  image11, image12, image13, image14,
];

const images2 = [
  image15, image16, image17, image18, image19, image20,
  image21, image22, image23, image24, image25, image26, image27, image28
];

const ImageGrid = ({ useSecondArray = false }) => {
  const gridRef = useRef(null);
  const images = useSecondArray ? images2 : images1;

  useEffect(() => {
    if (gridRef.current) {
      ScrollReveal().reveal(gridRef.current.children, {
        delay: 200,
        distance: '50px',
        duration: 1000,
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
        interval: 100,
        opacity: 0,
        origin: 'bottom',
        rotate: {
          x: 20,
          z: -10
        },
        scale: 0.9
      });
    }
  }, []);

  return (
    <div className={styles.container}>
      <div ref={gridRef} className={styles.grid}>
        {images.map((image, index) => (
          <div key={index} className={styles.imageWrapper}>
            <img
              src={image}
              alt={`לאנס מאכלים ${index + 1}`}
              className={styles.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;