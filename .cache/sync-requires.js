const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/nicolas/Documents/Sites/my-gatsby-portefolio/frontend/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/nicolas/Documents/Sites/my-gatsby-portefolio/frontend/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/nicolas/Documents/Sites/my-gatsby-portefolio/frontend/src/pages/About.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/Users/nicolas/Documents/Sites/my-gatsby-portefolio/frontend/src/pages/Blog.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/nicolas/Documents/Sites/my-gatsby-portefolio/frontend/src/pages/Contact.js"))),
  "component---src-pages-cv-js": hot(preferDefault(require("/Users/nicolas/Documents/Sites/my-gatsby-portefolio/frontend/src/pages/Cv.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/nicolas/Documents/Sites/my-gatsby-portefolio/frontend/src/pages/index.js"))),
  "component---src-pages-projects-js": hot(preferDefault(require("/Users/nicolas/Documents/Sites/my-gatsby-portefolio/frontend/src/pages/Projects.js"))),
  "component---src-templates-article-js": hot(preferDefault(require("/Users/nicolas/Documents/Sites/my-gatsby-portefolio/frontend/src/templates/article.js")))
}

