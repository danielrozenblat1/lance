import React, { useEffect } from 'react';
import styles from './Steps.module.css';
import Button from '../Button/Button';
import ScrollReveal from 'scrollreveal';
const steps = [
  { 
    number: 1,
    title: "שאלות היכרות והתאמה", 
    description: "מה כמות המוזמנים? מה סוג האירוע? מיקום האירוע? מה שעת הארוחה? מה סגנון ההגשה המועדף עליכם?"
  },
  { 
    number: 2,
    title: "הצגת האופציות האפשריות", 
    description: "ביחד נבין מה האופציה המיטבית עבורכם מגשי אירוח או שולחן בופה מעוצב."
  },
  { 
    number: 3,
    title: "תוספות ושדרוגים", 
    description: "בשלב זה יש לכם אופציות של שדרוגים לאירוע שלכם כמו בר אלכוהול, עמדת קפה, עמדת שתיה קרה ועוד."
  },
  { 
    number: 4,
    title: "התאמת כמויות", 
    description: "נעבור ביחד על הבחירות שלכם מהתפריט ולפי כמות המוזמנים וסוג האירוע נתאים בדיוק את כמויות האוכל."
  },
  { 
    number: 5,
    title: "הצעת מחיר", 
    description: "לאחר שבנינו את מהלך האירוע, התפריט והשדרוגים שבחרתם תקבלו מאיתנו הצעת מחיר מסודרת."
  },
  { 
    number: 6,
    title: "סגירת הפרטים האחרונים", 
    description: "עדכון כמויות אם יש, נקבע שעה לאיסוף המגשים/ שעת הגעה שלנו לאירוע עם שולחן בופה מעוצב."
  }
];

const WorkflowStep = ({ number, title, description }) => (
  <div className={styles.step}>
    <div className={styles.stepNumber}>{number}</div>
    <div className={styles.stepContent}>
      <h3 className={styles.stepTitle}>{title}</h3>
      <p className={styles.stepDescription}>{description}</p>
    </div>
  </div>
);

const WorkflowProcess = () => {

  useEffect(()=>{
    ScrollReveal().reveal(`.${styles.title}`, {
      duration: 1000,
      distance: "30px",
      origin: "right",
      easing: "ease-out",
      reset: false,
      viewFactor: 0.2,
      interval: 300,
      delay: 200,
      scale: 1,
    });
    ScrollReveal().reveal(`.${styles.stepTitle}`, {
      duration: 1000,
      distance: "30px",
      origin: "right",
      easing: "ease-out",
      reset: false,
      viewFactor: 0.2,
      interval: 300,
      delay: 200,
      scale: 1,
    });

    ScrollReveal().reveal(`.${styles.stepDescription}`, {
      duration: 1000,
      distance: "60px",
      origin: "right",
      easing: "ease-out",
      reset: false,
      viewFactor: 0.2,
      interval: 300,
      delay: 200,
      scale: 1,
    });
  },[])

  return (
    <div className={styles.container}>
      <h3 className={styles.description}>אתה בטח שואל איך כל זה קורה?</h3>
      <h2 className={styles.title}>אז זה עובד ככה!</h2>
      <div className={styles.workflow}>
        {steps.map((step) => (
          <WorkflowStep
            key={step.number}
            number={step.number}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>
      <Button text="לחץ כאן לפרטים נוספים"/>
    </div>
  );
};

export default WorkflowProcess;