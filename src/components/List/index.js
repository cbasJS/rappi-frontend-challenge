import React from "react"
import style from "./List.module.css"
import PropTypes from "prop-types"

const List = ({ children }) => {
  return <ul className={style.list}>{children}</ul>
}

List.propTypes = {
  children: PropTypes.node,
}

export default List
