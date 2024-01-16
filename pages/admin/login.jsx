import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "@/pages/admin/Login.module.css";

const Login = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleClick = async () => {
    try {
      await axios.post("https://albertos-pizza.vercel.app/api/login", {
        username,
        password,
      });
      router.push("/dashboard");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={`${styles.formContainer} ${styles.signIn}`}>
          <div className={styles.form}>
            <h1>Admin</h1>
            <input
              placeholder="username"
              className={styles.input}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              placeholder="password"
              type="password"
              className={styles.input}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleClick} className={styles.button}>
              Login
            </button>

            {error && <span className={styles.error}>Wrong Credentials!</span>}
          </div>
        </div>
        <div className={styles.toggleContainer}>
          <div className={styles.toggle}>
            <div className={`${styles.togglePanel} ${styles.toggleRight}`}>
              <h1>Unlock Admin Dashboard</h1>
              <p>Input your login details to gain access to the admin page.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
