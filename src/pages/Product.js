import React from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../data/products";

function Product() {
  const params = useParams();
  const product = getProduct(params.productId);

  if (!product) {
    return null;
  }

  return (
    <>
      <div style={{ display: "flex", padding: "3rem" }}>
        <img
          style={{ width: "450px", marginRight: "1rem" }}
          src={product.image}
          alt={product.title}
        />
        <div
          style={{ padding: "1rem", fontFamily: "serif", textAlign: "center" }}
        >
          <h2 style={{ marginTop: "0" }}>{product.title}</h2>
          <p style={{ fontSize: "1.2rem" }}>{product.description}</p>
          <button
            style={{
              cursor: "pointer",
              padding: "0.5rem",
              fontSize: "1rem",
              background: "black",
              color: "white",
              fontFamily: "serif",
              border: "solid 1px grey",
              borderRadius: "5px",
            }}
          >
            Add to cart - $ {product.price}
          </button>
        </div>
      </div>
    </>
  );
}

export default Product;
