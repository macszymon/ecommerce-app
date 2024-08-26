import styles from "./Banner.module.css";

import { Link } from "react-router-dom";

type Props = {
  image: string;
  collection: string;
};

function Banner({ collection, image }: Props) {
  return (
    <section className={styles.main}>
      <img className={styles.img} src={image} alt="" />
      <h3 className={styles.title}>{collection}</h3>
      <div className={styles.buttons}>
        <Link to={"/men/" + collection} className="btn btn--secondary">
          For Him
        </Link>
        <Link to={"/women/" + collection} className="btn btn--secondary">
          For Her
        </Link>
      </div>
    </section>
  );
}

export default Banner;
