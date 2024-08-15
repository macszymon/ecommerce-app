import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchProducts } from "../../helpers/dataFunctions";
import { product } from "../../data";
import Card from "../../components/Card/Card";

import styles from "./Search.module.css";

type Props = {};

function Search({}: Props) {
  const [results, setResults] = useState<product[]>([]);
  const { input = "" } = useParams();

  useEffect(() => {
    setResults(searchProducts(input));
  }, [input]);

  return (
    <section className="container">
      {results.length ? (
        <>
          <header className={styles.header}>
            <h2 className={styles.title}>{input}</h2>
            <span className={styles.quantity}>{results.length} results</span>
          </header>
          <div className={styles.cards}>
            {results.map((product) => {
              return <Card key={product.id} product={product} />;
            })}
          </div>
        </>
      ) : (
        <h2 className={styles.noResults}>No results for - {input}</h2>
      )}
    </section>
  );
}

export default Search;
