import React from 'react';
import styles from './MenuMagashim.module.css';
import Button from '../Button/Button';
import ImageGrid from '../imagegrid/ImageGrid';

const Menu = () => {
  return <>
    <div className={styles.gridContainer} id="תפריט מגשים">
      <h1 className={styles.title}>תפריט מגשי אירוח</h1>
      <div className={styles.container}>
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>מנות ביס</h2>
          <MenuItem name="מיני טורטייה 20 יח'" price="160/180 ש״ח" description="טונה<br />סביח<br />טבעוני" />
          <MenuItem name="כריכוני קרואסון 20 יח'" price="260 ש״ח" description="קממבר<br />גאודה<br />מוצרלה <br/>סלמון - 280 ש''ח" />
          <MenuItem name="כריכוני קרואסון סלומון 20 יח'" price="280 ש״ח" />
          <MenuItem name="כריכוני אצבע מיקס 20 יח'" price="140 ש״ח" description="גבינת שמנת<br />חביתה<br />יווני<br />טונה<br />אבוקדו<br />בלקני<br />סלט ביצים" />
          <MenuItem name="מיני בייגל 20 יח'" price="180 ש״ח" description="סלומון מעושן<br />גבינת שמנת" />
          <MenuItem name="בורקיטס פינוקים 20/30 יח'" price="240/360 ש״ח" description="איטלקי<br />סביח" />
          <MenuItem name="ברוסקטה 24 יח'" price="117/198/332 ש״ח" description="סביצ'ה<br />איטלקית<br />צרפתית<br />דודו" />
          <MenuItem name="פחזניות מלוחות 30 יח'" price="219/253 ש״ח" description="מוס שמנת סלומון<br />קאטלן<br />מוס טונה" />
          <MenuItem name="קישים מיני 24 יח'" price="264 ש״ח" description="תרד,פטריות,בטטה,ברוקולי,שרי,בצל" />
          <MenuItem name="מיני פיש בורגר 12 יח'" price="226 ש״ח" />
          <MenuItem name="מיני פריקסה 24 יח'" price="192 ש״ח" />
          <MenuItem name="חטיפי מיז או בושס 24 יח'" price="186 ש״ח" description="מיקס של טעמים" />
          <MenuItem name="פיצות פוקאצות | טוניסאיות 30 יח'" price="130/160 ש״ח" />
          <MenuItem name="על שיפוד 30 יח'" price="180 ש״ח" description="גאודה<br />מוצרלה<br />ברי<br />קממבר" />
          <MenuItem name="מיני שקשוקה 12 יח'" price="248 ש״ח" />
          <MenuItem name="סט ממרחים + לחם מחמצת" price="109 ש״ח" />
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>מנות מרכזיות</h2>
          <MenuItem name="פסטה | רביולי ברוטב לבחירה" price="185/223 ש״ח" description="ספינאצי<br />שמנת פסטו<br />אלפרדו<br />רוזה" />
          <MenuItem name="גראטן" price="172 ש״ח" />
          <MenuItem name="סלומון שלם אפוי בגינה" price="289 ש״ח" />
          <MenuItem name="דג לבן בתנור (1.5 ק״ג)" price="205 ש״ח" />
          <MenuItem name="פלטת גבינות בוטיק מפנקת" price="245/334 ש״ח" />
          <MenuItem name="פלטת גבינות רכות" price="150/210 ש״ח" />
          <MenuItem name="פלטת דגים מעושנים וכבושים" price="267 ש״ח" />
          <MenuItem name="קרפציו" price="147/199 ש״ח" description="סלומון<br />חציל<br />סלק" />
          <MenuItem name="סלטים (3 ליטר)" price="165 ש״ח" description="טאבולה<br />צרפתי<br />טוסקנה<br />קפרזה<br />אסייאתי<br />שוק יווני" />
          <MenuItem name="מגש אנטיפסטי" price="129 ש״ח" />
          <MenuItem name="פלטת ירקות" price="120 ש״ח" />
          <MenuItem name="פוקאצה איטלקית בתוספת בוראטה" price="92 ש״ח" />
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>מתוקים</h2>
          <MenuItem name="מיני פנקייקס קולי פירות יער 20/40 יח'" price="177/215 ש״ח" />
          <MenuItem name="קראפ צרפתי 30 יח'" price="237 ש״ח" description="סט ממרחים - צנצנת נוטלה ,רוטב פירות יער, בקבוק מייפל - 40ש''ח" />
          <MenuItem name="מיני פרנץ' טוסט 20 יח'" price="179 ש״ח" />
          <MenuItem name="פטיפורים צרפתים עבודת יד 20/30 יח'" price="170/240 ש״ח" />
          <MenuItem name="מיקס שוקולדים" price="153 ש״ח" />
          <MenuItem name="כוסיות מוזלי" price="200 ש״ח" />
          <MenuItem name="פלטת פירות העונה קטן/גדול" price="230/340 ש״ח" />
          <MenuItem name="צנצנת טירמיסו / מוס טרופי וקוקוס / פירות יער - 24 יח'" price="228 ש״ח" />
          <MenuItem name="ערכת קפה כ-35 מנות" price="200 ש״ח" />
        </div>
      </div>
      <div className={styles.section}>
          <h2 className={styles.sectionTitle}>צמחוני / טבעוני</h2>
          <MenuItem name="מיני פנקייקס 20 יח' (טבעוני)" price="197 ש״ח" />
          <MenuItem name="מיני פרנץ' טוסט 20 יח' (טבעוני)" price="199 ש״ח" />
          <MenuItem name="פטיפורים צרפתים עבודת יד 20 יח' (צמחוני)" price="170 ש״ח" />
          <MenuItem name="כוסיות מוזלי 20 יח' (צמחוני)" price="200 ש״ח" />
          <MenuItem name="פיצה טוניסאית 30 יח (טבעוני/צמחוני)" price="130 ש״ח" />
          <MenuItem name="טורטיה / כריכון" description="חביתת חומוס \ אנטי פסטי" />
          <MenuItem name="מיני קישים 12 יח' (טבעוני)" price="144 ש״ח" />
          <MenuItem name="סלט פירות העונה גס" price="160 ש״ח" />
        </div>
    </div>
    
    <Button text="מעניין אותי לשמוע עוד" message="היי לאנס, מעניין אותי לשמוע עוד על תפריט המגשים"/>
   
    <ImageGrid/>
  </>;
};

const MenuItem = ({ name, price, description }) => (
  <div className={styles.menuItem}>
    <div className={styles.itemHeader}>
      <span className={styles.itemName}>{name}</span>
      <span className={styles.itemPrice}>{price}</span>
    </div>
    {description && <p className={styles.description} dangerouslySetInnerHTML={{ __html: description }} />}
  </div>
);

export default Menu;