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
          <MenuItem name="ברוסקטה" description="צרפתית - ריבת בצל<br />גבינת ברי<br />בולגרית - סלסת עגבניות<br />בלסמי חריף<br />שום<br />פטרוזיליה<br />מנצ'גו - פלפלים קלויים<br />גבינת מנצ'גו<br />מתוק - גבינת חלומי<br />קונפיטורת העונה<br /> גבינה כחולה<br />אגס מקורמל" />
          <MenuItem name="סביצ'ה" description="סלומון<br />בצל סגול<br />גמבה<br />ירק<br />מנגו<br />פלפל צ'ילי" />
          <MenuItem name="פחזניה מלוחה" description="מוס טונה<br />מוס שמנת סלומון מעושן ושמיר<br />מלפפון חמוץ" />
          <MenuItem name="שיפודון" description="גבינת קממבר<br />אגס מקורמל<br />ענבים<br />בייבי מוצרלה בזיליקום ושרי" />
          <MenuItem name="טארטלטים" description="מוס שמנת<br />מוס פסטו<br />קציפת פלפלים קלויים<br />גוואקמולי<br />סלט טונה<br />הפתעות" />
          <MenuItem name="סלסלת מעדנים" description="לחמים<br />ריבות<br />ממרחים<br />חמאה" />
          <MenuItem name="פלטת גבינות" description="גבינות קשות ורכות עשירה" />
          <MenuItem name="פלטת דגים" description="דגים מעושנים וכבושים" />
          <MenuItem name="אנטיפסטי" />
        </div>
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>לא צריך צלחת, ישר לפה..</h2>
          <MenuItem name="טורטייה ביס" description="צמחוני<br />סביח<br />טונה<br />אנטיפסטי" />
          <MenuItem name="מיני קישים" description="בצל<br />שרי<br />ברוקולי<br />בטטה<br />פטריות<br />תרד" />
          <MenuItem name="כריכוני אצבע" description="סלט טונה<br />יווני<br />חביתה<br />גבינת שמנת<br />סלט ביצים<br />בלקני<br />אבוקדו" />
          <MenuItem name="מיני בייגל אמריקאי" description="שמנת סלומון<br />הכריך של סהר" />
          <MenuItem name="פריקסה" description="תפוח אדמה<br />טונה<br />זיתים<br />לימון כבוש<br />אריסה" />
          <MenuItem name="בורקיטס פינוקים" description="סביח - חציל<br />ביצה<br />טחינה<br />מלפפון חמוץ<br />איטלקי - פסטו<br />עגבניה<br />מוצרלה" />
          <MenuItem name="כריכוני קוראסון" description="טפנד זיתים<br />גאודה<br />מלפפון<br />ריבת בצל<br />קממבר<br />שמנת<br />סלומון מעושן<br />מלפפון<br />פסטו<br />עגבניה<br />מוצרלה" />
          <MenuItem name="מיני פיש בורגר" description="בריוש<br />רוטב טרטר<br />דג מטוגן<br />חסה<br />עגבנייה<br />בצל" />
          <MenuItem name="צנצנת שקשוקה אישית" />
          <MenuItem name="פיצות \ פוקאצות אישיות (טבעוני)" />
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>מרעננים</h2>
          <MenuItem name="סלט ירוק" description="מיקס חסות<br />תפוח<br />פטריות<br />קממבר<br />אגוזים<br />אגס מקורמל" />
          <MenuItem name="קרפצ'יו" description="סלק<br />לאבנה<br />אגוזים<br />ירוקים<br />חציל<br />פטה<br />צנונית<br />ירק<br />סלומון<br />צלפים<br />בצל סגול<br />שמיר" />
          <MenuItem name="שוק יווני" description="עגבנייה<br />מלפפון<br />צנונית<br />קולורבי<br />קלמטה<br />בצל סגול<br />ירק<br />פטה" />
          <MenuItem name="קפרזה" description="מיקס עגבניות<br />בייבי מוצרלה<br />בצל סגול<br />בזיליקום<br />בלסמי" />
          <MenuItem name="טוסקנה" description="פסטה<br />גמבה<br />זיתים<br />עגבניות<br />גמבה<br />בצל סגול<br />ירק<br />גבינה צפתית" />
          <MenuItem name="טאבולה" description="בורגול<br />כוסברה<br />פטרוזיליה<br />נענע<br />חמוציות<br />בצל ירוק" />
          <MenuItem name="אסייאתי" description="קולורבי<br />גזר<br />סלק<br />שורשים<br />כרוב אדום<br />בצל ירוק<br />שומשום" />
        </div>
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>זהירות! חם</h2>
          <MenuItem name="פסטה" description="פפרדלה<br />ריגטוני<br />רביולי: גבינות<br />בטטה" />
          <MenuItem name="רטבים" description="אלפרדו<br />רוזה<br />נפוליטנה<br />פסטו ספינאצ׳י: שמנת<br />שרי<br />תרד<br />סלמון<br />קוביות" />
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
  </>;
};

const MenuItem = ({ name, description }) => (
  <div className={styles.menuItem}>
    <span className={styles.itemName}>{name}</span>
    {description && <p className={styles.description} dangerouslySetInnerHTML={{ __html: description }} />}
  </div>
);

export default EventMenu;