import React, {useContext} from 'react';
import { CartContext } from '../../Store/CartProvider';

import {useSelector, useDispatch} from 'react-redux';
import { counterActions } from '../../Store/index';

import Good  from './Good';
import './AllGoods.css';


function AllGoods (props) {

  //CartContext
  /* const value = useContext(CartContext);

  return (
    <ul className="populars">
      {value.goods.slice(0, 4).map(info => (
        <Good
          click={() => value.formRequest(info)}
          key={info.id} 
          info={info}
          >
        </Good>
      ))}
    </ul>
  );
} */

 //Redux
const goodsCounter = useSelector(state => state.goodsCounter.goods);

  return (
    <ul className="populars">
      {goodsCounter.slice(0, 4).map(info => (
        <Good
          //click={() => value.formRequest(info)}
          key={info.id} 
          info={info}
          >
        </Good>
      ))}
    </ul>
  );
}

export default AllGoods;