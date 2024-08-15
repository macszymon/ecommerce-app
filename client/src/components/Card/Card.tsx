import { LiaHeart } from "react-icons/lia";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { useAppContext } from "../../context/appContext";
import { useEffect, useState } from "react";
import { product } from "../../data";

type Props = {
  product: product
};

function Card({ product}: Props) {
  const { favorites, addToFavorites, deleteFromFavorites } = useAppContext();

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setIsFavorite(favorites.includes(product))
  }, [])

  function handleFavorite() {
    if (product) {
      if (isFavorite) {
        deleteFromFavorites(product);
        setIsFavorite(false);
      } else {
        setIsFavorite(true);
        addToFavorites(product);
      }
    }
  }

  return (
    <div className={styles.container}>
      <Link to={`/product/${product.id}`} className={`${styles.card}`}>
        <img className={styles.image} src={product.imageUrl} alt="" />
        <h4 className={styles.title}>{product.name}</h4>
        <div className={styles.wrapper}>
          <span className={`${styles.price} ${product.discount ? styles.priceDiscount : ""}`}>{product.discount ? (product.price - product.price * product.discount).toFixed(2) : product.price} PLN</span>
          {product.discount > 0 && <span className={styles.priceOld}>{product.price} PLN</span>}
        </div>
      </Link>
      <button onClick={() => handleFavorite()} className={`${styles.favoritesBtn} ${isFavorite ? styles.favoritesBtnActive : ""}`}>
        <LiaHeart />
      </button>
    </div>
  );
}

export default Card;
