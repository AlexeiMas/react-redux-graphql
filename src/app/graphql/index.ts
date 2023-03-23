import {ApolloClient, InMemoryCache} from "@apollo/client"

export const apolloClient = new ApolloClient({
  uri: process.env.REACT_APP_API,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          Page: {
            merge(existing, incoming) {
              return incoming
            }
          }
        }
      }
    }
  }),
})