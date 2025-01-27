import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Product1 from "../../public/p2.webp";
import Product2 from "../../public/p3.webp";
import Product3 from "../../public/p1.jpg";
import Product4 from "../../public/p4.webp";
import Product5 from "../../public/p5.webp";

function ProductDetails() {
  const { productId } = useParams();
  const navigate = useNavigate();

  // Simulated product data with images
  const productData = {
    1: { name: "Product-1", image: Product1, description: "Description of Product-1" },
    2: { name: "Product-2", image: Product2, description: "Description of Product-2" },
    3: { name: "Product-3", image: Product3, description: "Description of Product-3" },
    4: { name: "Product-4", image:Product4 , description: "Description of Product-4" },
    5: { name: "Product-5", image: Product5, description: "Description of Product-5" },
  };

  const product = productData[productId];

  if (!product) {
    return (
      <div className="page product-details">
        <h2>Product Not Found</h2>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

  return (
    <div className="page product-details">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} style={{ width: "300px", borderRadius: "8px", marginBottom: "1rem" }} />
      <p>{product.description}</p>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
}

export default ProductDetails;
