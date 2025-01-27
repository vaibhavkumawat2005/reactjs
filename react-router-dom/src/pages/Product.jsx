import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../Product.css";
import Product1 from "../../public/p2.webp";
import Product2 from "../../public/p3.webp";
import Product3 from "../../public/p1.jpg";
import Product4 from "../../public/p4.webp";
import Product5 from "../../public/p5.webp";

function Product() {
  const products = [
    { id: 1, name: "Product-1", image: Product1 },
    { id: 2, name: "Product-2", image: Product2},
    { id: 3, name: "Product-3", image: Product3 },
    { id: 4, name: "Product-4", image: Product4 },
    { id: 5, name: "Product-5", image: Product5 },
  ];

  return (
    <div className="page products">
      <h1>Products</h1>

      <div className="products-container">
        <div className="products-list">
          <h2>Product List</h2>
          {products.map((product) => (
            <Link key={product.id} to={`${product.id}`}>
              <div className="product-item">
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
              </div>
            </Link>
          ))}
        </div>
        <div className="product-details">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Product;
