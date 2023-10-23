import React, { useEffect } from "react";
import { Dispatch } from "redux";
import { setProductsList, setSelectedProductId } from "../reducer/productsReducer";
import { GetAllProductsQuery, useDeleteProductMutation } from "../../../generated/types";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { createSelector } from "reselect";
import { getProductList } from "../selector/productsSelector";
import ProductsService from "../ProductsService";
import { useMutation, useQuery } from "@apollo/client";
import { DELETE_PRODUCT_BY_ID } from "../queries";
import { json } from "stream/consumers";


const setProductsListDispatch = (dispatch: Dispatch) => ({
  setProductsList: (productList: GetAllProductsQuery) =>
    dispatch(setProductsList(productList)),
});
const setSelectedProductIdDispatch = (dispatch: Dispatch) => ({
  setSelectedProductId: (id: number) =>
    dispatch(setSelectedProductId(id)),
});
const productListSelector = createSelector(getProductList, (productsList) => ({
  productsList,
}));

const ProductList = () => {
  const { loading, error, data } = ProductsService.getAllProducts();
  const { setProductsList } = setProductsListDispatch(useAppDispatch());
  const { setSelectedProductId } = setSelectedProductIdDispatch(useAppDispatch())
  const { productsList } = useAppSelector(productListSelector);
  const [deleteProductById] = ProductsService.useDeleteProductMutation({variables:{id:-1}})

  useEffect(() => {
    if (data) {
      setProductsList(data);
    }
  }, [data]);

  const deleteProduct = (productId: number) => {
    deleteProductById({
      variables: {id: productId}
    });
    if(productsList){
      const index: number = productsList.getAllProducts.findIndex(product => product.id === productId);
      const copyProductList = JSON.parse(JSON.stringify(productsList));
      copyProductList.getAllProducts.splice(index,1);
      setProductsList(copyProductList);
    }
  };

  if (loading) return <p>...loading...</p>;
  if (error) return <p>...error...</p>;
  return (
    <div>
      <h2>Product list</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Product name</th>
            <th>Product category</th>
            <th>Product price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {productsList?.getAllProducts.map((productsList) => (
            <tr>
              <td>{productsList.name}</td>
              <td>{productsList.category.name}</td>
              <td>
                {productsList.price} {productsList.currencyCode}
              </td>
              <td>
                <button type="button" className="btn btn-primary" onClick={()=>{setSelectedProductId(productsList.id)}}> Details </button>
                <button type="button" className="btn btn-danger" onClick={()=>{deleteProduct(productsList.id)}}> Delete </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
