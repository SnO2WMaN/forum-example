import gql from "graphql-tag";

export const createPost = gql`
  mutation createPost($content: String!, $parent: ID) {
    createPost(content: $content, parent: $parent) {
      id
      content
      createdAt
    }
  }
`;
