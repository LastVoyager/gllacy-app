import React from 'react';
import  './AllGoods.css';

const Good = (props) => {

    const handleClick = () => {
        props.click(props.info)
    };

    return (
        <li className="good">
            <div className="image good-1 hit">
                <img src={props.info.image}/>
                <p className="price">{props.info.price} &#36;/kg</p>
                <p className="description">{props.info.title}</p>
                <button className="button" onClick={handleClick}>Добавити в корзину</button>
            </div>
            {props.children}
        </li>
    );
};

export default Good;