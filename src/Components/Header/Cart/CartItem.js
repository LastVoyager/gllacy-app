import React, {useContext} from 'react';
import classes from './CartItem.module.css';
import { CartContext } from '../../../Store/CartProvider';


const CartItem = (props) => {
    const { removeItemCartHandler } = useContext(CartContext);
    /* const deleteHandler = () => {
        props.onDeleteItem(props.info.id);
    };  */

    return (
        <li className={classes['chosen']}>
            <img src={props.info.image} alt=''/>
            <button 
                className={classes['close']} 
                type="button" 
                onClick={() => removeItemCartHandler(props.info.id)}>X</button>
            <section>
                <span className={classes.title}> {props.info.title}</span>
                <span className={classes.amount}>{props.info.amount}</span>
                <span className={classes.price}>{props.info.price}</span>
            </section>
        </li>
    );
};

export default CartItem;