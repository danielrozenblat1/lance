import styles from "./FirstScreen.module.css"
import lance from "../images/לאנס לוגו.png"
import Circle from "../components/circle/Circle"
import food from "../Icons/wired-lineal-1916-food.json"
import event from "../Icons/wired-lineal-1871-red-carpet.json"
import plate from "../Icons/wired-lineal-558-food-plate-warm-cover.json"
const FirstScreen=(props)=>{
   

return <>
<div className={props.scrolled?styles.descriptionP:styles.description}>מזל טוב!</div>
<div className={styles.description}>חוגגים אירוע מסויים וצריכים קייטרינג?</div>
<div className={styles.description}>הכירו את חברת הקייטרינג עם סגנון ההגשה שעוד לא נראה בארץ</div>
<div className={styles.center}><img className={styles.image} src={lance} alt="לאנס - lance"/></div>

{/* 
<div className={styles.row}>
    <Circle icon={food} text="קייטרינג"/>
    <Circle icon={plate} text="מגשי אירוח"/>
    <Circle icon={event} text="אירועים"/>
</div> */}
</>


}
export default FirstScreen