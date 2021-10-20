import React, { useState, useEffect } from "react";
import Base from "./Base";
import Card from "./Card";
import { getProducts } from "./helper/coreapicalls";
import "../style.css";


export default function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  const loadAllProducts = () => {
    getProducts().then((data) => {
      if (data && data.error) {
        setError(data.error);
        console.log(error);
      } else {
        setProducts(data);
      }
    });
  };

  useEffect(() => {
    loadAllProducts();
  }, []);

  return (
    <Base title="Home Page" description="Welcome to T-Shirt Store">
      <h1>Home Componet</h1>
      <div className="row">
        {products && products.map((product, index) => {
            return (
              <div key={index} className="col-3 mt-3">
                <Card product={product}/>
              </div>
            );
          })}
      </div>
    </Base>
  );
}
