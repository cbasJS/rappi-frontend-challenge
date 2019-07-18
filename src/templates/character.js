import React from "react"
import { Link } from "gatsby"
import _ from "lodash"
import MainLayout from "../layouts/MainLayout"
import SEO from "../components/SEO"
import Section from "../components/Section"

const Character = ({ pageContext }) => {
  const { data } = pageContext
  return (
    <MainLayout>
      <SEO title={data.name} />
      <h1>{data.name}</h1>
      <Section>
        <div>
          <strong>
            Eye color: <small>{data.eye_color}</small>
          </strong>
        </div>
        <div>
          <strong>
            Gender: <small>{data.gender}</small>
          </strong>
        </div>
        <div>
          <strong>Films</strong>
          <ul>
            {data.films.map((film, index) => {
              const split = _.split(film, "/", 6)
              return (
                <li key={index}>
                  <Link to={`/film/${split[5]}/`}>Film {split[5]}</Link>
                </li>
              )
            })}
          </ul>
        </div>
      </Section>
    </MainLayout>
  )
}

export default Character
