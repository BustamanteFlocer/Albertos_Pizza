import styles from "@/components/Featured/Featured.module.css";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

const Featured = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.items}>
        <div className={styles.left}>
          <div className={styles.heroText}>
            <h2 className={styles.h2} data-aos="fade-up">
              A Taste You'll Surely Miss
            </h2>
            <h1 className={styles.h1} data-aos="fade-up" data-aos-delay="300">
              BRIDGING BUDGET AND <span style={{ color: "red" }}>FLAVOR</span>{" "}
              FOR PIZZA LOVERS
            </h1>
            <p className={styles.p} data-aos="fade-up" data-aos-delay="500">
              Experience a culinary journey at Alberto's Pizza, where
              affordability meets exceptional flavor.
            </p>
            <button className={styles.button}>Order Now</button>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.img}>
            <Image
              className={styles.featured1}
              src="/img/featured.png"
              alt=""
              width="550"
              height="380"
              data-aos="fade-left"
              data-aos-delay="500"
            />
            <Image
              className={styles.featured2}
              src="/img/featured1.png"
              alt=""
              width="550"
              height="380"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
