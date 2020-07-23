import fetch from "isomorphic-fetch"
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client"

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "https://gatsby-dynamic.herokuapp.com/graphql",
    fetch,
  }),
})
