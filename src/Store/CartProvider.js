import React, {useState, useEffect} from "react";
import Goods from "../Components/Goods";

export const CartContext = React.createContext();

const CartProvider = (props) => {
    const [goods, setGoods] = useState(Goods);
    const [request, setRequest] = useState([ ]);
    const [totalCartAmount, setTotalCartAmount] = useState( 0 );
    

    //add to cart from index.html
    const formRequest = (info) => { 
        const isInCart= request.findIndex(item => item.id === info.id);
        const data = [...request];
        
        if (isInCart > -1) {
            data[isInCart].amount++;
            
        } else {
            data.push({...info, amount: 1})
        }

        let sum = data.reduce(function(prev, current) {
            return prev + +current.amount
          }, 0);
          
        return (setRequest(data), setTotalCartAmount(sum));
    }
    

    //remove from cart
    const removeItemCartHandler = (id) => {
        const newList = request.filter((item) => item.id !== id);
        setRequest(newList);
    };

    const value = {
        removeItemCartHandler,
        formRequest,
        goods,
        request,
        totalCartAmount,
    };

    return (
        <CartContext.Provider value={value}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;