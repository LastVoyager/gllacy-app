import React, {useState} from 'react';
import Good  from './Good';
import './AllGoods.css';
import Goods from '../Goods.js';



function AllGoods (props) {
  const [request, setRequest] = useState([ ]);
  

  const formRequest = info => {
    if ((request.findIndex(item => item.id === info.id)) < 0) {
      const data = [...request, info]
      setRequest(data);
      props.sendData(data);
    }
  }
  
  return (
    <ul className="populars">
      {Goods.slice(0, 4).map(info => (
        <Good
          click={() => formRequest(info)}
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