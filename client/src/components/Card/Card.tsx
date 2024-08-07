import { LiaHeart } from "react-icons/lia";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";

type Props = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  discount: number;
};

function Card({ id, name, price, imageUrl, discount }: Props) {
  return (
    <div className={styles.container}>
      <Link to={`/product/${id}`} className={`${styles.card}`}>
        <img className={styles.image} src={imageUrl} alt="" />
        <h4 className={styles.title}>{name}</h4>
        <div className={styles.wrapper}>
          <span className={`${styles.price} ${discount ? styles.priceDiscount : ""}`}>{discount ? (price - price * discount).toFixed(2) : price} PLN</span>
          {discount > 0 && <span className={styles.priceOld}>{price} PLN</span>}
        </div>
      </Link>
      <button onClick={() => console.log("click")} className={styles.favoritesBtn}>
        <LiaHeart />
      </button>
    </div>
  );
}

export default Card;
