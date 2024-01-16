import styles from "@/components/Footer/Footer.module.css";
import Image from "next/image";
import { FaRegArrowAltCircleRight, FaRegEnvelope } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { LiaTwitter } from "react-icons/lia";
import { TiSocialPinterest } from "react-icons/ti";
import { LiaInstagram } from "react-icons/lia";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.col}>
          <Image
            className={styles.logo}
            src="/img/Alberos-logo.png"
            alt=""
            height="70"
            width="150"
          />
          <p className={styles.logoText}>
            Craving an extraordinary pizza experience that transcends the
            ordinary? Look no further than Alberto's Pizza, where every slice is
            a delight!
          </p>
        </div>
        <div className={styles.col}>
          <h3>
            Address
            <div className={styles.underline}>
              <span className={styles.span}></span>
            </div>
          </h3>
          <p className={styles.info}>15 B. Rodriguez St</p>
          <p className={styles.info}>Cebu City, Cebu</p>
          <p className={styles.info}>Philippines</p>
        </div>

        <div className={styles.col}>
          <h3>
            Links
            <div className={styles.underline}>
              <span className={styles.span}></span>
            </div>
          </h3>
          <ul className={styles.links}>
            <li className={styles.link}>
              <a className={styles.anchor} href="">
                Homepage
              </a>
            </li>

            <li className={styles.link}>
              <a href="/Menu" className={styles.anchor}>
                Menu
              </a>
            </li>

            <li className={styles.link}>
              <a className={styles.anchor} href="/about">
                About
              </a>
            </li>

            <li className={styles.link}>
              <a className={styles.anchor} href="/Contact">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.col}>
          <h3 className={styles.getUpdates}>
            Get Updates
            <div className={styles.underline}>
              <span className={styles.span}></span>
            </div>
          </h3>
          <form className={styles.form}>
            <FaRegEnvelope className={styles.icons} size={20} />
            <input
              className={styles.input}
              type="email"
              placeholder="Enter your email"
              required
            />
            <button className={styles.button} type="submit">
              <FaRegArrowAltCircleRight className={styles.icons} size={20} />
            </button>
          </form>
          <div className={styles.socialMedia}>
            <TiSocialFacebook className={styles.socialIcons} />
            <LiaTwitter className={styles.socialIcons} />
            <LiaInstagram className={styles.socialIcons} />
            <TiSocialPinterest className={styles.socialIcons} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
