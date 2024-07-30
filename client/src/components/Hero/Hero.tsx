import styles from "./Hero.module.css"

import image from "../../assets/hero.jpg"

function Hero() {
  return (
    <section className={styles.hero}>
        <h1 className={styles.header}>SALE</h1>
        <h2 className={styles.subheader}>up to 70% off</h2>
        <button className="btn btn--primary">Buy Now</button>
        <img className={styles.img} src={image} alt="" />
    </section>
  )
}

export default Hero