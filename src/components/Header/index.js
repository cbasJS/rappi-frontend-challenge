import React from "react"
import { Link } from "gatsby"

import style from "./Header.module.css"

import PropTypes from "prop-types"

const Header = ({ siteTitle }) => (
  <header className={style.header}>
    <div className={style.wrapper}>
      <h1 className={style.h1}>
        <Link className={style.a} to="/">
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
