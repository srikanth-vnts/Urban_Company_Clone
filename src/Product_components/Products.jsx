import { useState, useEffect, useRef, useContext } from "react";
import { ProductDetailContext } from "../contexts/ProductDetailContext";
import axios from "axios";
import styled from "styled-components";
import "./Products.css";
// import Back from "../logos/Back.svg"
import Star from "../logos/Star.svg";
// import  Right from "../logos/Right.svg"
// import Close from "../logos/Close.svg"
import frame37 from "../logos/Frame37.svg";
//,,,
// const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const ProductDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
// const CardList = styled.ul`
// list-style-type: none;
// font-size:15px;
// `

const NameRef = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 0px;
  margin-right: 20px;
`;
const CategoryRef = styled.div`
  padding: 2.5%;
  margin-top: 0px;
  margin-bottom: 0px;
`;

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
  margin-top:5px;
  align-items: center;
`;
const CardMain2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
`;

function Products(props) {
  const { handleCart, cart } = useContext(ProductDetailContext);
  const [card, setCard] = useState([]);
  const [quantity, setQuantity] = useState(0);
  // const [iQuantity, setIQuantity] = useState(0);
  const [cartPrice, setCartPrice] = useState(0);

  const myRef = useRef(null);
  const executeScroll = (e) => {
      let getId='x'+e.target.innerText.split(' ').join('');
    // scrollToRef(myRef)
        // let elmnt = document.getElementById(getId);
        // elmnt.scrollIntoView({behavior: 'smooth'});
  };

  //   const [filtered,setFiltered] = useState([]);
  const categories = ["Fan", "Switch and Socket", "Light"];

  useEffect(() => {
    getProducts();
  }, []);

  function getProducts() {
    axios
      .get("http://localhost:3333/serviceCard/")
      .then((res) => {
        setCard(res.data);
        // console.log(res.data);
      })
      .catch((err) => console.error(err));
  }

  function filtering(p) {
    const filtered = card.filter((el) => {
      return el.category === p;
    });
    //   console.log(filtered)

    return filtered;
  }

  function addCart(item) {
    card.forEach((el) => {
      if (el._id === item._id) {
        for (let i = 0; i < cart.length; i++) {
          if (cart[i]._id === item._id && cart.length > 0) {
            cart[i].quantity = cart[i].quantity + 1;
            let q = quantity + 1;
            let s = cartPrice + cart[i].price;
            setCartPrice(s);
            setQuantity(q);
            handleCart(cart);
            console.log(cart);
            return;
          } else if (cart.length === 0) {
            let nCart = [item];
            handleCart(nCart);
          }
        }
        item.quantity = item.quantity + 1;
        handleCart([...cart, item]);
        let s = cartPrice + item.price;
        setCartPrice(s);
        console.log(cart);
      }
    });
  }

  function removeCart(item) {
    card.forEach((el) => {
      if (el._id === item._id) {
        for (let i = 0; i < cart.length; i++) {
          if (cart[i]._id === item._id) {
            cart[i].quantity = cart[i].quantity - 1;
            let q = quantity - 1;
            if (q >= 0) {
              setQuantity(q);
            }
            let s = cartPrice - cart[i].price;
            setCartPrice(s);
            handleCart(cart);
            console.log(cart);
            return;
          }
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
      {/* <div style={{
                display: 'flex',
                width: "99.8%",
                background: "#F7F8FA",
                boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.25)",
                justifyContent: "space-between",
                alignItems: "center",
                height:"35px"
            }}><img src={Back} style={{width:"11px",marginLeft: "10px"}} alt = "logo.png"/><p style={{}}>Electricians</p><img src={Close} style={{width:"10px",marginRight: "10px"}} alt = "logo.png"/></div> */}
      <ProductDiv>
        <NameRef>
          {categories.map((el) => {
            return (
              <CategoryRef>
                {el === "Fan" ? (
                  <p
                    onClick={executeScroll}
                    style={{
                      fontSize: "9px",
                      marginTop: "0px",
                      marginBottom: "0px",
                      width: "100%",
                      border: "1px solid black",
                      padding: "2px",
                      textAlign: "center",
                      borderRadius: "2px",
                    }}
                  >
                    {el}
                  </p>
                ) : (
                  <p
                    onClick={executeScroll}
                    style={{
                      fontSize: "9px",
                      marginTop: "0px",
                      marginBottom: "0px",
                      width: "100%",
                      border: "1px solid black",
                      padding: "2px",
                      textAlign: "center",
                      borderRadius: "2px",
                    }}
                  >
                    {el}
                  </p>
                )}
              </CategoryRef>
            );
          })}
        </NameRef>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "82vh",
            width: "350px",
            overflowY: "scroll",
          }}
        >
          {categories.map((el) => {
            return (
              <>
                <div>
                  {/* {el === "Fan" ? <h4 ref={myRef}>{el}</h4> : <h4>{el}</h4>} */}
                 <h4 id={'x'+el.split(' ').join('')} ref={myRef}>{el}</h4> 

                  <img
                    style={{ width: "311px", marginLeft: "13px" }}
                    src={frame37}
                    alt="logo.png"
                  />
                  {filtering(el).map((e) => {
                    return (
                      <CardMain>
                        <CardMain_1>
                          <img
                            style={{ width: "40px", height: "40px" }}
                            src={e.image}
                            alt="logo.png"
                          />
                          <CardMain_1_1>
                            <CardMain_1_1_Heading>
                              {e.name}
                            </CardMain_1_1_Heading>
                            <CardMain_Reviews>
                              <Review>
                                <img
                                  style={{ width: "9px" }}
                                  src={Star}
                                  alt="logo.png"
                                />
                                <p
                                  style={{
                                    fontSize: "9px",
                                    marginLeft: "3px",
                                    color: "green",
                                    fontWeight: "500",
            
                                  }}
                                >
                                  {e.review}
                                </p>
                              </Review>
                              <Review>
                                {" "}
                                <p
                                  style={{
                                    fontSize: "8px",
                                    marginLeft: "5px",
                                    width: "51px",
                                    color: "#757575",
                                    marginTop:"1px"
                                  }}
                                >
                                  {e.totalReviews} ratings
                                </p>
                              </Review>
                            </CardMain_Reviews>
                          </CardMain_1_1>
                          <Buttons
                            style={{
                              borderRight:
                                e.quantity === 0 ? "1px solid #304FFE" : "none",
                              borderLeft:
                                e.quantity === 0 ? "1px solid #304FFE" : "none",
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
                                      marginLeft: "3px"
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
                                        marginTop: "-1.8px",
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
                                    width: "17px"
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
                                    width: "17px"
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
                        <CardMain2>
                          <div
                            style={{
                              borderTop: "1px solid #e8e8e8",
                              height: "1px",
                              width: "90%",
                              marginLeft: "12px",
                            }}
                          ></div>
                          <ul style={{ marginTop: "0px",marginLeft:"36px" }}>
                            {e.disclaimers.map((d) => {
                              return (
                                <li
                                  style={{
                                    fontSize: "9px",
                                    marginLeft: "-20px",
                                    marginTop: "5px",
                                    color: "#757575",
                                    lineHeight: "20px",
                                  }}
                                >
                                  {d}
                                </li>
                              );
                            })}
                          </ul>
                        </CardMain2>
                      </CardMain>
                    );
                  })}
                  {/* </CardList>
                   */}
                </div>
              </>
            );
          })}
        </div>
        <div style={{ width: "25%" }}></div>
      </ProductDiv>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          visibility: cart.length === 0 ? "hidden" : "visible",
          boxShadow: "0 -1px 0 0 #e0e0e0",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "3px",
            background: "#241f54",
            marginLeft: "10px",
            width: "200px",
            height: "25px",
            marginTop: "4px",
          }}
        >
          <p
            style={{
              fontWeight: "bold",
              fontSize: "12px",
              color: "white",
              margin: "0px",
            }}
          >
            Click to save ₹50 on final bill
          </p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "200px",
            borderRadius: "3px",
            marginRight: "10px",
            background: "#304FFE",
            height: "25px",
            marginTop: "4px",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "50px",
              justifyContent: "space-between",
              alignItems: "center",
              marginLeft: "5px",
              color: "white",
            }}
          >
            <div
              style={{
                border: "1px solid white",
                width: "10px",
                height: "14px",
                paddingLeft: "5px",
                marginLeft: "0.5px",
                fontSize: "10px",
              }}
            >
              {quantity}
            </div>
            <div>{cartPrice}</div>
          </div>
          <div
            onClick={props.nextPage}
            style={{ color: "white", marginRight: "5px" }}
          >
            Continue
          </div>
        </div>
      </div>
    </>
  );
}

export { Products };
