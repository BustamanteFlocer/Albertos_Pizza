import styles from "@/components/MyForm/MyForm.module.css";

const MyForm = () => {
  return (
    <div className={styles.wrap} id="wrap">
      <h1 className={styles.title}>send a message!</h1>
      <br />
      <br />
      <br />
      <div id={styles.formWrap} className={styles.formWrap}>
        <form action="">
          <p className={styles.text}>hello joe!</p>
          <label htmlFor="message">message:</label>
          <textarea
            name="message"
            id={styles.message}
            cols="30"
            rows="10"
            defaultValue="your message"
          ></textarea>

          <p className={styles.text}>Best,</p>

          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" />
          <label htmlFor="email">Email:</label>
          <input type="text" name="email" id="email" />

          <input type="submit" name="submit" value="I, send thanks!" />
        </form>
      </div>
    </div>
  );
};

export default MyForm;
