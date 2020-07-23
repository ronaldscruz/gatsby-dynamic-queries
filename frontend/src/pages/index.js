import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      allStrapiArticle {
        edges {
          node {
            id
            title
          }
        }
      }
    }
  `)

  const articles = data?.allStrapiArticle?.edges || []

  return (
    <Layout>
      <h1>useStaticQuery</h1>
      <h2>Articles</h2>
      {articles.map(({ node: article }) => (
        <article key={article.id}>
          <h1>{article.title}</h1>
        </article>
      ))}
      <Link to="/articles">useQuery</Link>
    </Layout>
  )
}

export default IndexPage
