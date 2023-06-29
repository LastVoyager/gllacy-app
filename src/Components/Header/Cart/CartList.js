import React, {useContext} from 'react';
import CartItem from './CartItem';
import './CartList.css'
import { CartContext } from '../../../Store/CartProvider';

const CartList = () => {
    const value = useContext(CartContext);
    
    let totalSum = value.request.reduce((s, { price }) => s+price,0);

    return (
        <div className="cart-content">
            <ul className="chosen-list">
                {value.request.map(info => (
                    <CartItem
                        key={info.id} 
                        info={info}
                       /*  itemAmount={value.cartAmount} */
                    >
                    </CartItem>
                ))}
            </ul>
            <span className={['total-price']}>Итого: {totalSum} грн.</span>
            <form className="zalupa">
                <button className="button" type="submit">Оформить заказ</button>
            </form>
        </div>
    );
};

export default CartList;



