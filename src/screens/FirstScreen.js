import React, { useEffect } from 'react';
import { useReward } from 'react-rewards';
import styles from "./FirstScreen.module.css";
import lance from "../images/לאנס לוגו.png";

const FirstScreen = (props) => {
  const { reward, isAnimating } = useReward('confettiReward', 'confetti', {
    elementCount: 200,
    spread: 160,
    origin: { x: 0.5, y: 0 },
    startVelocity: 40,
    decay: 0.95,
    scalar: 1.2
  });
  
  useEffect(() => {
    reward();
  }, []);

  return (
    <div className={styles.pageContainer}>
      <div id="confettiReward" className={styles.confettiContainer} />
      <div className={styles.contentContainer}>
        <h1 className={props.scrolled ? styles.titleP : styles.title}>מזל טוב!</h1>
        <div className={styles.description}>חוגגים אירוע מסויים וצריכים קייטרינג?</div>
        <div className={styles.description}>הכירו את חברת הקייטרינג עם סגנון ההגשה שעוד לא נראה בארץ</div>
        <div className={styles.center}><img className={styles.image} src={lance} alt="לאנס - lance"/></div>
      </div>
    </div>
  );
};

export default FirstScreen;