import React from "react"
import Section from "../Section"
import style from "./Pager.module.css"
import PropTypes from "prop-types"

const Pager = ({ previous, next, handleNextPage, handlePreviousPage }) => {
  return (
    <Section>
      <div className={style.pager}>
        <div
          style={{
            color:
              previous !== null
                ? "blue"
                : "rgba(107, 95, 107, 0.611764705882353)",
            cursor: "pointer",
          }}
          onClick={() => {
            previous !== null ? handlePreviousPage() : void 0
          }}
        >
          previous
        </div>
        <div
          style={{
            color:
              next !== null ? "blue" : "rgba(107, 95, 107, 0.611764705882353)",
            cursor: "pointer",
          }}
          onClick={() => {
            next !== null ? handleNextPage() : void 0
          }}
        >
          next
        </div>
      </div>
    </Section>
  )
}

Pager.propTypes = {
  previous: PropTypes.any,
  next: PropTypes.any,
  handleNextPage: PropTypes.func,
  handlePreviousPage: PropTypes.func,
}

export default Pager
