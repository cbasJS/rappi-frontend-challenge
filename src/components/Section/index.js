import React from "react"
import style from "./Section.module.css"
import PropTypes from "prop-types"

const Section = ({ children }) => {
  return (
    <section className={style.section}>
      <div className={style.wrapper}>{children}</div>
    </section>
  )
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Section
