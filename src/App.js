import React, {useState} from 'react';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import CartContext from './Store/cartContext';


import './App.css';
import './@media.css';
import Subscribe from './Components/Subscribe/Subscribe';


function App() {
  const [goods, setGoods] = useState([]);
 
  const createRequest = (info) => {
    /* const replaceGoods = data.map( data => { return data; }); */
    setGoods(info);
  };

  const [modalShown, setModalShown] = useState(false);
  const showModalHandler = () => {
    setModalShown(true);
  };
  const hideModalHandler = () => {
    setModalShown(false);
  };


  const removeItemCartHandler = (id) => {
    const newList = goods.filter((item) => item.id !== id);
    setGoods(newList);
  };

  return (
    <CartContext.Provider value={removeItemCartHandler}>
      <div className='body'>
        {modalShown && <Subscribe onClose={hideModalHandler}/>}
        <Header items={goods} /* onDeleteItem={HandleItemRemove} */></Header>
        <Main sendData={createRequest} onOpen={showModalHandler}></Main>
        <footer></footer>
      </div>
    </CartContext.Provider>
  );
}

export default App;
