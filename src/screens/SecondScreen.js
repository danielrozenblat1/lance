import ImageGrid from "../components/imagegrid/ImageGrid";
import styles from "./SecondScreen.module.css"
import image1 from "../images/לאנס אוכל.png"
import { useEffect, useState } from "react";
const SecondScreen=()=>{
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState([]);
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
      useEffect(() => {
        const loadImages = async () => {
            const imagePromises = images.map(img => {
                return new Promise((resolve, reject) => {
                    const image = new Image();
                    image.src = img.src;
                    image.onload = () => resolve(img);
                    image.onerror = reject;
                });
            });

            try {
                const loadedImgs = await Promise.all(imagePromises);
                setLoadedImages(loadedImgs);
                setIsLoading(false);
            } catch (error) {
                console.error("Failed to load images", error);
                setIsLoading(false);
            }
        };

        loadImages();
    }, []);

    if (isLoading) {
        return (
            <div className={styles.loadingScreen}>
                <div className={styles.spinner}></div>
                <p className={styles.load}>התמונות בטעינה.. רק עוד שנייה</p>
            </div>
        );
    }
    return <>
 {/* <ImageGrid useSecondArray={false} /> */}
    </>
}
export default SecondScreen