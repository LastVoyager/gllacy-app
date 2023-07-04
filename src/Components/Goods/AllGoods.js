import React, {useContext} from 'react';
import Good  from './Good';
import './AllGoods.css';
import { CartContext } from '../../Store/CartProvider';


function AllGoods (props) {
  const value = useContext(CartContext);


  return (
    <ul className="populars">
      {value.Goods.slice(0, 4).map(info => (
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