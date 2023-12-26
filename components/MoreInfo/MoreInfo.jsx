import Image from "next/image";
import styles from "@/components/MoreInfo/MoreInfo.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

const MoreInfo = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className={styles.body}>
      <div className={styles.cover}>
        <div className={styles.box} data-aos="fade-down">
          <div className={styles.imageWrappers}>
            <a href="#">
              <Image
                className={styles.img}
                src="/img/cheappizza.jpg"
                alt=""
                width={350}
                height={200}
              />
            </a>
          </div>

          <div className={styles.wrapTexts}>
            <h4>Affordable Price</h4>

            <p>
              Affordable slices, priceless bites! Indulge in irresistible flavor
              on a budget – because good times shouldn't empty your wallet!
            </p>
          </div>
        </div>

        <div className={styles.box} data-aos="fade-up">
          <div className={styles.imageWrappers}>
            <a href="#">
              <Image
                className={styles.img}
                src="/img/freedeliver.jpg"
                alt=""
                width={350}
                height={200}
              />
            </a>
          </div>

          <div className={styles.wrapTexts}>
            <h4>Free Delivery</h4>

            <p>
              Alberto's Pizza is bringing the feast to your front door. Free
              delivery – because every bite should be a blissful experience!
            </p>
          </div>
        </div>

        <div className={styles.box} data-aos="fade-down">
          <div className={styles.imageWrappers}>
            <a href="#">
              <Image
                className={styles.img}
                src="/img/yum.jpg"
                alt=""
                width={350}
                height={200}
              />
            </a>
          </div>

          <div className={styles.wrapTexts}>
            <h4>Flavorful Pizza</h4>

            <p>
              From the perfect blend of cheeses to our secret signature sauces,
              each ingredient is a note in the symphony of taste.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;
