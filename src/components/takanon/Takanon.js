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
    <div className={styles.popup} onClick={togglePopup}>
      <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={togglePopup} aria-label="סגירה">
          <IoMdClose size={24} />
        </button>

        <h2 className={styles.h2}>תקנון, תנאי שימוש ומדיניות פרטיות</h2>

        <h3 className={styles.h3}>קניין רוחני</h3>
        <p className={styles.p}>כל זכויות הקניין הרוחני באתר זה כוללות זכויות יוצרים, זכויות הפצה, סודות מסחריים, סימני מסחר וכל קניין רוחני מכל סוג שהוא, הן בנוגע לעיצוב ועמודי האתר, הן בנוגע לתכנים המופיעים בו, והן רכושה הבלעדי של הנהלת האתר.</p>
        <ul className={styles.ul}>
          <li className={styles.li}>אין להעתיק, לשכפל, להפיץ, לפרסם או להשתמש בכל דרך אחרת בתכנים ללא אישור בכתב ומראש מהנהלת האתר.</li>
          <li className={styles.li}>לכל שאלה ופנייה ניתן ליצור קשר עם הנהלת האתר בטלפון 0534486610 או במייל eden.barouk@gmail.com.</li>
        </ul>

        <h3 className={styles.h3}>מדיניות ביטולים</h3>
        <p className={styles.p}>בהתאם לתקנות הגנת הצרכן</p>
        <ul className={styles.ul}>
          <li className={styles.li}>ניתן לבטל שירות שנקבע ללקוח, בתנאי הודעה להנהלת האתר לפחות 15 ימים לפני מועד ההתקשרות.</li>
          <li className={styles.li}>ביטול ההזמנה עד 48 שעות ממועד ביצוע ההזמנה. ללא דמי ביטול. המקדמה תוחזר.</li>
          <li className={styles.li}>ביטול 48 שעות לפני מועד האספקה. המקדמה לא תוחזר. ניתן לשריין תאריך אחר.</li>
          <li className={styles.li}>ביטול שירותים שטרם בוצעו. לא ייגבה תשלום עבור השירות שלא בוצע.</li>
          <li className={styles.li}>לא יינתן החזר כספי עבור שירותים שבוצעו.</li>
          <li className={styles.li}>ביטול 12 שעות לפני מועד האספקה. חיוב של 90 אחוז מהעסקה, או 100 אחוז לפי אופי השירות וההיערכות.</li>
        </ul>
        <p className={styles.p}>איננו נושאות אחריות על אלרגיות. ניתן לבקש הימנעות מחומרי גלם מזיקים, בכפוף לזמינות ותיאום מראש.</p>

        <h3 className={styles.h3}>ביטול על ידי הלקוח</h3>
        <ul className={styles.ul}>
          <li className={styles.li}>ביטול עד 10 ימים לפני האירוע. ללא חיוב. יוחזר כל סכום ששולם.</li>
          <li className={styles.li}>ביטול 5 עד 9 ימים לפני האירוע. חיוב 25 אחוז מעלות ההזמנה הכוללת.</li>
          <li className={styles.li}>ביטול 48 עד 96 שעות לפני האירוע. חיוב 50 אחוז.</li>
          <li className={styles.li}>ביטול פחות מ 48 שעות לפני האירוע. חיוב 70 עד 100 אחוז, לפי שלב ההכנות והיקף חומרי הגלם שנרכשו.</li>
          <li className={styles.li}>הוצאות שכבר הוצאו בפועל, כגון רכישת חומרים, הכנות או עבודת מטבח. ינוכו מההחזר, גם אם הביטול בוצע מוקדם יותר.</li>
        </ul>

        <h3 className={styles.h3}>ביטול ביום האירוע או אי הגעה</h3>
        <ul className={styles.ul}>
          <li className={styles.li}>ייגבה תשלום מלא.</li>
        </ul>

        <h3 className={styles.h3}>כח עליון</h3>
        <ul className={styles.ul}>
          <li className={styles.li}>במקרים של כח עליון, כגון מלחמה, מזג אוויר קיצוני או הנחיות רשויות, כל מקרה ייבחן לגופו.</li>
          <li className={styles.li}>ככל שהוכנו מנות או נרכשו חומרים לפני הביטול. סכומים אלה לא יוחזרו. ניתן לשריין מועד חלופי ללא עלות נוספת.</li>
        </ul>

        <h3 className={styles.h3}>הערות</h3>
        <ul className={styles.ul}>
          <li className={styles.li}>מקדמה. הזמנה תיחשב מאושרת לאחר העברת מקדמה של 40 אחוז לפחות. המקדמה נועדה לפתיחת ההכנות ואינה ניתנת להחזר החל משבעה ימים לפני האירוע.</li>
          <li className={styles.li}>שריון מועד חלופי. לקוחות שמבטלים בהתראה קצרה של פחות מ 48 שעות יכולים, במקרים מסוימים, לדחות למועד חלופי. אין החזר כספי.</li>
        </ul>

        <h3 className={styles.h3}>כלים אנליטיים ו־Cookies</h3>
        <p className={styles.p}>אנו משתמשים בקובצי Cookies וכלים אנליטיים לצורך תפעול תקין, מדידה, שיפור השירות והתאמת חוויית המשתמש.</p>
        <ul className={styles.ul}>
          <li className={styles.li}>
            Google Analytics. מדידת תנועת גולשים, איסוף נתוני שימוש אנונימיים ויצירת דוחות. הנתונים כוללים עמודים נצפים, משכי שהייה, מקורות תנועה ומאפיינים טכניים של הדפדפן והמכשיר.
          </li>
          <li className={styles.li}>
            Facebook Pixel. מדידת המרות מקמפיינים, ניתוח ביצועי פרסום והתאמת קהלים.
          </li>
      
      
          <li className={styles.li}>
            Cookies תפעוליים. שמירת העדפות משתמש, סטטוס התחברות ותוכן עגלת קניות אם קיים.
          </li>
        </ul>
        <p className={styles.p}>
          ניתן לחסום או למחוק Cookies בהגדרות הדפדפן. חסימה עלולה לפגוע בפעילות חלק מהפונקציות באתר.
        </p>

        <h3 className={styles.h3}>מדיניות פרטיות ושיווק לפי סעיף 13 לחוק התקשורת</h3>
        <ul className={styles.ul}>
          <li className={styles.li}>איסוף פרטים בטפסים ובערוצי קשר כגון טלפון, דוא״ל או WhatsApp נעשה לצורך מתן שירות, קשר חוזר והתאמה אישית של הצעות.</li>
          <li className={styles.li}>שליחת דבר פרסומת מתבצעת רק לאחר הסכמה מפורשת מראש. סימון תיבת הסכמה בטופס ייחשב כהסכמה.</li>
          <li className={styles.li}>בכל הודעה שיווקית תופיע אפשרות הסרה ברורה ונגישה. ניתן לבקש הסרה בכל עת, ואנו נפעל בהתאם.</li>
          <li className={styles.li}>פרטים אישיים לא יימסרו לצדדים שלישיים, אלא אם נדרש תפעולית לצורך מתן השירות או לפי דרישת דין.</li>
        </ul>
      </div>
    </div>
  )}
</div>


);
};

export default TermsButton;