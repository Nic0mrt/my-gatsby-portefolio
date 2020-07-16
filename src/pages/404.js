import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"

const NotFoundPage = () => {
  return (
    <Layout>
      <SEO title="404 not found" />
      <div>Désolé.. votre page n'existe pas</div>
    </Layout>
  )
}

export default NotFoundPage
