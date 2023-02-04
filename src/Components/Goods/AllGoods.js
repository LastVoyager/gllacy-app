import React, {useState} from 'react';
import Good  from './Good';
import './AllGoods.css';

import image1 from '.././img/image1.png';
import image2 from '.././img/image2.png';
import image3 from '.././img/image3.png';
import image4 from '.././img/image4.png';



function AllGoods (props) {
  const allGoods = [
    {
      image: image1,
      title: 'Ice cream with orange jam',
      price: 200,
      id: '1',
    },
    {
      image: image2,
      title: 'Ice cream with a juicy shit',
      price: 1000,
      id: '2',
    },
    {
      image: image3,
      title: 'Ice cream with a juicy shit',
      price: 150,
      id: '3',
    },
    {
      image: image4,
      title: 'Ice cream with a juicy shit',
      price: 210,
      id: '4',
    },
    {
      image: image4,
      title: 'Ice cream with a juicy shit',
      price: 210,
      id: '5',
    },
  ];

  /* const [request, setRequest] = useState([ ]); */
  

  const formRequest = () => {
   
    props.sendData(allGoods);
  };
  
  return (
    <ul className="populars">
        {allGoods.slice(0, 4).map(info => (
          <Good
            formRequest={formRequest}
            key={info.id} 
            id={info.id}
            image={info.image}
            title={info.title}  
            price={info.price}
            >
          </Good>
        ))}
    </ul>
  );
}

export default AllGoods;