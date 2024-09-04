import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ScrollReveal from 'scrollreveal';
import styles from "./Akordion.module.css"
import Button from "../Button/Button"
function DropdownAccordion({ title, content }) {
  const [expanded, setExpanded] = React.useState(false);

  return (

    <div className={styles.akordion} >
      <Accordion
        expanded={expanded}
        sx={{
            boxShadow: '0px 2px 15px 0px #777',
          width: "100%",
          margin: "auto",
          background:"linear-gradient(to right, #F7E5D4, #F0D0B3)",
  
          display: "flex",
          flexDirection: "column",
          
          justifyContent: "center",
          position: "relative",
          "&:before": {
            content: "''",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "inherit",
            zIndex: -1,
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          onClick={() => setExpanded(!expanded)}
          sx={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            "& .MuiTypography-root": {
              width: "100%",
              padding:"5px 0",
              color: 'black', // Apply black color to content
              fontFamily: 'AssistantR',
              direction: "rtl",
              fontSize:18
            },
            
            "& .MuiSvgIcon-root": { // Target the icon for black color
              color: 'black',
            },
           
          }}
        >
          <Typography itemProp="headline">{title}</Typography>
        </AccordionSummary >
        <AccordionDetails
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "90%",
            margin: "0 auto",
            color: 'black', // Apply black color to content
           
            direction: "rtl",
            zIndex: 1,
            textAlign:"center",
            borderTop: '1px solid black', // Add top border
          }}
        >
          <Typography sx={{ fontFamily: 'AssistantR' , fontSize:18}} itemProp="description">{content}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
 
  );
}

export default function BasicAccordion() {
    React.useEffect(()=>{

        ScrollReveal().reveal(`.${styles.title}`, {
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
  return <>
    <div
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        width: "50%",
        margin: "0 auto",
        
      }}
    >
      {/* Center parent container */}
     
    <div className={styles.title} id="שאלות תשובות" itemProp="mainEntity" itemScope itemType="https://schema.org/WebPage">זמן לענות על השאלות שלכם</div>
      <DropdownAccordion title="אתם מגיעים לכל מקום בארץ?" content="כן , השירות בפריסה ארצית." />
      <DropdownAccordion title="איך אני יודע להזמין את הכמות שמתאימה לאירוע שלי ?" content="ובכן ישלנו שיטה לחשב כמויות בערך שתתאים בצורה הכי טובה , לאחר שאלות ההתאמה נבנה ביחד את התפריט המתאים ביותר עבורכם." />
      <DropdownAccordion title="אתם כשרים?" content="אין לנו עדיין תעודת כשרות מהסיבה שאנחנו לא זכאיות לכך בגלל שאנחנו עסק בייתי. אבל בכל זאת חשוב שתדעו שכל האוכל שלנו מוכן בסביבת עבודה כשרה ונקייה , בחומרי גלם כשרים עם תעודות ובהפרדה מלאה " />
      <DropdownAccordion title="אם אני רוצה להזמין שולחן בופה ל15 איש?" content="שירות  הקייטרינג שלנו עד בית הלקוח הוא למינימום הזמנה של 30 סועדים, איך יש אופציה לא פחות טובה של מגשי אירוח שתוכלו להזמין ולהגיע לאסוף מאיתנו :) ." />
      <DropdownAccordion title="האם עיצוב השולחן כולל בשירות?" content="כמובן , השולחן שלנו מגיע מעוצב כחלק מהקונספט שלנו. " />
      <DropdownAccordion title="האם ניתן להוסיף שתיה?" content="בטח, כחלק מהשירות שלנו אנו נוכל לפנות לספק חיצוני של בר שתיה קרה / אלכוהול לפי בקשתכם. " />
      <DropdownAccordion title="האם ניתן להוסיף אנשי צוות כגון מלצרים למהלך האירוע?" content="כן, יש אפשרות להוסיף בתשלום מלצרים ואנשי צוות לאירוע שלכם. כמובן שאנחנו עובדות עם האנשים המקצועיים ביותר" />
      <DropdownAccordion title="אתם דואגים גם לעריכה?" content="בטח, אנחנו עובדות עם כלים חד פעמיים מתקלים ( צלחות וסכום) אם תרצו, בהזמנה מראש כמובן, יש אופציה לעבוד עם כלים רב פעמיים בתוספת תשלום." />
      </div>

    <Button text="אשמח לדעת עוד כמה פרטים"/>
 </>
}
