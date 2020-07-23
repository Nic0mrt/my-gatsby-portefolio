require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Nicolas MARET, Développeur Web React sur Lyon`,
    description: `Je suis Nicolas MARET Développeur Web Fullstack React et NodeJS basé à Lyon`,
    author: `@nicolasmaret`,
    siteUrl: `https://nicolas-maret-portefolio.netlify.app/`,
  },
  plugins: [
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: "https://my-strapi-portefolio-blog.herokuapp.com",
        contentTypes: [
          // List of the Content Types you want to be able to request from Gatsby.
          `article`,
          `category`,
        ],
      },
    },

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/laptop-code-solid.svg`, // This path is relative to the root of the site.
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}