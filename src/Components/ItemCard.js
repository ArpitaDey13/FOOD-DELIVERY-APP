import React, { useEffect, useState } from "react";
import {
  FavoriteRounded,
  StarRounded,
  CurrencyRupeeRounded,
  AddRounded,
} from "@mui/icons-material";
import { Items } from "./Data";
import { useStateValue } from "./StateProvider";
import { actionType } from "./reducer";
let cartData = [];

function ItemCard({ imgSrc, name, ratings, price, itemId }) {
  const [isFavourite, setFavourite] = useState(false);
  const [currentValue, setCurrentValue] = useState(Math.floor(ratings));

  const [isCart, setCart] = useState(null);
  const [{ cart }, dispatch] = useStateValue();

  useEffect(() => {
    if (isCart) {
      cartData.push(isCart);
      dispatch({
        type: actionType.SET_CART,
        cart: cartData,
      });
    }
  }, [isCart, dispatch]);

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  return (
    <div className="itemCard" id={itemId}>
      <div
        className={`isFavourite ${isFavourite ? "active" : ""}`}
        onClick={() => setFavourite(!isFavourite)}
      >
        <FavoriteRounded />
      </div>
      <div className="imgBox">
        <img src={imgSrc} alt="" className="itemImg" />
      </div>
      <div className="itemContent">
        <h3 className="itemName">{name}</h3>
        <div className="bottom">
          <div className="ratings">
            {Array.apply(null, { length: 5 }).map((e, i) => (
              <i
                key={i}
                className={`rating ${currentValue > i ? "purple" : "gray"}`}
                onClick={() => handleClick(i + 1)}
              >
                <StarRounded />
              </i>
            ))}
            <h3 className="price">
              <span>
                <CurrencyRupeeRounded />
              </span>
              {price}
            </h3>
          </div>
          <i
            className="addtoCart"
            onClick={() => setCart(Items.find((n) => n.id === itemId))}
          >
            <AddRounded />
          </i>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
