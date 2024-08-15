import ImageGrid from "../components/imagegrid/ImageGrid";
import styles from "./SecondScreen.module.css"
import image1 from "../images/לאנס אוכל.png"
const SecondScreen=()=>{
    const images = [
        { src:image1, alt: 'תיאור תמונה 1' },
        { src: image1, alt: 'תיאור תמונה 2' },
        { src:image1, alt: 'תיאור תמונה 1' },
        { src: image1, alt: 'תיאור תמונה 2' },
        { src:image1, alt: 'תיאור תמונה 1' },
        { src: image1, alt: 'תיאור תמונה 2' },
        { src:image1, alt: 'תיאור תמונה 1' },
        { src: image1, alt: 'תיאור תמונה 2' },
        { src:image1, alt: 'תיאור תמונה 1' },
        { src: image1, alt: 'תיאור תמונה 2' },
        { src:image1, alt: 'תיאור תמונה 1' },
        { src: image1, alt: 'תיאור תמונה 2' },
        { src:image1, alt: 'תיאור תמונה 1' },
        { src: image1, alt: 'תיאור תמונה 2' },
        { src:image1, alt: 'תיאור תמונה 1' },
        { src: image1, alt: 'תיאור תמונה 2' },
        { src:image1, alt: 'תיאור תמונה 1' },
        { src: image1, alt: 'תיאור תמונה 2' },
        { src:image1, alt: 'תיאור תמונה 1' },
        { src: image1, alt: 'תיאור תמונה 2' },
        { src:image1, alt: 'תיאור תמונה 1' },
        { src: image1, alt: 'תיאור תמונה 2' },

      ];

    return <>
 <ImageGrid images={images} />
    </>
}
export default SecondScreen