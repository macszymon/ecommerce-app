import { Link } from "react-router-dom";
import { product } from "../../data";
import styles from "./CartCard.module.css";
import { CiCircleRemove } from "react-icons/ci";
import { useAppContext } from "../../context/appContext";
import { useEffect } from "react";

type Props = {
  product: product;
  size?: string;
  quantity: number;
};

function CartCard({ product, size, quantity }: Props) {
  const { cart, deleteFromCart } = useAppContext();

  useEffect(() => {}, [cart]);

  return (
    <div className={styles.card}>
      <Link to={`/product/${product.id}`}>
        <img className={styles.img} src={product.imageUrl} alt="" />
      </Link>
      <div className={styles.content}>
        <header className={styles.header}>
          <Link to={`/product/${product.id}`}>
            <h2 className={styles.title}>{product.name}</h2>
          </Link>
          <button onClick={() => deleteFromCart({product, size, quantity})} className={styles.remove}>
            <CiCircleRemove />
          </button>
        </header>
        <div className={styles.details}>
          {size && <h3 className={styles.subtitle}>Size: {size}</h3>}
          <h3 className={styles.subtitle}>Quantity: {quantity}</h3>
        </div>
        <div className={styles.prices}>
          <span className={`${styles.price} ${product.discount ? styles.priceDiscount : ""}`}>{product.discount ? ((product.price - (product.price * product.discount)) * quantity).toFixed(2) : product.price * quantity} PLN</span>
          {product.discount > 0 && <span className={styles.priceOld}>{product.price * quantity} PLN</span>}
        </div>
      </div>
    </div>
  );
}

export default CartCard;
