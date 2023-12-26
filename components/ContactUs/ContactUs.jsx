import styles from "@/components/ContactUs/ContactUs.module.css";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

const ContactUs = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className={styles.contain}>
      <div className={styles.container}>
        <div className={styles.box1} data-aos="fade-right">
          <div className={styles.profile}>
            <h1 className={styles.header}>Send Us A Message</h1>
            <div className={styles.textWrapper}>
              <div className={styles.textBox}></div>
              <div className={styles.address}>
                <h2>Address:</h2>
                <p>1030 Southwood Dr San Luis Obispo, California(CA), 93401</p>
              </div>
              <div className={styles.textBox}></div>
              <div className={styles.links}>
                <h2>Contact:</h2>
                <div>
                  <span>
                    <FiPhoneCall className={styles.linkIcon} />
                  </span>
                  <a href="tel:+4733378901">+47 333 78 901</a>
                </div>
                <div>
                  <span>
                    <HiOutlineMailOpen className={styles.linkIcon} />
                  </span>
                  <a href="mailto:miladamiri@gmail.com">miladamiri@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.box2}>
          <div></div>
          <div id={styles.formWrap} className={styles.formWrap}>
            <form action="">
              <label className={styles.message} htmlFor="message">
                message:
              </label>
              <textarea
                name="message"
                id={styles.message}
                cols="30"
                rows="10"
                placeholder="Your message"
              ></textarea>

              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your name"
              />
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Your email"
              />

              <input type="submit" name="submit" value="Send" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
