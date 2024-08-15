import styles from "./ThirdScreen.module.css"
import {Player} from "@lordicon/react"
import check from "../icons/wired-lineal-284-avatar-man-approved.json"
import { useRef } from "react"
const ThirdScreen=()=>{
    const playerRef1=useRef(null);


    const handleComplete = () => {
        setTimeout(() => {
          playerRef1?.current?.playFromBeginning();
        }, 2500); // play again after 2.5 seconds
      };

return <>


</>


}
export default ThirdScreen