import React, { useEffect, useState } from "react";
import {
  AddRounded,
  RemoveRounded,
  CurrencyRupeeRounded,
} from "@mui/icons-material";
import { useStateValue } from "./StateProvider";
import { actionType } from "./reducer";
let cartItems = [];

function CartItem({ name, imgSrc, price, itemId }) {
  const [qty, setQty] = useState(1);
  const [{ cart, total }, dispatch] = useStateValue();
  const [itemPrice, setItemPrice] = useState(parseInt(qty) * parseInt(price));

  useEffect(() => {
    cartItems = cart;
    setItemPrice(parseInt(qty) * parseInt(price));
  }, [qty]);

  const updateQuantity = (action, id) => {
    if (action === "add") {
      setQty(qty + 1);
    } else {
      if (qty === 1) {
        cartItems.pop(id);
        dispatch({
          type: actionType.SET_CART,
          cart: cartItems,
        });
      }else{
        setQty(qty - 1);
        console.log(qty);
      }
    }
  };

  return (
    <div className="cardItem" id={itemId}>
      <div className="imgBox">
        <img src={imgSrc} alt="" />
      </div>

      <div className="itemSection">
        <h2 className="itemName">{name}</h2>
        <div className="itemQuantity">
          <span>x {qty}</span>
          <div className="quantity">
            <RemoveRounded
              className="itemRemove"
              onClick={() => updateQuantity("remove", itemId)}
            />
            <AddRounded
              className="itemAdd"
              onClick={() => updateQuantity("add", itemId)}
            />
          </div>
        </div>
      </div>
      <p className="itemPrice">
        <span className="inrSign">
          <CurrencyRupeeRounded />
        </span>
        <span className="itemPriceValue">{itemPrice}</span>
      </p>
    </div>
  );
}

export default CartItem;
