import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost";
import fetch from "isomorphic-fetch";

function createCache() {
  return new InMemoryCache();
}

function createLink() {
  return new HttpLink({
    uri: "http://localhost:4000/graphql",
    credentials: "same-origin",
    fetch,
  });
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, import/prefer-default-export
export function createApolloClient() {
  return new ApolloClient({
    link: createLink(),
    cache: createCache(),
  });
}
