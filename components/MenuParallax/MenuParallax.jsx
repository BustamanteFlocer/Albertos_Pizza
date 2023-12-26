import Image from "next/image";
import styles from "@/components/MenuParallax/MenuParallax.module.css";

import { Parallax } from "react-parallax";

const MenuParallax = () => {
  const image = "/img/menupar.jpg";
  return (
    <div className={styles.parallax}>
      <Parallax className={styles.parallaxImg} strength={100} bgImage={image}>
        <div className={styles.content}>
          <div className={styles.textContent}>Discover OUR MENU</div>
        </div>
      </Parallax>
    </div>
  );
};

export default MenuParallax;
