import React, {useState} from 'react';
import CartItem from './CartItem';
import './CartList.css'

const CartList = (props) => {
   /*  const [sum, setSum] = useState( 0 ); */

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
                    id={info.id}
                    onDeleteItem={props.onDelete}
                    image={info.image}
                    >
                    {info.title}  {info.price}
                    </CartItem>
                ))}
            </ul>
            <span>Итого: {totalSum}грн.</span>
            <form className="zalupa">
                <button className="button" type="submit">Оформить заказ</button>
            </form>
        </div>
    );
};

export default CartList;



