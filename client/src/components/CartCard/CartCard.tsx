import styles from "./CartCard.module.css";

import { product } from "../../data";

import { Link } from "react-router-dom";
import { CiCircleRemove } from "react-icons/ci";
import { useAppContext } from "../../context/appContext";
import { useEffect, useState } from "react";

type Props = {
  product: product;
  size?: string;
  quantity: number;
};

function CartCard({ product, size, quantity }: Props) {
  const { cart, deleteFromCart, updateItemInCart } = useAppContext();

  const [input, setInput] = useState(quantity);

  const handleQuantityChange = (value: string) => {
    setInput(parseInt(value));
    updateItemInCart({ product: product, size: size, quantity: parseInt(value) });
  };

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
          <button onClick={() => deleteFromCart({ product: product, size: size, quantity: quantity })} className={styles.remove}>
            <CiCircleRemove />
          </button>
        </header>
        {size && <h3 className={styles.subtitle}>Size: {size}</h3>}
        <select onChange={(e) => handleQuantityChange(e.target.value)} value={input} className={styles.select}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        <div className={styles.prices}>
          <span className={`${styles.price} ${product.discount ? styles.priceDiscount : ""}`}>{product.discount ? ((product.price - product.price * product.discount) * quantity).toFixed(2) : (product.price * quantity).toFixed(2)} PLN</span>
          {product.discount > 0 && <span className={styles.priceOld}>{product.price * quantity} PLN</span>}
        </div>
      </div>
    </div>
  );
}

export default CartCard;
