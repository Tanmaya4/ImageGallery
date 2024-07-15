import { useEffect } from "react";
import styles from "../styles/Gallery.module.css";
import axios from "axios";

function Gallery() {
  // fetch the data
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            "https://7wnenbveal.execute-api.ap-south-1.amazonaws.com/dev/bucket",
            {
              headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
                "Access-Control-Allow-Headers": "Content-Type",
              },
            }
          );
          console.log(response.data);
        } catch (error) {
          console.error("Error fetching data: ", error);
        }
      };
      fetchData();
    }, []);

  return (
    <div>
      <h1>Gallery</h1>
      <div className={styles.pagewrap}>
        <div className={styles.gallery}>
          <article className={styles.image}>
            <img src="https://res.cloudinary.com/dnroxbmjk/image/upload/v1462049388/img01_wqwpnu.jpg" />
          </article>

          <article className={styles.image}>
            <img
              src="https://res.cloudinary.com/dnroxbmjk/image/upload/v1462049389/img02_f4vcdt.jpg
"
            />
          </article>

          <article className={styles.image}>
            <img src="https://res.cloudinary.com/dnroxbmjk/image/upload/v1462049386/img03_n0asvf.jpg" />
          </article>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
