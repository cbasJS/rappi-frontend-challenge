import React from "react"
import { Link } from "gatsby"
import _ from "lodash"
import MainLayout from "../layouts/MainLayout"
import SEO from "../components/SEO"
import Section from "../components/Section"

const Film = ({ pageContext }) => {
  const { data } = pageContext
  return (
    <MainLayout>
      <SEO title={data.title} />
      <h1>{data.title}</h1>
      <Section>
        <div>
          <strong>
            Episode: <small>{data.episode_id}</small>
          </strong>
        </div>
        <div>
          <strong>
            Director name: <small>{data.director}</small>
          </strong>
        </div>
        <div>
          <strong>Characters</strong>
          <ul>
            {data.characters.map((character, index) => {
              const split = _.split(character, "/", 6)
              return (
                <li key={index}>
                  <Link to={`/character/${split[5]}/`}>
                    Character {split[5]}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </Section>
    </MainLayout>
  )
}

export default Film
