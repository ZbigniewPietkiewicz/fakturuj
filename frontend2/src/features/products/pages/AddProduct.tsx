import React, { useState } from "react";

import ProductsService from "../ProductsService";
import { CreateProductDto } from "../../../generated/types";

const AddProduct = () => {
  const [productDTO, setProductDTO] = useState<CreateProductDto>({
    name: "",
    amount: 10,
    categoryId: 0,
    description: "",
    price: 0,
    productionDate: "",
  });
  const [createProduct] = ProductsService.useCreateProductMutation();

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (productDTO) {
      console.log(event.target.value);
      setProductDTO({ ...productDTO, [event.target.name]: event.target.value });
    }
  };

  const handleSubmit = (event: any) => {
    console.log(productDTO.amount);
    if (productDTO)
      createProduct({
        variables: {
          createProductDTO: {
            name: productDTO.name,
            amount: productDTO.amount,
            categoryId: productDTO.categoryId,
            description: productDTO.description,
            price: productDTO.price,
            productionDate: productDTO.productionDate
          },
        },
      });
    event.preventDefault();
  };

  return (
    <div className="list row">
      <div className="col-md-8 offset-md-2 col-sm-12">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">
              Name:
              <input
                onChange={handleOnChange}
                type="text"
                name="name"
                id="name"
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="categoryId">
              Category:
              <input
                onChange={handleOnChange}
                type="number"
                name="categoryId"
                id="categoryId"
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="amount">
              Amount:
              <input
                onChange={handleOnChange}
                type="number"
                name="amount"
                id="amount"
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="price">
              Price:
              <input
                onChange={handleOnChange}
                type="text"
                name="price"
                id="price"
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="productionDate">
              Production date:
              <input
                onChange={handleOnChange}
                type="text"
                name="productionDate"
                id="productionDate"
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="description">
              Description:
              <input
                onChange={handleOnChange}
                type="text"
                name="description"
                id="description"
              />
            </label>
          </div>
          <button type="submit">Add Product</button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
