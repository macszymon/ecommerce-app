import { useState } from "react"
import styles from "./Faqs.module.css"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"

type Props = {
    question:string;
    answer: string;
    index: number;
}

function Faq({question, answer, index}: Props) {
    const [isOpen, setIsOpen] = useState(false)

  return (
    <li className={styles.faq}>
    <button onClick={() => setIsOpen(prev => !prev)}>{index + 1}. {question} {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</button>
    <span className={`${isOpen ? styles.active : ""}`}>
      {answer}
    </span>
  </li>
  )
}

export default Faq