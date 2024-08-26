import styles from "./Faqs.module.css";

import { faqs } from "../../data";
import Faq from "./Faq";

function Faqs() {
  return (
    <section className="container">
      <h2 className={styles.title}>FAQ - Frequently Asked Questions</h2>
      <ul className={styles.faqs}>
        {faqs.map((faq, index) => {
          return <Faq key={index} index={index} question={faq.question} answer={faq.answer} />;
        })}
      </ul>
    </section>
  );
}

export default Faqs;
