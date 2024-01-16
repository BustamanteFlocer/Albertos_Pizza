import axios from "axios";
import Head from "next/head";
import styles from "../styles/page.module.css";
import Featured from "../components/Featured/Featured";
import MySwiper from "../components/MySwiper/MySwiper";
import PizzaList from "../components/PizzaList/PizzaList";
import Clients from "@/components/Clients/Clients";
import ContactUs from "@/components/ContactUs/ContactUs";
import OurStory from "@/components/OurStory/OurStory";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import MenuParallax from "@/components/MenuParallax/MenuParallax";
import MoreInfo from "@/components/MoreInfo/MoreInfo";

export default function Home({ pizzaList }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Alberto's Pizza</title>
        <meta name="description" content="Best pizza in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Featured></Featured>
      <OurStory />
      <MoreInfo />
      <MenuParallax />
      <PizzaList pizzaList={pizzaList} />
      <MySwiper />
      <Clients />
      <ContactUs />
      <Footer />
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await axios.get("https://albertos-pizza.vercel.app/api/products");
  return {
    props: {
      pizzaList: res.data,
    },
  };
};
