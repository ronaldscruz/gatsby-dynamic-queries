require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "development"}`,
})

console.log(process.env.API_URL)
console.log(process.env.STRAPI_USER)
console.log(process.env.STRAPI_PASS)

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.API_URL || `http://localhost:1337`,
        contentTypes: [`article`],
        loginData: {
          identifier: process.env.STRAPI_USER,
          password: process.env.STRAPI_PASS,
        },
        queryLimit: 1000,
      },
    },
  ],
}
