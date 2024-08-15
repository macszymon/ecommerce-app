import { useEffect, useRef, useState } from "react";
import styles from "./Slider.module.css";
import { Link } from "react-router-dom";
import { data } from "../../data";
import Card from "../Card/Card";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

type Props = {
  gender: string;
  type?: string;
  collection?: string;
  id?: number;
};

function Slider({ id, gender, type, collection }: Props) {
  const slider = useRef<HTMLDivElement>(null);

  const [filteredData, setFilteredData] = useState(
    data
      .filter((item) => {
        const genderMatch = item.gender === gender;
        const typeMatch = type ? item.type === type : true;
        const idMatch = item.id === id ? false : true;

        let collectionMatch = true;
        if (collection === "sale") {
          collectionMatch = item.discount > 0;
        } else if (collection === "all") {
          collectionMatch = true;
        } else {
          collectionMatch = item.category === collection;
        }

        return genderMatch && typeMatch && collectionMatch && idMatch;
      })
      .slice(0, 6)
  );

  useEffect(() => {
    setFilteredData(
      data
        .filter((item) => {
          const genderMatch = item.gender === gender;
          const typeMatch = type ? item.type === type : true;
          const idMatch = item.id === id ? false : true;

          let collectionMatch = true;
          if (collection === "sale") {
            collectionMatch = item.discount > 0;
          } else if (collection === "all") {
            collectionMatch = true;
          } else {
            collectionMatch = item.category === collection;
          }

          return genderMatch && typeMatch && collectionMatch && idMatch;
        })
        .slice(0, 6)
    );

    if (!slider.current) return;
    slider.current.scrollTo(0, 0);
  }, [gender, type, collection, id]);

  const nextSlide = () => {
    if (!slider.current) return;
    slider.current.scrollTo(slider.current.scrollLeft + 17 * 16, 0);
  };

  const prevSlide = () => {
    if (!slider.current) return;
    slider.current.scrollTo(slider.current.scrollLeft - 17 * 16, 0);
  };

  return (
    <div className={styles.main}>
      <div className={`${styles.slider}`} ref={slider}>
        {filteredData.map((product) => {
          return <Card key={product.id} product={product} />;
        })}
        <Link to={`/${gender}/${collection}`} className={styles.cardMore}>
          See More
        </Link>
      </div>
      <button className={`${styles.arrow} ${styles.arrowLeft}`} onClick={prevSlide}>
        <RiArrowLeftSLine />
      </button>
      <button className={`${styles.arrow} ${styles.arrowRight}`} onClick={nextSlide}>
        <RiArrowRightSLine />
      </button>
    </div>
  );
}

export default Slider;
