import React, {useState} from 'react';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import CartProvider from './Store/CartProvider';
import Footer from './Components/Footer/Footer';


import './App.css';
import './@media.css';
import Subscribe from './Components/Subscribe/Subscribe';


function App() {
  const [modalShown, setModalShown] = useState(false);
  const showModalHandler = () => {
    setModalShown(true);
  };
  const hideModalHandler = () => {
    setModalShown(false);
  };

  
  return (
    <CartProvider>
      <div className='body'>
        {modalShown && <Subscribe onClose={hideModalHandler}/>}
        <Header></Header>
        <Main onOpen={showModalHandler}></Main>
        <Footer></Footer>
      </div>
    </CartProvider>
  );
}

export default App;
