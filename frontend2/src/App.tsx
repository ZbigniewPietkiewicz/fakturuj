import React from "react";
import "./App.css";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Products from "./features/products/pages/Products";
import AddProduct from "./features/products/pages/AddProduct";

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/products"} className="nav-link">
              List Products
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/products/add"} className="nav-link">
              Add Product
            </Link>
          </li>
        </ul>
      </nav>
      <div className="container mt-3">
        <Routes>
          <Route path="/products" Component={Products} />
          <Route path="/products/add" Component={AddProduct} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
