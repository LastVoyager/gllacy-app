import React, {useState} from 'react';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';


import './App.css';
import './@media.css';


function App() {
  const [goods, setGoods] = useState([]);
 

  const createRequest = (data) => {
    /* const replaceGoods = data.map( data => { return data; }); */
    setGoods(data);
  };


  
  const HandleItemRemove = (id) => {
    const newList = goods.filter((item) => item.id !== id);
    setGoods(newList);
  };

  return (
    <div className='body'>
      <Header items={goods} onDeleteItem={HandleItemRemove}></Header>
      <Main sendData={createRequest}></Main>
      <footer></footer>
    </div>
  );
}

export default App;
