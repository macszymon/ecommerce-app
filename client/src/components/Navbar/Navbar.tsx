import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

import { LiaHeart, LiaSearchSolid, LiaShoppingBagSolid, LiaTimesSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const [isSearch, setIsSearch] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 750) {
        setIsActive(false);
        document.body.classList.remove("block-scroll");
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleHamburgerClick = () => {
    setIsActive(!isActive);
    isActive ? document.body.classList.remove("block-scroll") : document.body.classList.add("block-scroll");
  };

  const handleSearchClick = () => {
    setIsActive(false);
    setIsSearch(!isSearch);
    document.body.classList.remove("block-scroll");
  };

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={`${styles.hamburger} ${isActive ? styles.active : ""}`} onClick={handleHamburgerClick}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
        <Link to="/" className="logo">
          CLOTHES
        </Link>
        <nav className={`${styles.nav} ${isActive ? styles.active : ""}`}>
          <ul className={styles.list}>
            <li className={`${styles.item} ${styles.itemSale}`}>
              Sale
              <ul className={styles.dropdown}>
                <li>
                  <Link to="/men/sale" className={`${styles.dropdownLink} ${styles.dropdownLinkSale}`}>
                    Men
                  </Link>
                </li>
                <li>
                  <Link to="/women/sale" className={`${styles.dropdownLink} ${styles.dropdownLinkSale}`}>
                    Women
                  </Link>
                </li>
              </ul>
            </li>
            <li className={styles.item}>
              New
              <ul className={styles.dropdown}>
                <li>
                  <Link to="men/new" className={styles.dropdownLink}>
                    Men
                  </Link>
                </li>
                <li>
                  <Link to="women/new" className={styles.dropdownLink}>
                    Women
                  </Link>
                </li>
              </ul>
            </li>
            <li className={styles.item}>
              Men
              <ul className={styles.dropdown}>
                <li>
                  <Link to="men/sale" className={`${styles.dropdownLink} ${styles.dropdownLinkSale}`}>
                    Sale
                  </Link>
                </li>
                <li>
                  <Link to="men/new" className={styles.dropdownLink}>
                    New Collection
                  </Link>
                </li>
                <li>
                  <Link to="men/tops" className={styles.dropdownLink}>
                  Tops
                  </Link>
                </li>
                <li>
                  <Link to="men/bottoms" className={styles.dropdownLink}>
                    Bottoms
                  </Link>
                </li>
                <li>
                  <Link to="men/fullbody" className={styles.dropdownLink}>
                    Full-Body
                  </Link>
                </li>
                <li>
                  <Link to="men/shoes" className={styles.dropdownLink}>
                    Shoes
                  </Link>
                </li>
                <li>
                  <Link to="men/accessories" className={styles.dropdownLink}>
                    Bags and accessories
                  </Link>
                </li>
              </ul>
            </li>
            <li className={styles.item}>
              Women
              <ul className={styles.dropdown}>
                <li>
                  <Link to="women/sale" className={`${styles.dropdownLink} ${styles.dropdownLinkSale}`}>
                    Sale
                  </Link>
                </li>
                <li>
                  <Link to="women/new" className={styles.dropdownLink}>
                    New Collection
                  </Link>
                </li>
                <li>
                  <Link to="women/tops" className={styles.dropdownLink}>
                  Tops
                  </Link>
                </li>
                <li>
                  <Link to="women/bottoms" className={styles.dropdownLink}>
                    Bottoms
                  </Link>
                </li>
                <li>
                  <Link to="women/fullbody" className={styles.dropdownLink}>
                    Full-Body
                  </Link>
                </li>
                <li>
                  <Link to="women/shoes" className={styles.dropdownLink}>
                    Shoes
                  </Link>
                </li>
                <li>
                  <Link to="women/accessories" className={styles.dropdownLink}>
                    Bags and accessories
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <div className={`${styles.search} ${isSearch ? styles.active : ""}`}>
          <LiaSearchSolid />
          <input className={styles.input} type="text" placeholder="Search" />
          <button onClick={() => setIsSearch(false)} className={`${styles.iconBtn} ${styles.searchClose}`}>
            <LiaTimesSolid />
          </button>
        </div>
        <div className={styles.icons}>
          <button className={`${styles.iconBtn} ${styles.searchIcon}`} onClick={handleSearchClick}>
            <LiaSearchSolid />
          </button>
          <Link to="favorites" className={styles.iconBtn}>
            <LiaHeart />
            <span>Favorites</span>
          </Link>
          <Link to="cart" className={styles.iconBtn}>
            <LiaShoppingBagSolid />
            <span>Cart</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
