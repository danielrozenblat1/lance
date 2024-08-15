import React from 'react';
import styles from './MenuEvents.module.css';
import Button from '../Button/Button';

const EventMenu = () => {
  return <>
    <div className={styles.gridContainer}>
      <h1 className={styles.title}>תפריט אירועים</h1>
      <div className={styles.container}>
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>תבחר מה יהיה על השולחן</h2>
          <MenuItem name="ברוסקטה" description="צרפתית - ריבת בצל, גבינת ברי. בולגרית - סלסת עגבניות, בלסמי חריף, שום, פטרוזיליה. מנצ'גו - פלפלים קלויים, גבינת מנצ'גו. מתוק - גבינת חלומי, קונפיטורת העונה. יותר מהראשונה - גבינה כחולה, אגס מקורמל." />
          <MenuItem name="סביצ'ה" description="סלומון, בצל סגול, גמבה, ירק, מנגו, פלפל צ'ילי." />
          <MenuItem name="פחזניה מלוחה" description="מוס טונה, מלפפון חמוץ." />
          <MenuItem name="שיפודון" description="גבינת קממבר, אגס מקורמל, ענבים." />
          <MenuItem name="טארטלטים" description="מוס שמנת, סלומון מעושן. מוס פסטו. קציפת פלפלים קלויים. גוואקמולי. סלט טונה. הפתעות." />
          <MenuItem name="סלסלת מעדנים" description="לחמים - ריבות - ממרחים - חמאה." />
          <MenuItem name="פלטת גבינות" description="גבינות קשות ורכות עשירה." />
          <MenuItem name="פלטת דגים" description="דגים מעושנים וכבושים." />
          <MenuItem name="אנטיפסטי" />
        </div>
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>לא צריך צלחת, ישר לפה..</h2>
          <MenuItem name="טורטייה ביס" description="צמחוני, סביח, טונה, אנטיפסטי." />
          <MenuItem name="מיני קישים" description="בצל, שרי, ברוקולי, בטטה, פטריות, תרד" />
          <MenuItem name="כריכוני אצבע" description="סלט טונה, יווני, חביתה, גבינת שמנת, סלט ביצים, בלקני, אבוקדו." />
          <MenuItem name="מיני בייגל אמריקאי" description="שמנת סלומון, הכריך של סהר." />
          <MenuItem name="מיני פריקסה" description="תפוח אדמה, טונה, זיתים, לימון כבוש, אריסה." />
          <MenuItem name="בורקיטס פינוקים" description="סביח - חציל, ביצה, טחינה, מלפפון חמוץ. איטלקי - פסטו, עגבניה, מוצרלה." />
          <MenuItem name="כריכוני קוראסון" description="טפנד זיתים, גאודה, מלפפון. ריבת בצל, קממבר. שמנת, סלומון מעושן, מלפפון. פסטו, עגבניה, מוצרלה." />
          <MenuItem name="מיני פיש בורגר" description="בריוש, רוטב טרטר, דג מטוגן, חסה, עגבנייה, בצל." />
          <MenuItem name="צנצנת שקשוקה אישית" />
          <MenuItem name="פיצות \ פוקאצות אישיות (טבעוני)" />
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>מרעננים</h2>
          <MenuItem name="סלט ירוק" description="מיקס חסות, תפוח, פטריות, קממבר, אגוזים, אגס מקורמל." />
          <MenuItem name="שוק יווני" description="עגבנייה, מלפפון, צנונית, קולורבי, קלמטה, בצל סגול, ירק, פטה." />
          <MenuItem name="קפרזה" description="מיקס עגבניות, בייבי מוצרלה, בצל סגול, בזיליקום, בלסמי." />
          <MenuItem name="טוסקנה" description="פסטה, גמבה, זיתים, עגבניות, גמבה, בצל סגול, ירק, גבינה צפתית." />
          <MenuItem name="טאבולה" description="בורגול, כוסברה, פטרוזיליה, נענע, חמוציות, בצל ירוק." />
          <MenuItem name="אסייאתי" description="קולורבי, גזר, סלק, שורשים, כרוב אדום, בצל ירוק, שומשום." />
        </div>
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>על מגש</h2>
          <MenuItem name="קרפצ'יו" description="סלק, לאבנה, אגוזים, ירוקים. חציל, פטה, צנונית, ירק. סלומון, צלפים, בצל סגול, שמיר." />
          <MenuItem name="זהירות! חם." />
          <MenuItem name="פסטה" description="פפרדלה \ ריגטוני \ רביולי: גבינות \ בטטה" />
          <MenuItem name="רטבים" description="אלפרדו \ רוזה \ נפוליטנה \ פסטו ספייסי: שמנת, שרי, תרד, סלמון, קוביות." />
          <MenuItem name="גראטן תפוחי אדמה" />
          <MenuItem name="סלומון שלם אפוי בגינה" />
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>בלי מתוק זה לא שווה..</h2>
          <MenuItem name="פטיפורים" />
          <MenuItem name="שוקולדים" />
          <MenuItem name="פירות העונה" />
          <MenuItem name="שוטים בטעמים" />
          <MenuItem name="מבחר קוראסונים צרפתים" />
          <MenuItem name="פנקייק אמריקאי" />
          <MenuItem name="קראפ צרפתי" />
          <MenuItem name="פראנץ טוסט" />
        </div>
      </div>
      
    </div>
    <Button text="יש לי אירוע בקרוב והסתקרנתי.." message="היי לאנס, אשמח לשמוע עוד על תפריט האירועים שלכם"/>
    </>
};

const MenuItem = ({ name, description }) => (
  <div className={styles.menuItem}>
    <span className={styles.itemName}>{name}</span>
    {description && <p className={styles.description}>{description}</p>}
  </div>
);

export default EventMenu;