import styles from "@/components/Add/Add.module.css";

const AddButton = ({ setClose }) => {
  return (
    <div className={styles.wrap}>
      <div onClick={() => setClose(false)} className={styles.mainAddButton}>
        Add to Menu
      </div>
    </div>
  );
};

export default AddButton;
