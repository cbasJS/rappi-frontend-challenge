import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import _ from "lodash"
import fetch from "cross-fetch"
import MainLayout from "../layouts/MainLayout"
import SEO from "../components/SEO"
import Section from "../components/Section"
import Loading from "../components/Loading"
import SectionThumbnails from "../components/SectionThumbnails"
import Pager from "../components/Pager"
// Config
global.Headers = fetch.Headers

const IndexPage = () => {
  const [data, setData] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)
  useEffect(() => {
    fetch(`https://swapi.co/api/people/?page=${pageNumber}`)
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
  }, [pageNumber])
  let valid
  valid = data !== null ? true : false
  const handleNextPage = () => {
    setPageNumber(pageNumber + 1)
  }

  const handlePreviousPage = () => {
    setPageNumber(pageNumber - 1)
  }
  return (
    <MainLayout>
      <SEO title="People list" />
      {valid ? (
        <React.Fragment>
          <h1>People list</h1>
          <Pager
            previous={data.previous}
            next={data.next}
            handleNextPage={handleNextPage}
            handlePreviousPage={handlePreviousPage}
          />
          <SectionThumbnails>
            {data.results.map((element, index) => {
              return (
                <Section key={index}>
                  <div>Name: {element.name}</div>
                  <div>Eye color: {element.eye_color}</div>
                  <div>Gender: {element.gender}</div>

                  <div>
                    Films
                    <ul>
                      {element.films.map((film, index) => {
                        const split = _.split(film, "/", 6)
                        return (
                          <li key={index}>
                            <Link to={`/film/${split[5]}/`}>
                              Film {split[5]}
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </Section>
              )
            })}
          </SectionThumbnails>
        </React.Fragment>
      ) : (
        <Loading />
      )}
    </MainLayout>
  )
}

// Nombre
// Color de Ojos
// Género
// Lista de Films asociados al Personaje(Nombres).
// Considere que cada nombre del film asociado al personaje puede mostrar el Texto con que inicia el film(Mismo comportamiento a como está el requerimiento anterior)

export default IndexPage
