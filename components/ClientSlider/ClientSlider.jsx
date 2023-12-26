import React from "react";
import styles from "@/components/ClientSlider/ClientSlider.module.css";
import { IoIosQuote } from "react-icons/io";
import { AiOutlineStar } from "react-icons/ai";

const ClientSlider = (props) => {
  const { name, position, img_url, stars, disc } = props.item;
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={`${styles.quote} ${styles.span}`}>
          <IoIosQuote />
        </span>
        <div>
          {Array(stars)
            .fill()
            .map((_, i) => (
              <span className={`${styles.stars} ${styles.span}`} key={i}>
                <AiOutlineStar />
              </span>
            ))}
        </div>
      </div>
      <div className={styles.body}>{disc}</div>
      <div className={styles.footer}>
        <img className={styles.img} src={img_url} alt={name} />
        <div className={styles.details}>
          <h1 className={styles.h1}>{name}</h1>
          <p className={styles.p}>{position}</p>
        </div>
      </div>
    </div>
  );
};

export default ClientSlider;
