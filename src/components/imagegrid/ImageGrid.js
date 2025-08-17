import React, { useEffect, useRef } from 'react';
import styles from './ImageGrid.module.css';
import ScrollReveal from 'scrollreveal';

import image1 from "../../images/לאנס אירועים 1.png";
import image2 from "../../images/לאנס אירועים 2.png";
import image3 from "../../images/לאנס אירועים 3.png";
import image4 from "../../images/לאנס אירועים 4.png";
import image5 from "../../images/לאנס אירועים 5.png";
import image6 from "../../images/לאנס אירועים 6.png";
import image7 from "../../images/לאנס אירועים 7.png";
import image8 from "../../images/לאנס אירועים 8.png";
import image9 from "../../images/לאנס אירועים 9.png";
import image10 from "../../images/לאנס אירועים 10.png";
import image11 from "../../images/לאנס אירועים 11.png";
import image12 from "../../images/לאנס אירועים 12.png";
import image13 from "../../images/לאנס אירועים 13.png";
import image14 from "../../images/לאנס מגשים 1.png";
import image15 from "../../images/לאנס מגשים 2.png";

import image17 from "../../images/לאנס מגשים 4.png";
import image18 from "../../images/לאנס מגשים 5.png";
import image19 from "../../images/לאנס תמונות חדשות 1.png";
import image20 from "../../images/לאנס מגשים 7.png";
import image21 from "../../images/לאנס מגשים 8.png";
import image22 from "../../images/לאנס מגשים 9.png";
import image23 from "../../images/לאנס מגשים 10.png";
import image24 from "../../images/לאנס מגשים 11.png";
import image25 from "../../images/לאנס מגשים 12.png";
import image26 from "../../images/לאנס מגשים 13.png";
import image27 from "../../images/לאנס תמונות חדשות 2.png";
import image28 from "../../images/לאנס מגשים 15.png";
import image29 from "../../images/לאנס תמונות חדשות 3.png";
import image30 from "../../images/לאנס תמונות חדשות 4.png";
import image31 from "../../images/לאנס תמונות חדשות 5.png"
import image32 from "../../images/לאנס תמונות חדשות 6.png"
import image33 from "../../images/לאנס תמונות חדשות 7.png"
import image34 from "../../images/לאנס תמונות חדשות 8.png"
import image35 from "../../images/לאנס תמונות חדשות 9.png"
import image36 from "../../images/לאנס תמונות חדשות 10.png"
import image37 from "../../images/לאנס תמונות חדשות 11.png"
import image38 from "../../images/לאנס תמונות חדשות 12.png"
import image39 from "../../images/לאנס תמונות חדשות 13.png"
import image40 from "../../images/לאנס תמונות חדשות 14.png"
const images1 = [
  image1, image2, image3, image5, image6, image7, image8, image9, image10,
  image11, image12, image13, image14, image17, image20, image21, 
  image22,  image26,  image31,  image32,  image33,  image34,  image35,  image36,  image37,  image38,  image39,  image40
];

const images2 = [
  image19, image27
];

const images3 = [
  image29, image30
];

const ImageGrid = ({ useSecondArray = false, useThirdArray = false }) => {
  const gridRef = useRef(null);
  
  let images;
  if (useThirdArray) {
    images = images3;
  } else if (useSecondArray) {
    images = images2;
  } else {
    images = images1;
  }

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
      <div 
        ref={gridRef} 
        className={`${styles.grid} ${(useSecondArray || useThirdArray) ? styles.gridCentered : ''}`}
      >
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