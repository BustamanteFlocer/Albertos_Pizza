import Image from "next/image";
import styles from "@/components/PizzaCard/PizzaCard.module.css";
import Link from "next/link";

const PizzaCard = ({ pizza }) => {
  return (
    <div className={styles.container}>
      <Link href={`/product/${pizza._id}`} passHref>
        <Image
          className={styles.img}
          src={pizza.img}
          alt=""
          width="150"
          height="150"
        />
      </Link>
      <h1 className={styles.title}>{pizza.title}</h1>
      <span className={styles.price}>₱{pizza.prices[0]}</span>
      <p className={styles.desc}>{pizza.desc}</p>
      <div className="">
        <Link href={`/product/${pizza._id}`} passHref>
          <button className={styles.button}>Order</button>
        </Link>
      </div>
    </div>
  );
};

export default PizzaCard;
