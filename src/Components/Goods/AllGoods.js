import React, {useState} from 'react';
import Good  from './Good';
import './AllGoods.css';
import Goods from '../Goods.js';



function AllGoods (props) {
  const [request, setRequest] = useState([ ]);
  

  const formRequest = info => {
    if ((request.findIndex(item => item.id === info.id)) < 0) {
      setRequest([...request, info]);
    }
    props.sendData(request);
    console.log(request);
  }
  
  return (
    <ul className="populars">
      {Goods.slice(0, 4).map(info => (
        <Good
          click={formRequest}
          
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