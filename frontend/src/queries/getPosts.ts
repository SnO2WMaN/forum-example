import gql from "graphql-tag";

export const getPosts = gql`
  query getPosts {
    posts {
      id
      content
      createdAt
      parent {
        id
        createdAt
      }
      children {
        id
      }
    }
  }
`;
