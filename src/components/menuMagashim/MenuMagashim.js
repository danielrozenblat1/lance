import React from 'react';
import styles from './MenuMagashim.module.css';
import Button from '../Button/Button';

const Menu = () => {
  return <>
    <div className={styles.gridContainer}>
   
<h1 className={styles.title}>תפריט מגשי אירוח</h1>
      <div className={styles.container}>
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>מנות ביס</h2>
          <MenuItem name="מיני טורטייה (20 יח')" price="140/160 ש״ח" description="טונה | סביח | טבעוני" />
          <MenuItem name="כריכוני קרואסון (20 יח')" price="250 ש״ח" description="קממבר | גאודה | מוצרלה" />
          <MenuItem name="כריכוני קרואסון סלומון (20 יח')" price="280 ש״ח" />
          <MenuItem name="כריכוני אצבע מיקס (20 יח')" price="140 ש״ח" description="גבינת שמנת | חביתה | יווני | טונה | אבוקדו | בלקני | סלט ביצים" />
          <MenuItem name="מיני בייגל (20 יח')" price="180 ש״ח" description="סלומון מעושן גבינת שמנת" />
          <MenuItem name="בורקיטס פינוקים (20/30 יח')" price="180/265 ש״ח" description="איטלקי | סביח" />
          <MenuItem name="ברוסקטה (24 יח')" price="117/198/332 ש״ח" description="סביצ'ה | איטלקית | צרפתית | דודו" />
          <MenuItem name="פחזניות מלוחות (30 יח')" price="219/253 ש״ח" description="מוס שמנת סלומון | קאטלן | מוס טונה" />
          <MenuItem name="קישים מיני (24 יח')" price="192 ש״ח" description="תרד | פטריות | בטטה | ברוקולי | שרי | בצל" />
          <MenuItem name="מיני פיש בורגר (12 יח')" price="226 ש״ח" />
          <MenuItem name="מיני פריקסה (24 יח')" price="192 ש״ח" />
          <MenuItem name="חטיפי מיז או בושס (24 יח')" price="186 ש״ח" description="מיקס של טעמים" />
          <MenuItem name="פיצות פוקאצות | טוניסאיות (מגש 30 יח')" price="130/160 ש״ח" />
          <MenuItem name="על שיפוד (30 יח')" price="180 ש״ח" description="גאודה | מוצרלה | ברי | קממבר" />
          <MenuItem name="מיני שקשוקה (12 יח')" price="210 ש״ח" />
          <MenuItem name="סט ממרחים + לחם מחמצת" price="96 ש״ח" />
        </div>
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>מנות מרכזיות</h2>
          <MenuItem name="פסטה | רביולי ברוטב לבחירה" price="165/203 ש״ח" description="ספינאצי | שמנת פסטו | אלפרדו | רוזה" />
          <MenuItem name="גראטן" price="172 ש״ח" />
          <MenuItem name="סלומון שלם אפוי בגינה" price="289 ש״ח" />
          <MenuItem name="דג לבן בתנור (1.5 ק״ג)" price="205 ש״ח" />
          <MenuItem name="פלטת גבינות בוטיק מפנקת" price="245/334 ש״ח" />
          <MenuItem name="פלטת גבינות רכות" price="150/210 ש״ח" />
          <MenuItem name="פלטת דגים מעושנים וכבושים" price="267 ש״ח" />
          <MenuItem name="קרפציו" price="147/199 ש״ח" description="סלומון | חציל | סלק" />
          <MenuItem name="סלטים (3 ליטר)" price="145 ש״ח" description="טאבולה | צרפתי | טוסקנה | קפרזה | אסייאתי | שוק יווני" />
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
</>
};

const MenuItem = ({ name, price, description }) => (
  <div className={styles.menuItem}>
    <div className={styles.itemHeader}>
      <span className={styles.itemName}>{name}</span>
      <span className={styles.itemPrice}>{price}</span>
    </div>
    {description && <p className={styles.description}>{description}</p>}
  </div>
);

export default Menu;