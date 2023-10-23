import { createSelector } from "reselect";
import { IProductsStateSelector } from "./types";

const selectProducts = (state: IProductsStateSelector) => state.products

export const getProductList = createSelector(selectProducts, (products) => products.productsList)
export const getProductDetails = createSelector(selectProducts, (products) => products.product)
export const getSelectedProductId = createSelector(selectProducts, (products) => products.selectedProductId)