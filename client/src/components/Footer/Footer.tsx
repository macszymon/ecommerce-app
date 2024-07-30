import { FaFacebookSquare, FaInstagram, FaPinterest, FaTiktok } from "react-icons/fa";
import styles from "./Footer.module.css";

type Props = {};

function Footer({}: Props) {
  return (
    <footer className={styles.main}>
      <div className={styles.wrapper}>
        <a className="logo" href="">
          CLOTHES
        </a>
        <ul className={styles.list}>
          <li className={styles.itemMain}>Buy online</li>
          <li className={styles.item}>
            <a href="">Men</a>
          </li>
          <li className={styles.item}>
            <a href="">Women</a>
          </li>
        </ul>
        <ul className={styles.list}>
          <li className={styles.itemMain}>Company</li>
          <li className={styles.item}>
            <a href="">About Us</a>
          </li>
          <li className={styles.item}>
            <a href="">Contact</a>
          </li>
          <li className={styles.item}>
            <a href="">FAQ</a>
          </li>
        </ul>
      </div>
      <div className={styles.socials}>
        <a className={styles.icon} href="">
          <FaFacebookSquare />
        </a>
        <a className={styles.icon} href="">
          <FaTiktok />
        </a>
        <a className={styles.icon} href="">
          <FaInstagram />
        </a>
        <a className={styles.icon} href="">
          <FaPinterest />
        </a>
      </div>
      <p className={styles.attribution}>Made by Szymon Makiewicz</p>
    </footer>
  );
}

export default Footer;
