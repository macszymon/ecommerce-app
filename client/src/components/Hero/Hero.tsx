import styles from "./Hero.module.css"

function Hero() {
  return (
    <section className={styles.hero}>
        <h1 className={styles.header}>SALE</h1>
        <h2 className={styles.subheader}>up to 70% off</h2>
        <button className="btn btn--primary">Buy Now</button>
        <img className={styles.img} src="https://img.freepik.com/free-photo/portrait-person-wearing-yellow_23-2151336470.jpg?t=st=1721754129~exp=1721757729~hmac=d12cf55708c109b1ecfaabedc7aec4af4c3979d2f66b592f2e98f33c05045196&w=1060" alt="" />
    </section>
  )
}

export default Hero