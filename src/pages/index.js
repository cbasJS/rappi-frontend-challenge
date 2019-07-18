import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import _ from "lodash"
import fetch from "cross-fetch"
import MainLayout from "../layouts/MainLayout"
import SEO from "../components/SEO"
import Section from "../components/Section"
import SectionThumbnails from "../components/SectionThumbnails"
import List from "../components/List"
import Loading from "../components/Loading"
// Config
global.Headers = fetch.Headers

const IndexPage = () => {
  const [data, setData] = useState(null)
  useEffect(() => {
    fetch("https://swapi.co/api/films")
      .then(res => {
        if (res.status >= 400) {
          throw new Error("Bad response from server")
        }
        return res.json()
      })
      .then(response => {
        setData(response)
      })
      .catch(err => {
        console.error(err)
      })
  }, [])
  return (
    <MainLayout>
      <SEO title="Home" />
      <h1>Films List!</h1>
      {data !== null ? (
        <SectionThumbnails>
          {data.results.map((element, index) => {
            return (
              <Section key={index}>
                <div>
                  <strong>
                    Name: <small>{element.title}</small>
                  </strong>
                </div>
                <div>
                  <strong>
                    Episode: <small>{element.episode_id}</small>
                  </strong>
                </div>
                <div>
                  <strong>
                    director name: <small>{element.director}</small>
                  </strong>
                </div>
                <div>
                  <strong>Characters</strong>
                  <List>
                    {element.characters.map((character, index) => {
                      const split = _.split(character, "/", 6)
                      return (
                        <li key={index}>
                          <Link to={`/character/${split[5]}/`}>
                            Character {split[5]}
                          </Link>
                        </li>
                      )
                    })}
                  </List>
                </div>
              </Section>
            )
          })}
        </SectionThumbnails>
      ) : (
        <Loading />
      )}
    </MainLayout>
  )
}

export default IndexPage
