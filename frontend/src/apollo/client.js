import fetch from "isomorphic-fetch"
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client"

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "http://localhost:1337/graphql",
    fetch,
  }),
})
