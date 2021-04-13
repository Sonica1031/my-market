import React, { useState } from "react";
import gummi from "../images/gummi.jpeg";
import cartButton from "../images/button-cart.png";
import darkmodeCart from "../images/darkmode-cart.png";
import { Link, Route } from "react-router-dom";
import { Cart } from "./Cart";
import Axios from "axios";

export const Item = (props) => {
  const item = props.item.find(
    (item) => `${item.id}` === props.match.params.id
  );
  let qty = document.getElementsByClassName("qty");
  const [value, setValue] = useState([]);
  const addToCart = (e) => {
    e.preventDefault();
    let qtyInt = parseInt(qty[0].value);
    let result = item.qty + qtyInt;
    const key = window.localStorage.getItem("key");
    let sending = [
      {
        key: key,
      },
      {
        qty: result,
      },
    ];
    Axios.post(`https://puff-palace.herokuapp.com/users/:id/cart/:userID/${item.id}`, sending)
      .then((res) => {
        setValue(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    qty[0].value = "";
  };
  return (
    <div className={`edible-single`}>
      <p className="aTagForEdibles">{item.description}</p>
      <img src={gummi} width="300px" />
      <form>
        <div className="flex-cart">
          <div className="cart">
            <label className="qtyLabel" htmlFor="qty">
              QTY:
              <input name="qty" className="qty" id={item.id} />
            </label>
            <button onClick={addToCart} className="add-cart-item">
              Add to Cart
            </button>
          </div>
            <Link className="go-to-cart" path to="/cart">
              <img
                className="cartImage"
                width="100px"
                src={props.darkmode ? darkmodeCart : cartButton}
              />
            </Link>
  <Route exact path="/cart" render={props => <Cart {...props} value={value}/>}/>
        </div>
      </form>
    </div>
  );
};
