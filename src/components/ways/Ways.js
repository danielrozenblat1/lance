import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from './Ways.module.css';
import brunch from "../../images/בראנצ.png"
import buffet from "../../images/בופה.png"
import orange from "../../images/תפוז.png"
import sandwich from "../../images/לחם.png"
import cheese from "../../images/גבינה.png"
import salad from "../../images/סלט.png"
import dinner from "../../images/דינר.png"
import sunset from "../../images/שקיעה.png"
import night from "../../images/ערב.png"
import dessert from "../../images/קינוח.png"
const BrunchAccordion = ({ title, titleImage, content }) => {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <div className={styles.accordion}>
      <Accordion 
        expanded={expanded}
        onChange={() => setExpanded(!expanded)}
        className={styles.accordionRoot}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={styles.expandIcon} />}
          className={styles.accordionSummary}
          style={{ backgroundImage: `url(${titleImage})` }}
        >
          <div className={styles.titleContainer}>
            <h2 className={styles.title}>{title}</h2>
          </div>
        </AccordionSummary>
        <AccordionDetails className={styles.accordionDetails}>
          {content.map((item, index) => (
            <div key={index} className={styles.contentItem}>
              <img 
                src={item.image} 
                alt={`Item ${index + 1}`} 
                className={styles.contentImage}
              />
              <p className={styles.p}>{item.text}</p>
            </div>
          ))}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default function FoodAccordionExample() {
    const brunchData = {
      title: "בראנצ'",
      titleImage: brunch,
      content: [
        { 
          text: "שולחן בופה המתאים לשעות הבוקר עד קצת אחר הצהריים.",
          image: buffet
        },
        {
          text: "פלטת גבינות - פירות וירקות בתפזורת - לחמים טריים - ממרחי בוקר - ריבות - חמאה - טפנדים - גבינות למריחה.",
          image: cheese
        },
        {
          text: "סנדוויצ׳ונים במגוון סוגי לחמים , מיני קישים , עמדת חביתות , שקשוקות , קוראסונים ומאפים מלוחים צרפתיים , פנקייקים, קראפים , פראנץ טוסט , פטיפורים.",
          image: sandwich
        },
        {
          text: "סלטים מרעננים.",
          image: salad
        },
        {
          text: "תפוזים סחוט - עמדת קפה.",
          image: orange
        }
      ]
    };
  
    const dinnerData = {
      title: "דינר",
      titleImage: dinner, // Using the same image for now, you can replace it later
      content: [
        { 
          text: "דינר מתאים לשעות אחר הצהריים עד הערב.",
          image: sunset
        },
        {
          text: "סלומון שלם אפוי בגינה , אנטיפסטי , טורטייה ביס , מיני פיש בורגר , חטיפים מיז או בוש , מיני פריקסה , פיצות טוניסאיות , פסטות ורביולי ברטבים לבחירה ,קרפציו חציל / סלק / סלומון.",
          image: night
        },
        {
          text: "סלטים מרעננים פלטת גבינות עשירה.",
          image: salad
        },
        {
          text: "מבחר סוגי לחמים טריים וממרחים מלוחים.",
          image:sandwich
        },
        {
          text: "קינוחים, פטיפורים צרפתיים , פלטת פירות העונה , מיקס שוקולדים.",
          image: dessert
        }
      ]
    };

  return<>
  <div className={styles.description}>לאנס הוא לא סתם שירות רגיל . <br/>
האירועים שלנו מתרחשים באווירה טובה, מלאים באהבה, באוכל טוב ובביסים מדויקים עם תשומת לב לפרטים הקטנים. <br/>
כל אירוע אצלנו הוא מיוחד במינו ואין שני לו.  <br/> לכן אנחנו כאן, כדי להפוך את היום שלכם לבלתי נשכח.</div>
  <div className={styles.header} id="סגנונות אירועים">סגנונות האירועים שלנו</div>
    <BrunchAccordion {...brunchData} />
  <BrunchAccordion {...dinnerData} />
  </>

}