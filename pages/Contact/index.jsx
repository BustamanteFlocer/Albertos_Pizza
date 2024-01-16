import styles from "@/pages/Contact/Contact.module.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import ContactUs from "@/components/ContactUs/ContactUs";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className={styles.contain}>
      <Navbar />
      <div className={styles.pageHeader}>
        <h1>Contact</h1>
      </div>
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Contact;
