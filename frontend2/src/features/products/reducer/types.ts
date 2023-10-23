import { GetAllProductsQuery, GetOneProductByIdQuery } from "../../../generated/types";

export interface IProductsStateReducer {
    productsList: GetAllProductsQuery | null;
    product: GetOneProductByIdQuery | null;
    selectedProductId: number | null;
}