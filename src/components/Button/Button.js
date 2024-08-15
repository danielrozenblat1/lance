import { useEffect } from 'react';
import styles from './Button.module.css'; // Assuming the CSS file is in the same directory
import {Link as ScrollLink} from "react-scroll"
import ScrollReveal from 'scrollreveal';
const Button=(props)=> {
     
  const handleClick = () => {
    const phoneNumber = "+972534486610";
    // Set the message content
    const message ="היי לאנס ,אני רוצה לשמוע מכם עוד על..";

    // Encode the message for the URL
    const encodedMessage = encodeURIComponent(message);
    // Construct the WhatsApp message URL with phone number and message
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
    // Open the URL in a new tab
    window.open(whatsappURL, "_blank");

  };
  useEffect(()=>{
    ScrollReveal().reveal(`.${styles.button}`, {
        duration: 1000,
        distance: "30px",
        origin: "top", // Start from the right side
        easing: "ease-out",
        reset:false,
        viewFactor: 0.2,
        interval: 300, // Delay between each element
        delay: 200, // Delay before the animation starts
        scale: 1, // Set scale to 1 or null
      });
  
  
  },[])
  return (
   <div className={styles.center} onClick={handleClick}><button className={styles.button}>{props.text}</button> </div>
  );
}
export default Button