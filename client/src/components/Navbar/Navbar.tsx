import styles from "./Navbar.module.css";


import { useEffect, useState } from "react";
import { LiaHeart, LiaSearchSolid, LiaShoppingBagSolid, LiaTimesSolid } from "react-icons/lia";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/appContext";

function Navbar() {
  const { cart, favorites } = useAppContext();

  const location = useLocation();
  const navigate = useNavigate();

  const [isActive, setIsActive] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [input, setInput] = useState("");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 750) {
        setIsActive(false);
        document.body.classList.remove("block-scroll");
      }
    };
    window.addEventListener("resize", handleResize);
    setIsActive(false);
    setIsSearch(false);
    document.body.classList.remove("block-scroll");
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [location]);

  const handleHamburgerClick = () => {
    setIsActive(!isActive);
    isActive ? document.body.classList.remove("block-scroll") : document.body.classList.add("block-scroll");
  };

  const handleSearchClick = () => {
    setIsActive(false);
    setIsSearch(!isSearch);
    document.body.classList.remove("block-scroll");
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/search/" + input);
    setInput("");
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
                  <Link to="/men/new" className={styles.dropdownLink}>
                    Men
                  </Link>
                </li>
                <li>
                  <Link to="/women/new" className={styles.dropdownLink}>
                    Women
                  </Link>
                </li>
              </ul>
            </li>
            <li className={styles.item}>
              Men
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
            <li className={styles.item}>
              Women
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
        </nav>
        <div className={`${styles.search} ${isSearch ? styles.active : ""}`}>
          <LiaSearchSolid />
          <form className={styles.searchForm} onSubmit={(e) => handleSearch(e)} action="">
            <input className={styles.input} value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="Search" />
          </form>
          <button onClick={() => setIsSearch(false)} className={`${styles.iconBtn} ${styles.searchClose}`}>
            <LiaTimesSolid />
          </button>
        </div>
        <div className={styles.icons}>
          <button className={`${styles.iconBtn} ${styles.searchIcon}`} onClick={handleSearchClick}>
            <LiaSearchSolid />
          </button>
          <Link to="/favorites" className={styles.iconBtn}>
            <LiaHeart />
            <span className={styles.iconName}>Favorites</span>
            {favorites && favorites?.length > 0 && <span className={styles.quantity}>{favorites.length}</span>}
          </Link>
          <Link to="/cart" className={styles.iconBtn}>
            <LiaShoppingBagSolid />
            <span className={styles.iconName}>Cart</span>
            {cart && cart.length > 0 && <span className={styles.quantity}>{cart.length}</span>}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
