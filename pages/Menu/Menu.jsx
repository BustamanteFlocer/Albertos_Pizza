import styles from "@/pages/Menu/Menu.module.css";
import Navbar from "@/components/Navbar/Navbar";
import PizzaList from "@/components/PizzaList/PizzaList";
import Footer from "@/components/Footer/Footer";
import axios from "axios";

const Menu = ({ pizzaList }) => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={` ${styles.pageHeader}`}>
        <h1>Menu</h1>
      </div>
      <PizzaList pizzaList={pizzaList} />
      <Footer />
    </div>
  );
};

export default Menu;

export const getServerSideProps = async () => {
  const res = await axios.get("https://albertos-pizza.vercel.app/api/products");
  return {
    props: {
      pizzaList: res.data,
    },
  };
};
