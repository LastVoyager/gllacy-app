import React, {useContext} from 'react';
import CartItem from './CartItem';
import './CartList.css'
import CartContext from '../../../Store/CartProvider';

const CartList = (props) => {
    const request = useContext(CartContext);
    /* let totalSum = makeSum ();
    function makeSum () {
        const s = props.items.reduce((s,{price}) => s+price,0)
        return s;
    } */
    

    return (
        <div className="cart-content">
            <ul className="chosen-list">
                {request.map(info => (
                    <CartItem
                        key={info.id} 
                        info={info} 
                    >
                    </CartItem>
                ))}
            </ul>
            <span className={['total-price']}>Итого: {/* {totalSum} */} грн.</span>
            <form className="zalupa">
                <button className="button" type="submit">Оформить заказ</button>
            </form>
        </div>
    );
};

export default CartList;



