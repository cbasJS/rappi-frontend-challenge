import React from "react"
import style from "./SectionThumbnails.module.css"
import PropTypes from "prop-types"

const Section = ({ children }) => {
  return (
    <section className={style.sectionThumbnails}>
      <div className={style.wrapper}>{children}</div>
    </section>
  )
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Section
