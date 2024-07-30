import styles from "./Banner.module.css";

import image from "../../assets/NewBanner.jpg"

type Props = {};

function Banner({}: Props) {
  return (
    <section className={styles.main}>
      <img className={styles.img} src={image} alt="" />
      <h3 className={styles.title}>New Collection</h3>
      <div className={styles.buttons}>
        <button className="btn btn--secondary">For Him</button>
        <button className="btn btn--secondary">For Her</button>
      </div>
    </section>
  );
}

export default Banner;
