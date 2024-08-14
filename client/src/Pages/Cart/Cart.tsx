import { useAppContext } from "../../context/appContext";

import styles from "./Cart.module.css";
import CartCard from "../../components/CartCard/CartCard";

type Props = {};

function Cart({}: Props) {
  const { cart } = useAppContext();

  return (
    <section className="container">
      {cart?.length ? (
        <div className={styles.wrapper}>
          <div>
            <header className={styles.header}>
              <h2 className={styles.title}>Cart</h2>
              <span className={styles.quantity}>
                {cart.length} {cart.length === 1 ? "product" : "products"}
              </span>
            </header>
            <div className={styles.cards}>
              {cart.map((item) => {
                return <CartCard key={item.product.id} product={item.product} size={item.size} quantity={item.quantity} />;
              })}
            </div>
          </div>
          <div className={styles.details}>
            <ul className={styles.list}>
              <li className={styles.saved}>You save total 40.00 PLN </li>
              <li className={styles.item}>Products price <span>100.00 PLN</span></li>
              <li className={styles.item}>Delivery <span>9.99 PLN</span></li>
              <li className={styles.total}>Total <span>409.99 PLN</span></li>
            </ul>
            <button className={`btn btn--tertiary ${styles.btn}`}>Go To Checkout</button>
            <div className={styles.form}>
              <input className={styles.input} type="text" placeholder="Add Coupon" />
              <button className="btn btn--border">Add</button>
            </div>
          </div>
        </div>
      ) : (
        <h2 className={styles.noResults}>Your Shopping Cart is Empty </h2>
      )}
    </section>
  );
}

export default Cart;
