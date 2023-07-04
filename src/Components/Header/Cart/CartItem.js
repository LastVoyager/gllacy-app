import React, {useContext} from 'react';
import classes from './CartItem.module.css';
import { CartContext } from '../../../Store/CartProvider';


const CartItem = (props) => {
    const { removeItemCartHandler } = useContext(CartContext);
    
    let sameItemPrice =  props.info.amount * props.info.price;

    return (
        <li className={classes['chosen']}>
            <img src={props.info.image} alt={props.info.title}/>
            <button 
                className={classes['close']} 
                type="button" 
                onClick={() => removeItemCartHandler(props.info)}>X</button>
            <section>
                <span className={classes.title}>{props.info.title}</span>
                <span className={classes.amount}>{props.info.amount}</span>
                <span className={classes.price}>{sameItemPrice}</span>
            </section>
        </li>
    );
};

export default CartItem;