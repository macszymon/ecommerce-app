import styles from "./ProductSlider.module.css";
import { Link } from "react-router-dom";
import Slider from "../Slider/Slider";
import { useState } from "react";

type Props = {
  title: string;
  image: string;
  type: string;
};

function ProductsSlider({ title, image, type }: Props) {
  const [active, setActive] = useState("men");

  return (
    <section className={`${styles.main} container`}>
      <div className={styles.header}>
        <img src={image} alt="" className={styles.image} />
        <div className={styles.headerBox}>
          <h3 className={styles.title}>{title}</h3>
          <Link to={`/${active}/${type}`} className="btn btn--tertiary">See More</Link>
        </div>
      </div>
      <div className={styles.categories}>
        <button onClick={() => setActive("men")} disabled={active === "men"} className={`${styles.category} ${active === "men" && styles.active}`}>
          Men
        </button>
        <button onClick={() => setActive("women")} disabled={active === "women"} className={`${styles.category} ${active === "women" && styles.active}`}>
          Women
        </button>
      </div>
      <Slider gender={active} collection={type}/>
    </section>
  );
}

export default ProductsSlider;
