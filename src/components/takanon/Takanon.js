import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import styles from './Takanon.module.css';

const TermsButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => setIsOpen(!isOpen);

  return (
    <div>
      <div className={styles.center}>
        <button className={styles.button} onClick={togglePopup}>
          התקנון שלנו
        </button>
      </div>
      {isOpen && (
        <div className={styles.popup}>
          <div className={styles.popupContent}>
            <button className={styles.closeButton} onClick={togglePopup}>
              <IoMdClose size={24} />
            </button>
            <h2 className={styles.h2}>תקנון</h2>
            <p className={styles.p}>כל זכויות הקניין הרוחני באתר זה הכוללים:</p>
            <ul className={styles.ul}>
              <li className={styles.li}>זכויות יוצרים, זכויות הפצה, סודות מסחריים, סימני המסחר וכל הקניין הרוחני מכל סוג שהוא, הן בנוגע לעיצוב ועמוד האתר, הן באשר לתכנים המופיעים בו הינן רכושה הבלעדי של הנהלת האתר.</li>
              <li className={styles.li}>אין להעתיק, לשכפל, להפיץ, לפרסם או להשתמש בכל דרך אחרת במידע כלשהו מן האתר ו/או מהאתר, אלא אם ניתנה הסכמה לכך מראש ובכתב מטעם הנהלת האתר.</li>
              <li className={styles.li}>לכל שאלה ופנייה ניתן ליצור קשר עם הנהלת האתר בטלפון 0534486610 או במייל eden.barouk@gmail.com.</li>
            </ul>
            <h3 className={styles.h3}>מדיניות ביטולים</h3>
            <p className={styles.p}>בהתאם לתקנון הגנת הצרכן:</p>
            <ul className={styles.ul}>
              <li className={styles.li}>ניתן לבטל שירות אשר נקבע עבור לקוח בכל עת בתנאי כי הלקוח יידע את הנהלת האתר לגבי ביטול או שינוי המועד לפחות כ 15 יום קודם סיום ההתקשרות.</li>
              <li className={styles.li}>ביטול ההזמנה יתאפשר עד 48 שעות ממועד ביצוע ההזמנה ללא דמי ביטול ותוחזר המקדמה.</li>
              <li className={styles.li}>במקרה של ביטול 48 שעות לפני מועד האספקה לא תוחזר המקדמה ותוכלו לשריין תאריך אחר.</li>
              <li className={styles.li}>במקרה של ביטול שירותים הלקוח לא יחוייב עבור השירות.</li>
              <li className={styles.li}>לא ניתן לקבל החזר כספי עבור שירותים שבוצעו.</li>
              <li className={styles.li}>למקרה של ביטול 12 שעות לפני מועד האספקה תחויבו בתשלום של 90% מהעסקה , או 100% תלוי אם משלוח או שירות עד הבית.</li>
            </ul>
            <p className={styles.p}>אנו לא לוקחות אחריות על אלרגיות מכל סוג שהן. כמובן שנוכל להמנע מחומר גלם המזיק במקרה של בקשה מיוחדת</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TermsButton;