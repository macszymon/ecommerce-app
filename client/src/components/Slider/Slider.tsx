import styles from "./Slider.module.css";

import { product } from "../../data";

import Card from "../Card/Card";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { filterData } from "../../helpers/dataFunctions";

type Props = {
  gender: string;
  type?: string;
  collection?: string;
  id?: number;
};

function Slider({ id, gender, type, collection }: Props) {
  const [filteredData, setFilteredData] = useState<product[]>([]);

  const slider = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setFilteredData(filterData(id, gender, type, collection, 6));

    if (!slider.current) return;
    slider.current.scrollTo(0, 0);
  }, [gender, type, collection, id]);

  const nextSlide = () => {
    if (!slider.current) return;
    slider.current.scrollTo(slider.current.scrollLeft + 18 * 16, 0);
  };

  const prevSlide = () => {
    if (!slider.current) return;
    slider.current.scrollTo(slider.current.scrollLeft - 18 * 16, 0);
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
