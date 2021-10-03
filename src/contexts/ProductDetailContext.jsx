import { createContext, useState } from "react";

export const ProductDetailContext = createContext(()=>{},[])

function ProductDetailProvider({ children }) {
    // const [detail, setDetail] = useState({});
    const [cart,setCart] = useState([]);

    // const handleDetail = (details) => {
    //     setDetail(details);
    // }
    const handleCart = (cart) => {
        setCart(cart);
    }
    
    return (
        <ProductDetailContext.Provider value = {{cart,handleCart}}>{children}</ProductDetailContext.Provider>
    )
}

export { ProductDetailProvider };