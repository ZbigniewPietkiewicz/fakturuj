import { gql } from "@apollo/client";

export const GET_PRODUCTS_QUERY = gql`
  query {
    getAllProducts {
      id
      name
    }
  }
`;
