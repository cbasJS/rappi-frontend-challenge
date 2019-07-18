const path = require("path")
const fetch = require("cross-fetch")
const _ = require("lodash")

module.exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  let starWarsPeople = []
  let starWarsFilms = []

  for (var x = 1; x <= 88; x++) {
    await fetch(`https://swapi.co/api/people/${x}`)
      .then(res => {
        if (res.status >= 400) {
          console.log("Bad response from server")
          // throw new Error("Bad response from server")
        }
        return res.json()
      })
      .then(response => {
        starWarsPeople.push(response)
      })
      .catch(err => {
        console.error(err)
      })
  }

  for (var x = 1; x <= 7; x++) {
    await fetch(`https://swapi.co/api/films/${x}`)
      .then(res => {
        if (res.status >= 400) {
          console.log("Bad response from server")
          // throw new Error("Bad response from server")
        }
        return res.json()
      })
      .then(response => {
        starWarsFilms.push(response)
      })
      .catch(err => {
        console.error(err)
      })
  }

  starWarsPeople.forEach(element => {
    const split = _.split(element.url, "/", 6)
    createPage({
      path: `/character/${split[5]}/`,
      component: path.resolve("./src/templates/character.js"),
      context: { data: element },
    })
  })

  starWarsFilms.forEach(element => {
    const split = _.split(element.url, "/", 6)
    createPage({
      path: `/film/${split[5]}/`,
      component: path.resolve("./src/templates/film.js"),
      context: { data: element },
    })
  })
}

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
