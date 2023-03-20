import classes from './CartItem.module.css';

const CartItem = (props) => {
    
    const deleteHandler = () => {
        props.onDeleteItem(props.info.id);
    }; 

    return (
        <li className={classes['chosen']}>
            <img src={props.info.image} alt=''/>
            <button className={classes['close']} type="button" onClick={deleteHandler}>X</button>
            <section>
                <span className={classes.title}> {props.info.title}</span>
                <span className={classes.amount}>{props.info.amount}</span>
                <span className={classes.price}>{props.info.price}</span>
            </section>
        </li>
    );
};

export default CartItem;