import { createSlice } from "@reduxjs/toolkit";
import { IProductsStateReducer } from "./types";

const initialState: IProductsStateReducer  = {
    productsList: null,
    product: null,
    selectedProductId: null
}

const ProductsReducer = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProductsList(state, action) {
        state.productsList = action.payload;
    },
    setProductDetails(state, action) {
      state.product = action.payload;
    },
    setSelectedProductId(state, action) {
      state.selectedProductId = action.payload
    }
  }
});

export const {setProductsList, setProductDetails, setSelectedProductId} = ProductsReducer.actions;
export default ProductsReducer.reducer;