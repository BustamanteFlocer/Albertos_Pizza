import Image from "next/image";
import styles from "@/pages/about/About.module.css";
import Clients from "@/components/Clients/Clients";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <Navbar />
      <div className={styles.pageHeader}>
        <h1>About</h1>
      </div>

      <div className={styles.container}>
        <div className={styles.main}>
          <div data-aos="fade-right">
            <Image
              className={styles.img}
              src="/img/pizzaa.webp"
              alt=""
              width={530}
              height={353}
            />
          </div>
          <div className={styles.allText}>
            <div data-aos="fade-up">
              <h1>Our Story</h1>
              <p>
                Alberto's Pizza started small in Cebu City near Vicente Sotto
                Memorial Medical Center. Our founders wanted great pizzas that
                wouldn't break the bank. Affordable, but never skimping on
                quality or freshness.
              </p>
            </div>
            <p data-aos="fade-up" data-aos-delay="500">
              Our story is one of a hidden gem discovered by people from all
              walks of life. Alberto's Pizza has become synonymous with a
              delightful menu that resonates with pizza lovers everywhere. Join
              us on a journey of flavors, where each bite tells the tale of our
              passion for affordable excellence. Alberto's Pizza – where good
              times and great pizzas meet!
            </p>
          </div>
        </div>
      </div>

      <Clients />
      <Footer />
    </div>
  );
};

export default About;
