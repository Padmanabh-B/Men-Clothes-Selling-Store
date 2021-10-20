import React, { useState } from "react";
import { Redirect } from "react-router";
import { addItemToCart, removeItemFromCart } from "./helper/carthelper";
import ImageHelper from "./helper/ImageHelper";
import { isAuthenticated } from "../auth/helper";

const Card = ({
  product,
  addToCart = true,
  removeFromCart = false,
  reload = undefined,
  setReload = (f) => f,
  //function(f)(return f)
}) => {
  const [redirect, setRedirect] = useState(false);

  const cartTitle = product ? product.name : "A photo from pexels";
  const cartDescription = product ? product.description : "Defalut Discription";
  const cartPrice = product ? product.price : "Defalut";

  const addtoCart = () => {
    if (isAuthenticated()) {
      addItemToCart(product, () => setRedirect(true));
      console.log("Added To Cart");
    } else {
      console.log("Please Login! ");
    }
  };

  const getAredirect = (redirect) => {
    if (redirect) {
      return <Redirect to="/cart" />;
    }
  };

  const showAddToCart = (addtoCart) => {
    return (
      addToCart && (
        <button
          onClick={addtoCart}
          className="btn btn-block btn-outline-success mt-2 mb-2"
        >
          Add to Cart
        </button>
      )
    );
  };

  const showRemoveFromCart = (removeFromCart) => {
    return (
      removeFromCart && (
        <button
          onClick={() => {
            // TODO
            removeItemFromCart(product._id);
            setReload(!reload);
            console.log("Product Removed Successfully");
          }}
          className="btn btn-block btn-outline-danger mt-2 mb-2"
        >
          Remove from cart
        </button>
      )
    );
  };
  return (
    <div className="card text-white bg-dark border border-info ">
      <div className="card-header lead">{cartTitle}</div>
      <div className="card-body">
        {getAredirect(redirect)}
        <ImageHelper product={product} />
        <p className="lead bg-success font-weight-normal text-wrap">
          {cartDescription}
        </p>
        <p className="btn btn-success rounded  btn-sm px-4">{cartPrice} .Rs</p>
        <div className="row">
          <div className="col-12">{showAddToCart(addtoCart)}</div>
          <div className="col-12">{showRemoveFromCart(removeFromCart)}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
