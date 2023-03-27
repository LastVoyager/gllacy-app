import React, {useContext, useState} from "react";
import Goods from "../Components/Goods";

const CartContext = React.createContext();

const CartProvider = (props) => {
    const [goods, setGoods] = useState(Goods);
    /* const createRequest = (info) => {
        setGoods(info);
    }; */
    
    const [request, setRequest] = useState([ ]);

    //add to cart
    const formRequest = (info) => {
        if ((request.findIndex(item => item.id === info.id)) < 0) {
          const data = [...request, info]
          setRequest(data);
        }
    }

    //remove from cart
    const removeItemCartHandler = (id) => {
        const newList = goods.filter((item) => item.id !== id);
        setGoods(newList);
    };

    const value = {removeItemCartHandler, formRequest, goods, request};

    return (
        <CartContext.Provider value={value}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;