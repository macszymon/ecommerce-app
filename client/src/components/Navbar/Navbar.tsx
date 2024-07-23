import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

import { LiaHeart, LiaSearchSolid, LiaShoppingBagSolid, LiaTimesSolid } from "react-icons/lia";

function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const [isSearch, setIsSearch] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if(window.innerWidth >= 750) {
        setIsActive(false);
        document.body.classList.remove("block-scroll")
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

  const handleMouseEnter = () => {
    if (window.innerWidth >= 750) {
      document.body.classList.add("block-scroll");
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 750) {
      document.body.classList.remove("block-scroll");
    }
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
        <div className={`${styles.search} ${isSearch ? styles.active : ""}`}>
          <LiaSearchSolid />
          <input className={styles.input} type="text" placeholder="Search" />
          <button onClick={() => setIsSearch(false)} className={`${styles.iconBtn} ${styles.searchClose}`}>
            <LiaTimesSolid />
          </button>
        </div>
        <a className="logo" href="">
          CLOTHES
        </a>
        <div className={styles.icons}>
          <button className={`${styles.iconBtn} ${styles.searchIcon}`} onClick={handleSearchClick}>
            <LiaSearchSolid />
          </button>
          <a href="" className={styles.iconBtn}>
            <LiaHeart />
            <span>Favorites</span>
          </a>
          <a href="" className={styles.iconBtn}>
            <LiaShoppingBagSolid />
            <span>Cart</span>
          </a>
        </div>
      </div>
      <nav className={`${styles.nav} ${isActive ? styles.active : ""}`}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="" className={`${styles.link} ${styles.linkSale}`}>
              Sale
            </a>
            <ul onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={styles.dropdown}>
              <li>
                <a className={`${styles.dropdownLink} ${styles.dropdownLinkSale}`} href="">
                  Men
                </a>
              </li>
              <li>
                <a className={`${styles.dropdownLink} ${styles.dropdownLinkSale}`} href="">
                  Women
                </a>
              </li>
              <li>
                <a className={`${styles.dropdownLink} ${styles.dropdownLinkSale}`} href="">
                  Boy
                </a>
              </li>
              <li>
                <a className={`${styles.dropdownLink} ${styles.dropdownLinkSale}`} href="">
                  Girl
                </a>
              </li>
            </ul>
          </li>
          <li className={styles.item}>
            <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="" className={styles.link}>
              Men
            </a>
            <ul onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={styles.dropdown}>
              <li>
                <a className={`${styles.dropdownLink} ${styles.dropdownLinkSale}`} href="">
                  Sale
                </a>
              </li>
              <li>
                <a className={styles.dropdownLink} href="">
                  New Collection
                </a>
              </li>
              <li>
                <a className={styles.dropdownLink} href="">
                  Clothes
                </a>
              </li>
              <li>
                <a className={styles.dropdownLink} href="">
                  Shoes
                </a>
              </li>
              <li>
                <a className={styles.dropdownLink} href="">
                  Bags and accessories
                </a>
              </li>
            </ul>
          </li>
          <li className={styles.item}>
            <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="" className={styles.link}>
              Women
            </a>
            <ul onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={styles.dropdown}>
              <li>
                <a className={`${styles.dropdownLink} ${styles.dropdownLinkSale}`} href="">
                  Sale
                </a>
              </li>
              <li>
                <a className={styles.dropdownLink} href="">
                  New Collection
                </a>
              </li>
              <li>
                <a className={styles.dropdownLink} href="">
                  Clothes
                </a>
              </li>
              <li>
                <a className={styles.dropdownLink} href="">
                  Shoes
                </a>
              </li>
              <li>
                <a className={styles.dropdownLink} href="">
                  Bags and accessories
                </a>
              </li>
            </ul>
          </li>
          <li className={styles.item}>
            <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="" className={styles.link}>
              Boy
            </a>
            <ul onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={styles.dropdown}>
              <li>
                <a className={`${styles.dropdownLink} ${styles.dropdownLinkSale}`} href="">
                  Sale
                </a>
              </li>
              <li>
                <a className={styles.dropdownLink} href="">
                  New Collection
                </a>
              </li>
              <li>
                <a className={styles.dropdownLink} href="">
                  Clothes
                </a>
              </li>
              <li>
                <a className={styles.dropdownLink} href="">
                  Shoes
                </a>
              </li>
              <li>
                <a className={styles.dropdownLink} href="">
                  Bags and accessories
                </a>
              </li>
            </ul>
          </li>
          <li className={styles.item}>
            <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="" className={styles.link}>
              Girl
            </a>
            <ul onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={styles.dropdown}>
              <li>
                <a className={`${styles.dropdownLink} ${styles.dropdownLinkSale}`} href="">
                  Sale
                </a>
              </li>
              <li>
                <a className={styles.dropdownLink} href="">
                  New Collection
                </a>
              </li>
              <li>
                <a className={styles.dropdownLink} href="">
                  Clothes
                </a>
              </li>
              <li>
                <a className={styles.dropdownLink} href="">
                  Shoes
                </a>
              </li>
              <li>
                <a className={styles.dropdownLink} href="">
                  Bags and accessories
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
