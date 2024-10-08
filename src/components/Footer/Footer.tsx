import styles from "./Footer.module.css";

import { FaFacebookSquare, FaInstagram, FaPinterest, FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className={styles.main}>
      <div className={styles.wrapper}>
        <Link to="/" className="logo">
          CLOTHES
        </Link>
        <ul className={styles.list}>
          <li className={styles.itemMain}>Buy online</li>
          <li className={styles.item}>
            <Link to="/men/all">Men</Link>
          </li>
          <li className={styles.item}>
            <Link to="/women/all">Women</Link>
          </li>
        </ul>
        <ul className={styles.list}>
          <li className={styles.itemMain}>Company</li>
          <li className={styles.item}>
            <Link to="/faq">FAQ</Link>
          </li>
        </ul>
      </div>
      <div className={styles.socials}>
        <a className={styles.icon} target="_blank" href="https://www.facebook.com/">
          <FaFacebookSquare />
        </a>
        <a className={styles.icon} target="_blank" href="https://www.tiktok.com/">
          <FaTiktok />
        </a>
        <a className={styles.icon} target="_blank" href="https://www.instagram.com/">
          <FaInstagram />
        </a>
        <a className={styles.icon} target="_blank" href="https://pinterest.com/">
          <FaPinterest />
        </a>
      </div>
      <p className={styles.attribution}>
        All images from{" "}
        <a href="https://www.freepik.com/" target="_blank">
          freepik.com
        </a>
      </p>
      <p className={styles.attribution}>Made by Szymon Makiewicz</p>
    </footer>
  );
}

export default Footer;
