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
          <MenuItem name="מיני טורטייה (20 יח')" price="140/160 ש״ח" description="טונה<br />סביח<br />טבעוני" />
          <MenuItem name="כריכוני קרואסון (20 יח')" price="250 ש״ח" description="קממבר<br />גאודה<br />מוצרלה" />
          <MenuItem name="כריכוני קרואסון סלומון (20 יח')" price="280 ש״ח" />
          <MenuItem name="כריכוני אצבע מיקס (20 יח')" price="140 ש״ח" description="גבינת שמנת<br />חביתה<br />יווני<br />טונה<br />אבוקדו<br />בלקני<br />סלט ביצים" />
          <MenuItem name="מיני בייגל (20 יח')" price="180 ש״ח" description="סלומון מעושן<br />גבינת שמנת" />
          <MenuItem name="בורקיטס פינוקים (20/30 יח')" price="180/265 ש״ח" description="איטלקי<br />סביח" />
          <MenuItem name="ברוסקטה (24 יח')" price="117/198/332 ש״ח" description="סביצ'ה<br />איטלקית<br />צרפתית<br />דודו" />
          <MenuItem name="פחזניות מלוחות (30 יח')" price="219/253 ש״ח" description="מוס שמנת סלומון<br />קאטלן<br />מוס טונה" />
          <MenuItem name="קישים מיני (24 יח')" price="192 ש״ח" description="תרד,פטריות,בטטה,ברוקולי,שרי,בצל" />
          <MenuItem name="מיני פיש בורגר (12 יח')" price="226 ש״ח" />
          <MenuItem name="מיני פריקסה (24 יח')" price="192 ש״ח" />
          <MenuItem name="חטיפי מיז או בושס (24 יח')" price="186 ש״ח" description="מיקס של טעמים" />
          <MenuItem name="פיצות פוקאצות | טוניסאיות (מגש 30 יח')" price="130/160 ש״ח" />
          <MenuItem name="על שיפוד (30 יח')" price="180 ש״ח" description="גאודה<br />מוצרלה<br />ברי<br />קממבר" />
          <MenuItem name="מיני שקשוקה (12 יח')" price="210 ש״ח" />
          <MenuItem name="סט ממרחים + לחם מחמצת" price="96 ש״ח" />
        </div>
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>מנות מרכזיות</h2>
          <MenuItem name="פסטה | רביולי ברוטב לבחירה" price="165/203 ש״ח" description="ספינאצי<br />שמנת פסטו<br />אלפרדו<br />רוזה" />
          <MenuItem name="גראטן" price="172 ש״ח" />
          <MenuItem name="סלומון שלם אפוי בגינה" price="289 ש״ח" />
          <MenuItem name="דג לבן בתנור (1.5 ק״ג)" price="205 ש״ח" />
          <MenuItem name="פלטת גבינות בוטיק מפנקת" price="245/334 ש״ח" />
          <MenuItem name="פלטת גבינות רכות" price="150/210 ש״ח" />
          <MenuItem name="פלטת דגים מעושנים וכבושים" price="267 ש״ח" />
          <MenuItem name="קרפציו" price="147/199 ש״ח" description="סלומון<br />חציל<br />סלק" />
          <MenuItem name="סלטים (3 ליטר)" price="145 ש״ח" description="טאבולה<br />צרפתי<br />טוסקנה<br />קפרזה<br />אסייאתי<br />שוק יווני" />
          <MenuItem name="מגש אנטיפסטי" price="129 ש״ח" />
          <MenuItem name="פלטת ירקות" price="120 ש״ח" />
          <MenuItem name="פוקאצה איטלקית בתוספת בוראטה" price="92 ש״ח" />
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>מתוקים</h2>
          <MenuItem name="מיני פנקייקס קולי פירות יער (20/40 יח')" price="137/195 ש״ח" />
          <MenuItem name="קראפ צרפתי (30 יח')" price="161 ש״ח" />
          <MenuItem name="מיני פרנץ' טוסט (20 יח')" price="111 ש״ח" />
          <MenuItem name="פטיפורים צרפתים עבודת יד (20/30 יח')" price="170/240 ש״ח" />
          <MenuItem name="מיקס שוקולדים" price="153 ש״ח" />
          <MenuItem name="פלטת פירות העונה קטן/גדול" price="230/340 ש״ח" />
          <MenuItem name="מגוון של קרקרים" price="60 ש״ח" />
          <MenuItem name="ערכת קפה כ-35 מנות" price="200 ש״ח" />
        </div>
      </div>
   
    </div>
    <Button text="מעניין אותי לשמוע עוד" message="היי לאנס, מעניין אותי לשמוע עוד על תפריט המגשים"/>
    <div className={styles.bold}>בנוסף לתפריט המגוון שלנו המורכב ממנות ביס מפוצצות טעמים ומאכלים בסגנון צרפתי איטלקי המשולבות כמובן לטעמים הישראלים. החלום שלנו היה לשלב בין המטבח הצרפתי הקלאסי לבין המטבח הים תיכוני העממי .</div>
    <div className={styles.bold}>יצרנו עבורכם שולחן בופה מעוצב בסטייל ובאווירה קסומה שאי אפשר להוריד ממנו את העיניים. 
הכל מוגש בעיצוב מיוחד במינו באווירת חיק הטבע.
על השולחן שלנו תמצאו מנות מגוונות ועשירות העשויות 100% עבודת יד .</div>
    <div className={styles.bold}>לבינתיים, אתם מוזמנים להתרשם וכשיגיע הרגע הנכון ביחד נבנה את התפריט המדויק ביותר שמותאם בדיוק אליכם ולאירוע שלכם.</div>
    <div className={styles.bold}>רוצים להרשים את האורחים שלכם באירוע הבא? תכתבו לנו ונחזור אליכם עם פרטים🫶🏼.</div>
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