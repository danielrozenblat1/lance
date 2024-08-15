import React, { useEffect } from 'react';
import styles from './Steps.module.css';
import Button from '../Button/Button';
import ScrollReveal from 'scrollreveal';
const steps = [
  { 
    number: 1,
    title: "שאלות ראשוניות", 
    description: "שאלות לגבי מספר מוזמנים, שעה, מיקום, סגנון הגשה, סוג הארוחה, ודרישות תזונה מיוחדות."
  },
  { 
    number: 2,
    title: "הצגת האופציות", 
    description: "1) מגשי אירוח - בחירה מתפריט קיים. 2) שולחן בופה - כולל שירות במקום, עיצוב ותפעול."
  },
  { 
    number: 3,
    title: "תוספות אופציונליות", 
    description: "נבדוק את האפשרות ואת הרצון שלכם להוסיף בר אלכוהול, עמדת קפה, או עמדת שתייה קרה."
  },
  { 
    number: 4,
    title: "תיאום כמויות", 
    description: "נעבור על האופציות המועדפות שלך מהתפריט, נבין כמה אתם ומה סוג האירוע ונתאים כמויות בדיוק עבורכם"
  },
  { 
    number: 5,
    title: "הצעת מחיר", 
    description: "תקבל הצעת מחיר מסודרת עם הכמויות המותאמות."
  },
  { 
    number: 6,
    title: "סגירת פרטים סופיים", 
    description: "קביעת שעת משלוח/איסוף למגשים, או תחילת ליווי אישי לבופה."
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
      <h3 className={styles.description}>אתה בטח שואל איך נדייק את כמות האוכל לאירוע שלך</h3>
      <h2 className={styles.title}>אז.. זה עובד ככה!</h2>
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