import { Link, useParams } from "react-router-dom";
import { data } from "../../data";
import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";

import styles from "./Products.module.css";
import { IoIosArrowForward } from "react-icons/io";

type Props = {};

function Products({}: Props) {
  const { gender, collection, type } = useParams();

  const [filteredData, setFilteredData] = useState(
    data.filter((item) => {
      const genderMatch = item.gender === gender;
      const typeMatch = type ? item.type === type : true;

      let collectionMatch = true;
      if (collection === "sale") {
        collectionMatch = item.discount > 0;
      } else if (collection === "all") {
        collectionMatch = true;
      } else {
        collectionMatch = item.category === collection;
      }

      return genderMatch && typeMatch && collectionMatch;
    })
  );

  useEffect(() => {
    setFilteredData(
      data.filter((item) => {
        const genderMatch = item.gender === gender;
        const typeMatch = type ? item.type === type : true;

        let collectionMatch = true;
        if (collection === "sale") {
          collectionMatch = item.discount > 0;
        } else if (collection === "all") {
          collectionMatch = true;
        } else {
          collectionMatch = item.category === collection;
        }

        return genderMatch && typeMatch && collectionMatch;
      })
    );
  }, [gender, collection, type]);

  return (
    <section className="container">
      <nav className={styles.navigation}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/">CLOTHES</Link>
            <IoIosArrowForward />
          </li>
          <li className={styles.item}>
            <Link to={`/${gender}/all`}>{gender}</Link>
            <IoIosArrowForward />
          </li>
          {!type && (
            <li className={styles.item}>
              <span>{collection}</span>
            </li>
          )}
          {type && (
            <li className={styles.item}>
              <span>{collection + " " + type}</span>
            </li>
          )}
        </ul>
      </nav>
      <div className={styles.wrapper}>
        <aside className={styles.sidebar}>
          <ul className={styles.sideList}>
            <li className={styles.sideItem}>
              <Link to="/men/all" className={`${styles.dropdownLink}`}>
                Men
              </Link>
              <ul className={styles.dropdown}>
                <li>
                  <Link to="/men/sale" className={`${styles.dropdownLink} ${styles.dropdownLinkSale}`}>
                    Sale
                  </Link>
                </li>
                <li>
                  <Link to="/men/new" className={styles.dropdownLink}>
                    New Collection
                  </Link>
                </li>
                <li>
                  <Link to="/men/basic" className={styles.dropdownLink}>
                    Basic
                  </Link>
                </li>
                <li>
                  <Link to="/men/festival" className={styles.dropdownLink}>
                    Festival
                  </Link>
                </li>
                <li>
                  <Link to="/men/all/tops" className={styles.dropdownLink}>
                    Tops
                  </Link>
                </li>
                <li>
                  <Link to="/men/all/bottoms" className={styles.dropdownLink}>
                    Bottoms
                  </Link>
                </li>
                <li>
                  <Link to="/men/all/fullbody" className={styles.dropdownLink}>
                    Full-Body
                  </Link>
                </li>
                <li>
                  <Link to="/men/all/shoes" className={styles.dropdownLink}>
                    Shoes
                  </Link>
                </li>
                <li>
                  <Link to="/men/all/accessories" className={styles.dropdownLink}>
                    Bags and accessories
                  </Link>
                </li>
              </ul>
            </li>
            <li className={styles.sideItem}>
              <Link to="/women/all" className={`${styles.dropdownLink}`}>
                Women
              </Link>
              <ul className={styles.dropdown}>
                <li>
                  <Link to="/women/sale" className={`${styles.dropdownLink} ${styles.dropdownLinkSale}`}>
                    Sale
                  </Link>
                </li>
                <li>
                  <Link to="/women/new" className={styles.dropdownLink}>
                    New Collection
                  </Link>
                </li>
                <li>
                  <Link to="/women/basic" className={styles.dropdownLink}>
                    Basic
                  </Link>
                </li>
                <li>
                  <Link to="/women/festival" className={styles.dropdownLink}>
                    Festival
                  </Link>
                </li>
                <li>
                  <Link to="/women/all/tops" className={styles.dropdownLink}>
                    Tops
                  </Link>
                </li>
                <li>
                  <Link to="/women/all/bottoms" className={styles.dropdownLink}>
                    Bottoms
                  </Link>
                </li>
                <li>
                  <Link to="/women/all/fullbody" className={styles.dropdownLink}>
                    Full-Body
                  </Link>
                </li>
                <li>
                  <Link to="/women/all/shoes" className={styles.dropdownLink}>
                    Shoes
                  </Link>
                </li>
                <li>
                  <Link to="/women/all/accessories" className={styles.dropdownLink}>
                    Bags and accessories
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </aside>
        <div className={styles.main}>
          <header className={styles.header}>
            <h2 className={styles.title}>{type ? gender + " " + type : gender + " " + collection}</h2>
            <span className={styles.quantity}>{filteredData.length} products</span>
          </header>
          <div className={styles.cards}>
            {filteredData.map((product) => {
              return <Card key={product.id} id={product.id} name={product.name} price={product.price} discount={product.discount} imageUrl={product.imageUrl} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
