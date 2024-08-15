import React, { useEffect } from 'react';
import styles from "./Here.module.css";
import enough from "../../images/enoughFood.png";
import design from "../../images/design.png";
import fresh from "../../images/fresh.png";
import onTime from "../../images/onTime.png";
import cook from "../../images/cook.png";
import ScrollReveal from 'scrollreveal';
const Here = () => {

    useEffect(()=>{
        ScrollReveal().reveal(`.${styles.image}`, {
          duration: 1000,
          distance: "30px",
          origin: "top",
          easing: "ease-out",
          reset: false,
          viewFactor: 0.2,
          interval: 300,
          delay: 200,
          scale: 1,
        });
      },[])
    const items = [
        { image: enough, text: 'כמות אוכל מספקת' },
        { image: design, text: 'הגשה נכונה' },
        { image: fresh, text: 'טריות חומרי הגלם' },
        { image: onTime, text: 'עמידה בזמנים' },
        { image: cook, text: 'עיצוב' },
    ];

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>אצלנו תמיד תמצא</h1>
            <div className={styles.rowContainer}>
                <ul className={styles.row}>
                    {items.slice(0, 3).map((item, index) => (
                        <li key={index} className={styles.item}>
                            <img src={item.image} alt="" className={styles.image} />
                            <span className={styles.text}>{item.text}</span>
                        </li>
                    ))}
                </ul>
                <ul className={styles.row}>
                    {items.slice(3).map((item, index) => (
                        <li key={index + 3} className={styles.item}>
                            <img src={item.image} alt="" className={styles.image} />
                            <span className={styles.text}>{item.text}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Here;