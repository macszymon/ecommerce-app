import { Link, useParams } from "react-router-dom";
import { getProduct } from "../../helpers/dataFunctions";

import styles from "./Product.module.css";
import { IoIosArrowDown, IoIosArrowForward, IoIosArrowUp } from "react-icons/io";
import { useEffect, useState } from "react";
import { LiaHeart, LiaShippingFastSolid, LiaShoppingBagSolid, LiaUndoSolid } from "react-icons/lia";
import Slider from "../../components/Slider/Slider";
import { product } from "../../data";
import { useAppContext } from "../../context/appContext";

type Props = {};

function Product({}: Props) {
  const { id = "1" } = useParams();
  const { favorites, addToCart, addToFavorites, deleteFromFavorites } = useAppContext();
  const product: product | undefined = getProduct(parseInt(id));

  const [selectedSize, setSelectedSize] = useState(product?.sizes ? product.sizes[0] : "");
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [isMaterialOpen, setIsMaterialOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    product && setIsFavorite(favorites.includes(product))
  }, [id])

  function handleDescriptionClick() {
    setIsDescriptionOpen((prev) => !prev);
    isMaterialOpen && setIsMaterialOpen(false);
  }

  function handleMaterialClick() {
    setIsMaterialOpen((prev) => !prev);
    isDescriptionOpen && setIsDescriptionOpen(false);
  }

  function handleAddToCart() {
    if (product) {
      addToCart({product: product, size: selectedSize, quantity: 1});
    }
  }

  function handleFavorite() {
    if (product) {
      if (isFavorite) {
        deleteFromFavorites(product);
        setIsFavorite(false);
      } else {
        setIsFavorite(true);
        addToFavorites(product);
      }
    }
  }

  return (
    product && (
      <section className="container">
        <nav className={styles.navigation}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Link to="/">CLOTHES</Link>
              <IoIosArrowForward />
            </li>
            <li className={styles.item}>
              <Link to={`/${product.gender}/all`}>{product.gender}</Link>
              <IoIosArrowForward />
            </li>
            <li className={styles.item}>
              <Link to={`/${product.gender}/all/${product.type}`}>{product.type}</Link>
              <IoIosArrowForward />
            </li>
            <li className={styles.item}>
              <span className={styles.navigationName}>{product.name}</span>
            </li>
          </ul>
        </nav>
        <div className={styles.main}>
          <img className={styles.image} src={product.imageUrl} alt="" />
          <div className={styles.info}>
            {product.discount ? <h4 className={styles.sale}>Sale {product.discount * 100}%</h4> : ""}
            <h2 className={styles.name}>{product.name}</h2>
            <div className={styles.prices}>
              <span className={`${styles.price} ${product.discount ? styles.priceDiscount : ""}`}>{product.discount ? (product.price - product.price * product.discount).toFixed(2) : product.price} PLN</span>
              {product.discount ? <span className={styles.priceOld}>{product.price} PLN</span> : ""}
            </div>
            {product.sizes && (
              <div className={styles.sizes}>
                <h5 className={styles.sizesTitle}>Size</h5>
                {product.sizes ? (
                  <ul className={styles.sizesList}>
                    {product.sizes.map((size, index) => {
                      return (
                        <li key={index}>
                          <button onClick={() => setSelectedSize(size)} className={`${styles.sizeBtn} ${size === selectedSize ? styles.sizeBtnActive : ""}`}>
                            {size}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  ""
                )}
              </div>
            )}
            <div className={styles.actions}>
              <button onClick={() => handleAddToCart()} className={styles.btnCart}>
                <LiaShoppingBagSolid />
                Add to cart
              </button>
              <button onClick={() => handleFavorite()} className={`${styles.btnFavorites} ${isFavorite ? styles.btnFavoritesActive : ""}`}>
                <LiaHeart />
              </button>
            </div>
            <ul className={styles.policies}>
              <li className={styles.policy}>
                <LiaShippingFastSolid />
                <span>
                  <strong>Free delivery</strong>
                  from 150 PLN for all fully valued products
                </span>
              </li>
              <li className={styles.policy}>
                <LiaUndoSolid />
                <span>
                  <strong>Free returns</strong>
                  within 30 days of receipt of shipment
                </span>
              </li>
            </ul>
          </div>
          <ul className={styles.details}>
            <li className={styles.detail}>
              <button onClick={() => handleDescriptionClick()}>Description {isDescriptionOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</button>
              <span className={`${isDescriptionOpen ? styles.active : ""}`}>
                <strong>{product?.name}</strong>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis ullam iste perferendis! Expedita ratione in earum quisquam recusandae ipsum magnam qui quae deserunt ipsa quas tenetur delectus, culpa dolorum quaerat aperiam minus ea cum quibusdam dolore dignissimos sapiente nostrum nobis.
              </span>
            </li>
            <li className={styles.detail}>
              <button onClick={() => handleMaterialClick()}>Material and care {isMaterialOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</button>
              <span className={`${isMaterialOpen ? styles.active : ""}`}>100% COTTON</span>
            </li>
          </ul>
        </div>
        <div className={styles.cards}>
          <h4 className={styles.cardsHeader}>You may also like</h4>
          <Slider gender={product.gender} collection="all" id={product.id} />
        </div>
      </section>
    )
  );
}

export default Product;
