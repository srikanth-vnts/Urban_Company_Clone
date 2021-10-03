import { useState, useEffect, useRef, useContext } from "react";
import { ProductDetailContext } from "../contexts/ProductDetailContext";
import axios from "axios";
import styled from "styled-components";
import Star from "../logos/Star.svg";
import Right from "../logos/Right.svg";
import { Redirect } from "react-router-dom";

const CardMain = styled.div`
  display: flex;
  flex-direction: column;
  margin: 12px;
  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 8%);
  border-radius: 2px;
  border: 1px solid #e8e8e8;
  width: 300px;
  padding: 5px;
`;
const CardMain_1 = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const CardMain_1_1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
`;
const CardMain_1_1_Heading = styled.p`
  font-size: 12px;
  margin-top: 0px;
  margin-bottom: 0px;
  margin-left: 5px;
  width: 150px;
`;
const CardMain_Reviews = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 5px;
  width: 35px;
`;
const Review = styled.div`
  width: 52px;
  display: flex;
`;
const CardMain2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
`;

const Price = styled.p`
  margin-top: 5px;
  margin-bottom: 0px;
  font-size: 12px;
  margin-left: 7px;
  color: black;
  font-weight: 600;
`;

function Cart() {
  const { handleCart, cart, total, handleTotal } =
    useContext(ProductDetailContext);

  const [cartPrice, setCartPrice] = useState(0);

  function addCart(item) {
    console.log(cart);
    cart.forEach((p) => {
      if (item._id === p._id) {
        let s = cartPrice + p.price;
        setCartPrice(s);
        if (p.quantity > 0) {
          p.quantity = p.quantity + 1;
          handleCart(cart);
          handleTotal(total + p.price);
          return;
        }
      }
    });
  }

  function removeCart(item) {
    cart.forEach((p) => {
      if (item._id === p._id) {
        if (p.quantity > 0) {
          console.log(p);
          p.quantity = p.quantity - 1;
          console.log(p);
          handleCart(cart);
          handleTotal(total - p.price);
          return;
        }
      }
    });
  }

  const Buttons = styled.div`
    display: flex;
    width: 49px;
    height: 17.3px;
    border-top: 1px solid #304ffe;
    border-bottom: 1px solid #304ffe;
    border-radius: px;
    overflow: hidden;
  `;

  return (
    <>
      {cart.map((e) => {
        return (
          <CardMain>
            <CardMain_1>
              <img
                style={{ width: "40px", height: "40px" }}
                src={e.image}
                alt="logo.png"
              />
              <CardMain_1_1>
                <CardMain_1_1_Heading>{e.name}</CardMain_1_1_Heading>
                <CardMain_Reviews>
                  <Review>
                    <img style={{ width: "9px" }} src={Star} alt="logo.png" />
                    <p
                      style={{
                        fontSize: "9px",
                        marginLeft: "3px",
                        color: "green",
                        fontWeight: "500",
                      }}
                    >
                      4.5
                    </p>
                  </Review>
                  <Review>
                    {" "}
                    <p
                      style={{
                        fontSize: "8px",
                        marginLeft: "5px",
                        marginTop: "9.7px",
                        width: "51px",
                        color: "#757575",
                      }}
                    >
                      13.5k ratings
                    </p>
                  </Review>
                </CardMain_Reviews>
                <Price>₹{e.price}</Price>
              </CardMain_1_1>
              <Buttons
                style={{
                  borderRight: e.quantity === 0 ? "1px solid #304FFE" : "none",
                  borderLeft: e.quantity === 0 ? "1px solid #304FFE" : "none",
                }}
              >
                {e.quantity <= 0 ? (
                  <button
                    style={{
                      height: "20px",
                      fontSize: "10px",
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      width: "100%",
                    }}
                    onClick={() => {
                      addCart(e);
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                        height: "20px",
                        marginTop: "-10px",
                      }}
                    >
                      <p
                        style={{
                          color: "#304FFE",
                          marginTop: "8px",
                          fontWeight: "bold",
                        }}
                      >
                        ADD
                      </p>
                      <div
                        style={{
                          background: "rgba(48,79,254,.08)",
                          height: "20px",
                          padding: "5px",
                          marginLeft: "7px",
                        }}
                      >
                        <p
                          style={{
                            fontWeight: "500",
                            color: "#304FFE",
                            marginTop: "1px",
                            marginLeft: "-1px",
                            fontSize: "14px",
                          }}
                        >
                          +
                        </p>
                      </div>
                    </div>
                  </button>
                ) : (
                  <>
                    <button
                      style={{
                        height: "20px",
                        fontSize: "12px",
                        marginRight: "5px",
                        border: "none",
                        background: "#304FFE",
                        color: "white",
                        marginTop: "-1px",
                        fontWeight: "500",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        removeCart(e);
                      }}
                    >
                      -
                    </button>
                    <p
                      style={{
                        fontSize: "9px",
                        marginTop: "4px",
                      }}
                    >
                      {e.quantity}
                    </p>
                    <button
                      style={{
                        height: "20px",
                        fontSize: "12px",
                        marginLeft: "5px",
                        marginTop: "-1px",
                        border: "none",
                        background: "#304FFE",
                        color: "white",
                        fontWeight: "700",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        addCart(e);
                      }}
                    >
                      +
                    </button>
                  </>
                )}
              </Buttons>
            </CardMain_1>
          </CardMain>
        );
      })}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "300px",
          marginTop: "-10px",
          marginLeft: "15px",
        }}
      >
        <Price>Total</Price> <Price>₹{total}</Price>{" "}
      </div>
    </>
  );
}

export default Cart;
