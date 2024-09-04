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
        <div className={styles.description}>מתכננים חגיגה ומחפשים קייטרינג ?</div>
        <div className={styles.description}>לאחר הרבה מחשבה ורצון להגיש לכם חוויה חדשה ומיוחדת החלטנו לשלב את שתי האהבות שלנו שהן המטבח והטבע ולהקים את לאנס .
        </div>
        <div className={styles.center}><img className={styles.image} src={lance} alt="לאנס - lance"/></div>
      </div>
    </div>
  );
};

export default FirstScreen;