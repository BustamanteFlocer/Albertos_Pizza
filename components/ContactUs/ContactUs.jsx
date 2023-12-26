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
        <div className={styles.box1}>
          <div className={styles.profile}>
            <h1 className={styles.header} data-aos="fade-right">
              Send Us A Message
            </h1>
            <div className={styles.address} data-aos="fade-right">
              <h2>Address:</h2>
              <p>1030 Southwood Dr San Luis Obispo, California(CA), 93401</p>
            </div>

            <div className={styles.links} data-aos="fade-right">
              <h2>Contact us directly:</h2>
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

        <div className={styles.box2}>
          <div id={styles.formWrap} className={styles.formWrap}>
            <form action="">
              <p className={styles.text}>hello joe!</p>
              <label htmlFor="message">message:</label>
              <textarea
                name="message"
                id={styles.message}
                cols="30"
                rows="10"
                placeholder="Your message"
              ></textarea>

              <p className={styles.text}>Best,</p>

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
