import axios from "axios";
import { useState } from "react";
import styles from "@/pages/AdminOrders/AdminOrders.module.css";
import NavAdmin from "../../components/NavAdmin/NavAdmin";

const AdminOrders = ({ orders }) => {
  const [orderList, setOrderList] = useState(orders);
  const status = ["preparing", "on the way", "delivered"];

  const handleStatus = async (id) => {
    const item = orderList.filter((order) => order._id === id)[0];
    const currentStatus = item.status;

    try {
      const res = await axios.put(
        "https://albertos-pizza.vercel.app/api/orders/" + id,
        {
          status: currentStatus + 1,
        }
      );
      setOrderList([
        res.data,
        ...orderList.filter((order) => order._id !== id),
      ]);
    } catch (err) {
      console.log(err);
    }
  };

  const handleOrderDelete = async (id) => {
    console.log(id);
    try {
      const res = await axios.delete(
        "https://albertos-pizza.vercel.app/api/orders/" + id
      );
      setOrderList(orderList.filter((order) => order._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <NavAdmin />
      <section className={styles.main}>
        <section className={styles.orders}>
          <div className={styles.ordersList}>
            <h1 className={styles.title}>Customer Orders</h1>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Customer</th>
                  <th>Total</th>
                  <th>Payment</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              {orderList.map((order) => (
                <tbody key={order._id}>
                  <tr>
                    <td>{order._id.slice(0, 5)}...</td>
                    <td>{order.customer}</td>
                    <td>₱{order.total}</td>
                    <td>
                      {order.method === 0 ? (
                        <span>cash</span>
                      ) : (
                        <span>paid</span>
                      )}
                    </td>
                    <td>{status[order.status]}</td>
                    <td>
                      <button
                        className={styles.nextButton}
                        onClick={() => handleStatus(order._id)}
                      >
                        Next Stage
                      </button>
                      <button
                        className={styles.deleteButton}
                        onClick={() => handleOrderDelete(order._id)}
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

  const orderRes = await axios.get(
    "https://albertos-pizza.vercel.app/api/orders"
  );

  return {
    props: {
      orders: orderRes.data,
    },
  };
};

export default AdminOrders;
