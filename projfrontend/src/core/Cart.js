import React, { useState, useEffect } from "react";
import Base from "./Base";

import Card from "./Card";
import { loadCart } from "./helper/carthelper";
import PaymentB from "./PaymentB";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    setProducts(loadCart());
  }, [reload]);

  const loadAllProducts = (products) => {
    return (
      <div>
        {products.map((products, index) => (
          <Card
            key={index}
            product={products}
            removeFromCart={true}
            addToCart={false}
            reload={reload}
            setReload={setReload}
          />
        ))}
      </div>
    );
  };

  const loadCheckout = () => {
    return (
      <div>
        <h1>Check Out Page</h1>
      </div>
    );
  };

  return (
    <Base title="Cart Page" desciption="Welcome to Check Out">
      <div className="row text-center">
        <div className="col-6">{loadAllProducts(products)}</div>
        <div className="col-6">
          {products.length > 0 ? (
            <PaymentB products={products} setReload={setReload} />
          ) : (
            <h3>Please Login or Add Something in Cart</h3>
          )}
        </div>
      </div>
    </Base>
  );
};

export default Cart;
