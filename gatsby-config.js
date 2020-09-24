require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Nicolas MARET, Développeur Fullstack React.JS et Node.JS sur Lyon`,
    description: `Je suis Nicolas MARET Développeur Web Fullstack React.JS et Node.JS basé à Lyon`,
    author: `@nicolasmaret`,
    siteUrl: `https://nicolasmaret.fr/`,
  },
  plugins: [
    "gatsby-plugin-robots-txt",
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdown-pages`,
        name: `markdown-pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/projects`,
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
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Portfolio Nicolas MARET`,
        short_name: `Nicolas MARET`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/laptop-code-solid.svg`, // This path is relative to the root of the site.
      },
    },

    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-178493241-1",
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
