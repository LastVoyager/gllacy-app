import CartContext from "./cartContext";

const CartProvider = (props) => {
    const addItemCartHandler = item => {};

    const removeItemCartHandler = id => {};

    return (
        <CartContext.Provider value={{addItemCartHandler, removeItemCartHandler}}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;