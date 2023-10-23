import React from "react";
import ProductList from "../components/ProductsList";
import ProductDetails from "../components/ProductDetails";



const Products = () => {
    return (
        <div className="list row">
            <div className="col-md-7 col-sm-12">
                <ProductList />
            </div>
            <div className="col-md-5 col-sm-12">
                <ProductDetails />
            </div>
            
        </div>
    )
}

export default Products;