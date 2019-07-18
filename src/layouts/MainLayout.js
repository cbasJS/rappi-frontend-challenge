import React from "react"

// site metadata
import { useSiteMetadata } from "../hooks/useSiteMetadata"

// components
import Header from "../components/Header"
import Footer from "../components/Footer"
import Menu from "../components/Menu"

// styles
import "../styles/normalize.css" // reset styles
import "../styles/extend-rules.css"
import style from "./MainLayout.module.css"

import PropTypes from "prop-types"

const MainLayout = ({ children }) => {
  const { title } = useSiteMetadata()

  return (
    <div className={style.mainLayout}>
      <Header siteTitle={title}></Header>
      <Menu />
      <main className={style.main}>
        <div className={style.wrapper}>{children}</div>
      </main>
      <Footer />
    </div>
  )
}

MainLayout.defaultProps = {
  currentPath: "/",
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainLayout
