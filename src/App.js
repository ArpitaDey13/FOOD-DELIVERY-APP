import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import MenuContainer from "./Components/MenuContainer";
import BannerName from "./Components/BannerName";

// Import icons from Material-UI Icons
import {
  AccountBalanceWalletRounded,
  Chat,
  Favorite,
  HomeRounded,
  Settings,
  SummarizeRounded,
  CurrencyRupeeRounded,
} from "@mui/icons-material";
import SubMenuContainer from "./Components/SubMenuContainer";
import MenuCard from "./Components/MenuCard";
import { MenuItems, Items } from "./Components/Data";
import ItemCard from "./Components/ItemCard";
import DebitCard from "./Components/DebitCard";
import CartItem from "./Components/CartItem";
import { useStateValue } from "./Components/StateProvider";

function App() {
  //main dish state
  const [isMainData, setMainData] = useState(
    Items.filter((element) => element.itemId === "kathiroll01")
  );
  const [{ cart, total }, dispatch] = useStateValue();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const menuLi = document.querySelectorAll("#menu li");

    function setMenuActive() {
      menuLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    menuLi.forEach((n) => n.addEventListener("click", setMenuActive));

    //menucard active toggle
    const menuCard = document
      .querySelector(".rowContainer")
      .querySelectorAll(".rowMenuCard");

    function setMenuCardActive() {
      menuCard.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    menuCard.forEach((n) => n.addEventListener("click", setMenuCardActive));
  }, [isMainData, cart, total, totalPrice]);

  //set main dish item
  const setData = (itemId) => {
    setMainData(Items.filter((element) => element.itemId == itemId));
  };

  return (
    <div className="App">
      {/* Header Section */}
      <Header />
      {/* Main Section */}
      <main>
        <div className="mainContainer">
          {/* Banner */}
          <div className="banner">
            <BannerName name={"Arpita"} discount={"500"} link={"#"} />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/fooddeliveryapp-55b3a.appspot.com/o/oie_Cv2ERFe4l4Zy.png?alt=media&token=2299a9ff-a4be-46e9-9162-b91ac8e5c559&_gl=1*18fh3gh*_ga*MTY4MTUzNjY1Mi4xNjk3NDQxMjc1*_ga_CW55HF8NVT*MTY5NzcwNjIzNy43LjEuMTY5NzcwNjc4MC41My4wLjA."
              alt=""
              className="deliverypic"
            />
          </div>

          {/* dishContainer */}
          <div className="dishContainer">
            <div className="menuCard">
              <SubMenuContainer name{"Arpita"}/>
            </div>
            <div className="rowContainer">
              {MenuItems &&
                MenuItems.map((data) => (
                  <div key={data.id} onClick={() => setData(data.itemId)}>
                    <MenuCard
                      imgSrc={data.imgSrc}
                      name={data.name}
                      isActive={data.id == "1" ? true : false}
                    />
                  </div>
                ))}
            </div>
            <div className="dishitemContainer">
              {isMainData &&
                isMainData.map((data) => (
                  <ItemCard
                    key={data.id}
                    itemId={data.id}
                    imgSrc={data.imgSrc}
                    name={data.name}
                    ratings={data.ratings}
                    price={data.price}
                  />
                ))}
            </div>
          </div>
        </div>
        <div className="rightMenu">
          <div className="debitCardContainer">
            <div className="debitCard">
              <DebitCard />
            </div>
          </div>

          {!cart ? (
            <div className="addSomeItem">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2FemptyCart.png?alt=media&token=50b733d4-cdd9-4025-bffe-8efa4066ca24"
                alt=""
                className="emptyCart"
              />
            </div>
          ) : (
            <div className="cartCheckOutContainer">
              <div className="cartContainer">
                <SubMenuContainer name={"Carts Items"} />

                <div className="cartItems">
                  {cart &&
                    cart.map((data) => (
                      <CartItem
                        key={data.id}
                        itemId={data.id}
                        name={data.name}
                        imgSrc={data.imgSrc}
                        qty={"4"}
                        price={data.price}
                      />
                    ))}
                </div>
              </div>
              <div className="totalSection">
                <h3>Total</h3>
                <p>
                  <span>
                    <CurrencyRupeeRounded /> 
                  </span> {total}
                </p>
              </div>
              <button className="checkOut">Check Out</button>
            </div>
          )}
        </div>
      </main>
      {/* Bottom Section */}
      <div className="leftMenu">
        <ul id="menu">
          {/* prettier-ignore */}
          <MenuContainer link = {'#'} icon = {<HomeRounded />}  isHome/>
          {/* prettier-ignore */}
          <MenuContainer link = {'#'} icon = {<Chat />}  />
          {/* prettier-ignore */}
          <MenuContainer link = {'#'} icon = {<AccountBalanceWalletRounded />}  />
          {/* prettier-ignore */}
          <MenuContainer link = {'#'} icon = {<Favorite />} />
          {/* prettier-ignore */}
          <MenuContainer link = {'#'} icon = {<SummarizeRounded />}  />
          {/* prettier-ignore */}
          <MenuContainer link = {'#'} icon = {<Settings />}  />
          <div className="indicator"></div>
        </ul>
      </div>
    </div>
  );
}

export default App;
