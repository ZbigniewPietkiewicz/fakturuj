import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Category = {
  __typename?: 'Category';
  id: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  products?: Maybe<Array<Product>>;
};

export type CreateCategoryDto = {
  name: Scalars['String']['input'];
};

export type CreateProductDto = {
  amount: Scalars['Float']['input'];
  categoryId: Scalars['Float']['input'];
  currencyCode?: Scalars['String']['input'];
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  productionDate: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createCategory: Category;
  createProduct: Product;
  deleteCategory: Scalars['Boolean']['output'];
  deleteProduct: Scalars['Boolean']['output'];
  updateCategory: Category;
  updateProduct: Product;
};


export type MutationCreateCategoryArgs = {
  createCategoryDTO: CreateCategoryDto;
};


export type MutationCreateProductArgs = {
  createProductDTO: CreateProductDto;
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['Float']['input'];
};


export type MutationDeleteProductArgs = {
  id: Scalars['Float']['input'];
};


export type MutationUpdateCategoryArgs = {
  updateCategoryDTO: UpdateCategoryDto;
};


export type MutationUpdateProductArgs = {
  updateProductDTO: UpdateProductDto;
};

export type Product = {
  __typename?: 'Product';
  amount: Scalars['Float']['output'];
  category: Category;
  currencyCode: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  productionDate: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  getAllCategories: Array<Category>;
  getAllProducts: Array<Product>;
  getOneCategoryById: Category;
  getOneProductById: Product;
};


export type QueryGetOneCategoryByIdArgs = {
  id: Scalars['Float']['input'];
};


export type QueryGetOneProductByIdArgs = {
  id: Scalars['Float']['input'];
};

export type UpdateCategoryDto = {
  id: Scalars['Float']['input'];
  name: Scalars['String']['input'];
};

export type UpdateProductDto = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  categoryId?: InputMaybe<Scalars['Float']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Float']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  productionDate?: InputMaybe<Scalars['String']['input']>;
};

export type GetAllProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllProductsQuery = { __typename?: 'Query', getAllProducts: Array<{ __typename?: 'Product', id: number, name: string, price: number, currencyCode: string, category: { __typename?: 'Category', id: number, name: string } }> };

export type GetOneProductByIdQueryVariables = Exact<{
  id: Scalars['Float']['input'];
}>;


export type GetOneProductByIdQuery = { __typename?: 'Query', getOneProductById: { __typename?: 'Product', id: number, name: string, price: number, amount: number, productionDate: string, description: string, category: { __typename?: 'Category', id: number, name: string } } };

export type DeleteProductMutationVariables = Exact<{
  id: Scalars['Float']['input'];
}>;


export type DeleteProductMutation = { __typename?: 'Mutation', deleteProduct: boolean };

export type CreateProductMutationVariables = Exact<{
  createProductDTO: CreateProductDto;
}>;


export type CreateProductMutation = { __typename?: 'Mutation', createProduct: { __typename?: 'Product', name: string, price: number, amount: number, productionDate: string, description: string, category: { __typename?: 'Category', id: number } } };


export const GetAllProductsDocument = gql`
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

/**
 * __useGetAllProductsQuery__
 *
 * To run a query within a React component, call `useGetAllProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllProductsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllProductsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllProductsQuery, GetAllProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllProductsQuery, GetAllProductsQueryVariables>(GetAllProductsDocument, options);
      }
export function useGetAllProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllProductsQuery, GetAllProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllProductsQuery, GetAllProductsQueryVariables>(GetAllProductsDocument, options);
        }
export type GetAllProductsQueryHookResult = ReturnType<typeof useGetAllProductsQuery>;
export type GetAllProductsLazyQueryHookResult = ReturnType<typeof useGetAllProductsLazyQuery>;
export type GetAllProductsQueryResult = Apollo.QueryResult<GetAllProductsQuery, GetAllProductsQueryVariables>;
export const GetOneProductByIdDocument = gql`
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

/**
 * __useGetOneProductByIdQuery__
 *
 * To run a query within a React component, call `useGetOneProductByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOneProductByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOneProductByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetOneProductByIdQuery(baseOptions: Apollo.QueryHookOptions<GetOneProductByIdQuery, GetOneProductByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOneProductByIdQuery, GetOneProductByIdQueryVariables>(GetOneProductByIdDocument, options);
      }
export function useGetOneProductByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOneProductByIdQuery, GetOneProductByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOneProductByIdQuery, GetOneProductByIdQueryVariables>(GetOneProductByIdDocument, options);
        }
export type GetOneProductByIdQueryHookResult = ReturnType<typeof useGetOneProductByIdQuery>;
export type GetOneProductByIdLazyQueryHookResult = ReturnType<typeof useGetOneProductByIdLazyQuery>;
export type GetOneProductByIdQueryResult = Apollo.QueryResult<GetOneProductByIdQuery, GetOneProductByIdQueryVariables>;
export const DeleteProductDocument = gql`
    mutation deleteProduct($id: Float!) {
  deleteProduct(id: $id)
}
    `;
export type DeleteProductMutationFn = Apollo.MutationFunction<DeleteProductMutation, DeleteProductMutationVariables>;

/**
 * __useDeleteProductMutation__
 *
 * To run a mutation, you first call `useDeleteProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProductMutation, { data, loading, error }] = useDeleteProductMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteProductMutation(baseOptions?: Apollo.MutationHookOptions<DeleteProductMutation, DeleteProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteProductMutation, DeleteProductMutationVariables>(DeleteProductDocument, options);
      }
export type DeleteProductMutationHookResult = ReturnType<typeof useDeleteProductMutation>;
export type DeleteProductMutationResult = Apollo.MutationResult<DeleteProductMutation>;
export type DeleteProductMutationOptions = Apollo.BaseMutationOptions<DeleteProductMutation, DeleteProductMutationVariables>;
export const CreateProductDocument = gql`
    mutation createProduct($createProductDTO: CreateProductDTO!) {
  createProduct(createProductDTO: $createProductDTO) {
    name
    price
    amount
    productionDate
    description
    category {
      id
    }
  }
}
    `;
export type CreateProductMutationFn = Apollo.MutationFunction<CreateProductMutation, CreateProductMutationVariables>;

/**
 * __useCreateProductMutation__
 *
 * To run a mutation, you first call `useCreateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductMutation, { data, loading, error }] = useCreateProductMutation({
 *   variables: {
 *      createProductDTO: // value for 'createProductDTO'
 *   },
 * });
 */
export function useCreateProductMutation(baseOptions?: Apollo.MutationHookOptions<CreateProductMutation, CreateProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProductMutation, CreateProductMutationVariables>(CreateProductDocument, options);
      }
export type CreateProductMutationHookResult = ReturnType<typeof useCreateProductMutation>;
export type CreateProductMutationResult = Apollo.MutationResult<CreateProductMutation>;
export type CreateProductMutationOptions = Apollo.BaseMutationOptions<CreateProductMutation, CreateProductMutationVariables>;