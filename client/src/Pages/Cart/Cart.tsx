import { useAppContext } from "../../context/appContext";

import styles from "./Cart.module.css";
import CartCard from "../../components/CartCard/CartCard";

function Cart() {
  const { cart } = useAppContext();
  let deliveryPrice = 0;
  let productsPrice = 0;
  let totalDiscount = 0;
  let totalPrice = 0;
  if (cart.length > 0) {
    productsPrice = cart.map((item) => (item.product.discount ? ((item.product.price - item.product.price * item.product.discount) * item.quantity) : item.product.price * item.quantity)).reduce((prev, next) => prev + next);
    totalDiscount = cart.map((item) => item.product.discount * item.product.price).reduce((prev, next) => prev + next);
    totalPrice = deliveryPrice + productsPrice;
    productsPrice > 150 ? deliveryPrice = 0 : deliveryPrice = 9.99
  }

  return (
    <section className="container">
      {cart.length ? (
        <div className={styles.wrapper}>
          <div>
            <header className={styles.header}>
              <h2 className={styles.title}>Cart</h2>
              <span className={styles.quantity}>
                {cart.length} {cart.length === 1 ? "product" : "products"}
              </span>
            </header>
            <div className={styles.cards}>
              {cart.map((item, index) => {
                return <CartCard key={index} product={item.product} size={item.size} quantity={item.quantity} />;
              })}
            </div>
          </div>
          <div className={styles.details}>
            <ul className={styles.list}>
              <li className={styles.saved}>You save total {totalDiscount.toFixed(2)} PLN</li>
              <li className={styles.item}>
                Products price <span>{productsPrice.toFixed(2)} PLN</span>
              </li>
              <li className={styles.item}>
                Delivery <span>{deliveryPrice.toFixed(2)} PLN</span>
              </li>
              <li className={styles.total}>
                Total <span>{totalPrice.toFixed(2)} PLN</span>
              </li>
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
