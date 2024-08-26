import styles from "./Error.module.css";

import { useNavigate } from "react-router-dom";

function Error() {
  const navigate = useNavigate();

  return (
    <section className={styles.main}>
      <h1 className={styles.title}>Error 404</h1>
      <h2 className={styles.subtitle}>Page not found</h2>
      <button onClick={() => navigate("/")} className="btn btn--primary">
        Back home
      </button>
    </section>
  );
}

export default Error;
