import React, {useState, useContext} from 'react';
import Good  from './Good';
import './AllGoods.css';
import CartContext from '../../Store/CartProvider';
import Goods from '../Goods.js';



function AllGoods (props) {
  
  const value = useContext(CartContext);
  
  return (
    <ul className="populars">
      {Goods.slice(0, 4).map(info => (
        <Good
          click={() => value.formRequest(info)}
          key={info.id} 
          info={info}
          >
        </Good>
      ))}
    </ul>
  );
}

export default AllGoods;

//const request = useRef({ });
/* const formRequest = (info) => {
    request.current[info.id] = info;
    
    props.sendData(request)
    console.log(request)
  }; */