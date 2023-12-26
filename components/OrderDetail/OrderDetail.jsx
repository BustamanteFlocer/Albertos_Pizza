import styles from "@/components/OrderDetail/OrderDetail.module.css";
import { useEffect, useState } from "react";

const OrderDetail = ({ total, createOrder, setShowOrderDetail }) => {
  const [customer, setCustomer] = useState("");
  const [address, setAddress] = useState("");

  const handleClick = () => {
    createOrder({ customer, address, total, method: 0 });
  };

  const handleClose = () => {
    setShowOrderDetail(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>You will pay $12 after delivery</h1>

        <div className={styles.item}>
          <label className={styles.label}>Full Name</label>
          <input
            placeholder="Your name"
            type="text"
            className={styles.input}
            onChange={(e) => setCustomer(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Phone Number</label>
          <input
            placeholder="Your number"
            type="text"
            className={styles.input}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Address</label>
          <input
            className={styles.textarea}
            row={5}
            placeholder="Your address"
            type="text"
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className={styles.buttons}>
          <button className={styles.cancelButton} onClick={handleClose}>
            Cancel
          </button>
          <button className={styles.orderButton} onClick={handleClick}>
            Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
