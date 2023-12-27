import styles from "@/components/ContactUs/ContactUs.module.css";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

const ContactUs = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className={styles.contain}>
      <div className={styles.wrapper}>
        <div className={`${styles.containerFluid} ${styles.contact}`}>
          <div className={`${styles.contactContainer} ${styles.row} `}>
            <div className={styles.contactRounded}>
              <div className={styles.contactForm}>
                <h1 data-aos="fade-up">Get in touch</h1>
                <p data-aos="fade-up" data-aos-delay="300">
                  Craving an extraordinary pizza experience that transcends the
                  ordinary? Look no further than Alberto's Pizza, where every
                  slice is a masterpiece! Dial, click, or tap your way to pizza
                  delight – Alberto's is just a touch away from turning your
                  cravings into a flavorful experience!
                </p>
              </div>
            </div>

            <div className={styles.mapContainer}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d981.3526442090455!2d123.8906106!3d10.3089892!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a9994dde515555%3A0xf9e837c1d36fb6cc!2sAlberto&#39;s%20Pizza!5e0!3m2!1sen!2sph!4v1703507321310!5m2!1sen!2sph"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className={styles.contactInput}>
              <form action="" className="">
                <input type="text" placeholder=" Your Name"></input>
                <input type="email" placeholder=" Enter Your Email"></input>
                <textarea
                  rows="5"
                  cols="10"
                  placeholder="Your Message"
                ></textarea>
                <button type="submit">Submit</button>
              </form>
            </div>

            <div className={styles.contactInfoWrapper}>
              <div className={styles.contactInfo}>
                <FaLocationDot className={styles.icons} />
                <div>
                  <h4>Address</h4>
                  <p>15 B. Rodriguez St, Cebu City</p>
                </div>
              </div>
              <div className={styles.contactInfo}>
                <IoIosMail className={styles.icons} />
                <div>
                  <h4>Mail Us</h4>
                  <p>albertospizza@gmail.com</p>
                </div>
              </div>
              <div className={styles.contactInfo}>
                <FaPhoneAlt className={styles.icons} />
                <div>
                  <h4>Telephone</h4>
                  <p>(+032) 231 4628</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
