import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import { useQuery } from "@apollo/react-hooks"
import gql from "graphql-tag"

const ArticlesPage = () => {
  const { data } = useQuery(gql`
    {
      articles {
        id
        title
      }
    }
  `)

  const articles = data?.articles || []

  return (
    <Layout>
      <h1>useQuery</h1>
      <h2>Articles</h2>
      {articles.map(a => (
        <article key={a.id}>
          <h1>{a.title}</h1>
        </article>
      ))}
      <Link to="/">useStaticQuery</Link>
    </Layout>
  )
}

export default ArticlesPage
