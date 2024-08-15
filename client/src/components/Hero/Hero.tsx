import styles from "./Hero.module.css";

import image from "../../assets/hero.jpg";

import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.header}>SALE</h1>
      <h2 className={styles.subheader}>up to 70% off</h2>
      <Link to="/women/sale" className="btn btn--primary">
        Buy Now
      </Link>
      <img className={styles.img} src={image} alt="" />
    </section>
  );
}

export default Hero;
