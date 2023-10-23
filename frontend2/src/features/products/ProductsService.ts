import { useGetAllProductsQuery as getAllProducts } from "../../generated/types";
import { useGetOneProductByIdQuery as getOneProductById } from "../../generated/types";
import { useDeleteProductMutation } from "../../generated/types";
import { useCreateProductMutation } from "../../generated/types";

const ProductsService = {
    getAllProducts,
    getOneProductById,
    useDeleteProductMutation,
    useCreateProductMutation
}

export default ProductsService;
