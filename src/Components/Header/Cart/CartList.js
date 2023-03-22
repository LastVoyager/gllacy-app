import React, {useContext} from 'react';
import CartItem from './CartItem';
import CartContext from '../../../Store/cartContext';
import './CartList.css'

const CartList = (props) => {

    const {removeItemCartHandler} = useContext(CartContext);

    let totalSum = makeSum ();
    function makeSum () {
        const s = props.items.reduce((s,{price}) => s+price,0)
        return s;
    }
    

    return (
        <div className="cart-content">
            <ul className="chosen-list">
                {props.items.map(info => (
                    <CartItem
                        key={info.id} 
                        info={info}
                        click={() => removeItemCartHandler(info.id)} 
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



