import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import styles from "@/components/Clients/Client.module.css";
import ClientSlider from "../ClientSlider/ClientSlider";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";

let clients = [
  {
    name: "Flocer Bustamante",
    position: "customer",
    img_url: "/img/review1.jpg",
    stars: 5,
    disc: `Lovers of pizza always comes to Alberto's who is always on the rescue. Prices are just right and with varieties of flavors to choose from.`,
  },

  {
    name: "Cheng Abarquez",
    position: "customer",
    img_url: "/img/review2.jpg",
    stars: 5,
    disc: `On a tight budget and craving for Pizza? This might be the perfect place to be,they do have different varieties and flavors of pizza.`,
  },
  {
    name: "Fatima Eviota",
    position: "customer",
    img_url: "/img/review3.jpg",
    stars: 5,
    disc: `I really like this pizza. It is cheap. What I really likes is that it tastes more local, not the transnational branches. For me, that's the uniquenes of the pizza.`,
  },

  {
    name: "Sheen Cumatura",
    position: "customer",
    img_url: "/img/review4.jpg",
    stars: 5,
    disc: `Just a dial away and your pizza's delivered. It's a 24 hour food service for hungry online worker stomach or a callcenter agent.`,
  },
];
var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 530,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Clients = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const arrowRef = useRef(null);
  let clientDisc = "";
  clientDisc = clients.map((item, i) => <ClientSlider item={item} key={i} />);
  return (
    <div className={styles.container} id="client">
      <div data-aos="fade-left">
        <h3>our testimonials</h3>
        <h1 className={styles.h1}>What Our Customers are Saying!</h1>
      </div>
      <div className={styles.testimonials}>
        <Slider ref={arrowRef} {...settings}>
          {clientDisc}
        </Slider>
        <div className={styles.buttons}>
          <button
            className={styles.button}
            onClick={() => arrowRef.current.slickPrev()}
          >
            <IoIosArrowBack />
          </button>
          <button
            className={styles.button}
            onClick={() => arrowRef.current.slickNext()}
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Clients;
