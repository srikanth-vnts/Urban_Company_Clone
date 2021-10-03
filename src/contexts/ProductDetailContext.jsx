import { createContext, useState } from "react";

export const ProductDetailContext = createContext(()=>{},[],()=>{},"")

function ProductDetailProvider({ children }) {
    // const [detail, setDetail] = useState({});
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    // const handleDetail = (details) => {
    //     setDetail(details);
    // }
    const handleCart = (cart) => {
        setCart(cart);
    }
    const handleTotal = (total) => {
        setTotal(total);
    }
    
    return (
        <ProductDetailContext.Provider value = {{cart,handleCart,total,handleTotal}} >{children}</ProductDetailContext.Provider>
    )
}

export { ProductDetailProvider };