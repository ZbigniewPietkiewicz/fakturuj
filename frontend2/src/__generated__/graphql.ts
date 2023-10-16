/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
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
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  productionDate: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createCategory: Category;
  createProduct: Product;
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
