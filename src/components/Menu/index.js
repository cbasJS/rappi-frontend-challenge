import React from "react"
import { Link } from "gatsby"
import Section from "../Section"
import style from "./Menu.module.css"

const Menu = () => {
  return (
    <Section>
      <div className={style.menu}>
        <div style={{ marginLeft: "1rem" }}>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/people-list">People list</Link>
        </div>
      </div>
    </Section>
  )
}

export default Menu
