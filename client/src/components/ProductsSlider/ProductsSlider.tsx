import { useRef, useState } from "react";
import Card from "../Card/Card";
import styles from "./ProductSlider.module.css";
import { data } from "../../data";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

type Props = {};

function ProductsSlider({}: Props) {
  const [active, setActive] = useState("men")
  const slider = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    if (!slider.current) return;
    slider.current.scrollTo(slider.current.scrollLeft + 17 * 16, 0);
  };

  const prevSlide = () => {
    if (!slider.current) return;
    slider.current.scrollTo(slider.current.scrollLeft - 17 * 16, 0);
  };

  return (
    <section className={`${styles.main} container`}>
      <h3 className={styles.title}>New Collection</h3>
      <div className={styles.categories}>
        <button onClick={() => setActive("men")} disabled={active==="men"} className={`${styles.category} ${active === "men" && styles.active}`}>Men</button>
        <button onClick={() => setActive("women")} disabled={active==="women"} className={`${styles.category} ${active === "women" && styles.active}`}>Women</button>
      </div>
      <div className={`${styles.slider}`} ref={slider}>
        {data.map((product) => {
          return <Card key={product.id} id={product.id} name={product.name} price={product.price} discount={product.discount} imageUrl={product.imageUrl} />;
        })}
        <a href="#" className={styles.cardMore}>
          See More
        </a>
      </div>
      <button className={`${styles.arrow} ${styles.arrowLeft}`} onClick={prevSlide}>
        <RiArrowLeftSLine />
      </button>
      <button className={`${styles.arrow} ${styles.arrowRight}`} onClick={nextSlide}>
        <RiArrowRightSLine />
      </button>
    </section>
  );
}

export default ProductsSlider;
