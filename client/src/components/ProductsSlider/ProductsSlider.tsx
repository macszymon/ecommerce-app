import { useEffect, useRef, useState } from "react";
import Card from "../Card/Card";
import styles from "./ProductSlider.module.css";
import { data } from "../../data";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { Link } from "react-router-dom";

type Props = {
  title: string;
  image: string;
  type: string;
};

function ProductsSlider({ title, image, type }: Props) {
  const [active, setActive] = useState("men");
  const slider = useRef<HTMLDivElement>(null);
  const [filteredData, setFilteredData] = useState(
    data
      .filter((item) => {
        if (item.gender !== active) {
          return false;
        }

        if (type === "sale") {
          return item.discount > 0;
        } else if (type === "new") {
          return item.category === "new";
        } else {
          return true;
        }
      })
      .slice(0, 6)
  );

  useEffect(() => {
    setFilteredData(
      data
        .filter((item) => {
          if (item.gender !== active) {
            return false;
          }

          if (type === "sale") {
            return item.discount > 0;
          } else if (type === "new") {
            return item.category === "new";
          } else {
            return true;
          }
        })
        .slice(0, 6)
    );

    if (!slider.current) return;
    slider.current.scrollTo(0, 0);
    
  }, [active]);

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
      <div className={`${styles.slider}`} ref={slider}>
        {filteredData.map((product) => {
          return <Card key={product.id} id={product.id} name={product.name} price={product.price} discount={product.discount} imageUrl={product.imageUrl} />;
        })}
        <Link to={`/${active}/${type}`} className={styles.cardMore}>
          See More
        </Link>
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
