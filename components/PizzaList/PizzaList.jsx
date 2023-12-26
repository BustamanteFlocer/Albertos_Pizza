import styles from "@/components/PizzaList/PizzaList.module.css";
import PizzaCard from "../PizzaCard/PizzaCard";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

const PizzaList = ({ pizzaList }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className={styles.container}>
      <h1 className={styles.title} data-aos="fade-up">
        DOUGH-LICIOUS
      </h1>
      <p className={styles.desc} data-aos="fade-up" data-aos-delay="500">
        Alberto's Pizza takes pride in offering a DOUGH-LICIOUS menu that is
        sure to tantalize your taste buds and satisfy your pizza cravings. Our
        commitment to quality ingredients and expert craftsmanship ensures that
        every bite is a delightful experience.
      </p>
      <div className={styles.wrapper} data-aos="fade-up" data-aos-delay="500">
        {pizzaList.map((pizza) => (
          <PizzaCard key={pizza._id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default PizzaList;
