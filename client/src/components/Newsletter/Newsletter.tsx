import styles from "./Newsletter.module.css";

function Newsletter() {
  return (
    <section className={styles.main}>
      <h5 className={styles.title}>Sign up for the newsletter and get 10% off</h5>
      <p className={styles.subtitle}>Receive the latest news and trends each week.</p>
      <form className={styles.form}>
        <input className={styles.input} type="email" required placeholder="e-mail" />
        <button className="btn btn--tertiary">Sign Up</button>
      </form>
    </section>
  );
}

export default Newsletter;
