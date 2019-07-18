import React from "react"
import Emoji from "../Emoji"
import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <h5 className={styles.h5}>
          © {new Date().getFullYear()}, Made with a lot of{" "}
          <Emoji label="sheep" symbol="💓" />
        </h5>
      </div>
    </footer>
  )
}

export default Footer
