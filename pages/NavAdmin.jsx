import Image from "next/image";
import styles from "../styles/NavAdmin.module.css";
import { TiShoppingCart } from "react-icons/ti";
import { BiLogOut } from "react-icons/bi";
import { MdRestaurantMenu } from "react-icons/md";
import Link from "next/link";

const NavAdmin = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <ul>
          <li>
            <div className={styles.logo}>
              <Image
                className={styles.img}
                src="/img/featured1.png"
                alt=""
                height="45"
                width="45"
              />
              <span className={styles.navItem}>Admin</span>
            </div>
          </li>

          <Link href="/dashboard" passHref>
            <li>
              <div className={styles.menu}>
                <MdRestaurantMenu className={styles.icons} />
                <span className={styles.navItem}>Menu</span>
              </div>
            </li>
          </Link>
          <Link href="/AdminOrders" passHref>
            <li>
              <div className={styles.menu}>
                <TiShoppingCart className={styles.icons} />
                <span className={styles.navItem}>Orders</span>
              </div>
            </li>
          </Link>

          <Link href="/admin/login" passHref>
            <li>
              <div className={styles.logout}>
                <BiLogOut className={styles.icons} />
                <span className={styles.navItem}>Log out</span>
              </div>
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default NavAdmin;
