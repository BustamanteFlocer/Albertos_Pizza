import Image from "next/image";
import styles from "@/components/OurStory/OurStory.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

const OurStory = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.main}>
          <div className="imgcontainer" data-aos="zoom-in-right">
            <Image
              className={styles.img}
              src="/img/aboutimgsss.png"
              alt=""
              width={530}
              height={353}
            />
          </div>
          <div className={styles.allText}>
            <h4 data-aos="fade-up" data-aos-delay="200">
              About Us{" "}
            </h4>
            <h1 data-aos="fade-up" data-aos-delay="300">
              Quality Bites, Affordable Delights!
            </h1>
            <p data-aos="fade-up" data-aos-delay="300">
              At Alberto's Pizza, we're not just about slices; we're about
              creating moments of joy around good food. From our humble
              beginnings near Vicente Sotto Memorial Medical Center in Cebu
              City, we've been on a mission to serve up affordable pizzas
              without compromising on quality or freshness.
            </p>

            <p data-aos="fade-up" data-aos-delay="300">
              Our diverse menu caters to all tastes, drawing in people from
              various walks of life. Discover the simple pleasure of a great
              slice at Alberto's Pizza. Join us, and let's share the goodness,
              one slice at a time!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
