import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import styles from "@/pages/dashboard/Dashboard.module.css";
import NavAdmin from "../../components/NavAdmin/NavAdmin";
import AddButton from "@/components/AddButton/AddButton";
import Add from "@/components/Add/Add";

const Dashboard = ({ products }) => {
  const [close, setClose] = useState(true);
  const [pizzaList, setPizzaList] = useState(products);

  const handleDelete = async (id) => {
    console.log(id);
    try {
      const res = await axios.delete(
        "https://albertos-pizza.vercel.app/api/products/" + id
      );
      setPizzaList(pizzaList.filter((pizza) => pizza._id !== id));
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className={styles.container}>
      <NavAdmin />
      <section className={styles.main}>
        <section className={styles.menu}>
          <div className={styles.menuList}>
            <h1 className={styles.title}>Menu List</h1>
            <div>
              {<AddButton setClose={setClose} />}
              {!close && <Add setClose={setClose} />}
            </div>
            <table className={styles.table}>
              <thead>
                <tr className={styles.trTitle}>
                  <th>Image</th>
                  <th>Id</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              {pizzaList.map((product) => (
                <tbody key={product._id}>
                  <tr className={styles.trTitle}>
                    <td>
                      <Image
                        src={product.img}
                        width={50}
                        height={50}
                        objectFit="cover"
                        alt=""
                      />
                    </td>
                    <td>{product._id.slice(0, 5)}...</td>
                    <td>{product.title}</td>
                    <td>₱{product.prices[0]}</td>
                    <td>
                      <button
                        className={styles.button}
                        onClick={() => handleDelete(product._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </section>
      </section>
    </div>
  );
};

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  if (myCookie.token !== process.env.TOKEN) {
    return {
      redirect: {
        destination: "/admin/login",
        permanent: false,
      },
    };
  }

  const productRes = await axios.get(
    "https://albertos-pizza.vercel.app/api/products"
  );

  return {
    props: {
      products: productRes.data,
    },
  };
};

export default Dashboard;
