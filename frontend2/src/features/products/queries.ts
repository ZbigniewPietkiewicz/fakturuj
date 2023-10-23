import { gql } from "@apollo/client";

export const QUERY_ALL_PRODUCTS_LIST = gql`
  query getAllProducts {
    getAllProducts {
      id
      name
      price
      currencyCode
      category {
        id
        name
      }
    }
  }
`;

export const QUERY_PRODUCT_BY_ID = gql`
  query getOneProductById($id: Float!) {
    getOneProductById(id: $id) {
      id
      name
      price
      amount
      productionDate
      description
      category {
        id
        name
      }
    }
  }
`;

export const DELETE_PRODUCT_BY_ID = gql`
  mutation deleteProduct($id: Float!) {
    deleteProduct(id: $id)
  }
`;

export const CREATE_PRODUCT = gql`
  mutation createProduct($createProductDTO: CreateProductDTO!) {
    createProduct(createProductDTO: $createProductDTO) {
        name,
        price,
        amount,
        productionDate,
        description,
        category{
            id
        }
    }
  }
`;
