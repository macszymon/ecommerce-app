import Card from "../../components/Card/Card";
import { useAppContext } from "../../context/appContext";

import styles from "./Favorites.module.css";

type Props = {};

function Favorites({}: Props) {
  const { favorites } = useAppContext();

  return (
    <section className="container">
      {favorites.length > 0 ? (
        <>
          <header className={styles.header}>
            <h2 className={styles.title}>Favorites</h2>
            <span className={styles.quantity}>
              {favorites.length} {favorites.length === 1 ? "product" : "products"}
            </span>
          </header>
          <div className={styles.cards}>
            {favorites?.map((product) => {
              return <Card key={product.id} product={product} />;
            })}
          </div>
        </>
      ) : (
        <h2 className={styles.noResults}>You don't have any items in your favorites </h2>
      )}
    </section>
  );
}

export default Favorites;
