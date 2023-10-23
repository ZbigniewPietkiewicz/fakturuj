import React, { useEffect } from "react";
import { createSelector } from "reselect";
import ProductsService from "../ProductsService";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { setProductDetails } from "../reducer/productsReducer";
import {
  getProductDetails,
  getSelectedProductId,
} from "../selector/productsSelector";
import { GetOneProductByIdQuery } from "../../../generated/types";
import { Dispatch } from "redux";

const setProductDetailsDispatch = (dispatch: Dispatch) => ({
  setProductDetails: (product: GetOneProductByIdQuery) =>
    dispatch(setProductDetails(product)),
});
const selectedProductIdSelector = createSelector(
  getSelectedProductId,
  (productId) => ({ productId })
);
const productDetailsSelector = createSelector(
  getProductDetails,
  (productDetails) => ({
    productDetails,
  })
);

const ProductDetails = () => {
  const { setProductDetails } = setProductDetailsDispatch(useAppDispatch());
  const { productId } = useAppSelector(selectedProductIdSelector);
  const { productDetails } = useAppSelector(productDetailsSelector);

  const { loading, error, data } = ProductsService.getOneProductById({
    variables: { id: productId || -1 },
  });

  useEffect(() => {
    if (data) {
      setProductDetails(data);
    }
  }, [data]);

  if (!productId) {
    return <p>Press details next to product to display details!</p>;
  }

  if (loading) return <p>...loading...</p>;
  if (error) return <p>...error...</p>;
  return (
    <div>
      <h2>Product details: {productDetails?.getOneProductById.name}</h2>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <strong>Category:</strong>{" "}
          {productDetails?.getOneProductById.category.name}
        </li>
        <li className="list-group-item">
          <strong>Amount:</strong> {productDetails?.getOneProductById.amount}
        </li>
        <li className="list-group-item">
          <strong>Production date:</strong>{" "}
          {productDetails?.getOneProductById.productionDate}
        </li>
        <li className="list-group-item">
          <strong>Price:</strong> {productDetails?.getOneProductById.price}
        </li>
        {productDetails?.getOneProductById.description && (
          <li className="list-group-item">
            <div className="d-flex w-100 justify-content-between">
              <strong className="mb-1">Description:</strong>
            </div>
            <p className="mb-1">
              {productDetails?.getOneProductById.description}
            </p>
          </li>
        )}
      </ul>
    </div>
  );
};

export default ProductDetails;
