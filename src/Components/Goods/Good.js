import React, {useState} from 'react';
import  './AllGoods.css';

const Good = (props) => {


    const getData = () => {
        props.formRequest();
      };

    return (
        <li className="good">
            <div className="image good-1 hit">
                <img src={props.image}/>
                <p className="price">{props.price} &#36;/kg</p>
                <p className="description">{props.title}</p>
                <button className="button" href="index.html" onClick={getData}>Добавити в корзину</button>
            </div>
            {props.children}
        </li>
    );
};

export default Good;