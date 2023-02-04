import classes from './CartItem.module.css';

const CartItem = (props) => {
    
    const deleteHandler = () => {
        // setDeleteText('(Deleted!)');
        props.onDeleteItem(props.id);
    }; 

    return (
        <li className={classes['chosen']}>
            <img src={props.image}/>
            <button className={classes['close']} type="button" onClick={deleteHandler}>X</button>
            {props.children}
           {/*  <p>Пломбир с апельсиновьім джемом</p>
            <p>1.5 кг. х 200грн.</p>
            <p>300 грн.</p> */}
        </li>
    );
};

export default CartItem;