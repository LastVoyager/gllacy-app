import AllGoods from '.././Goods/AllGoods';

import IceCream1 from '.././img/IceCream1.png';
import IceCream2 from '.././img/IceCream2.png';
import IceCream3 from '.././img/IceCream3.png';

import pin from '.././img/svg/pin.svg';

import './Main.css';


function Main (props)  {
    return (
        <div className="main">
            <div className="main-container">
                <section className="main-proposition">
                    <div className="radio-btn">
                        <input type="radio" className="slider-point-1" name="slider" defaultChecked></input>
                        <span></span>
                        <input type="radio" className="slider-point-2" name="slider"></input>
                        <span></span>
                        <input type="radio" className="slider-point-3" name="slider"></input>
                        <span></span>
                        <img className="ice-cream-1" src={IceCream1}  width="1045" height="881" alt="логотип Gllacy"></img>
                        <img className="ice-cream-2" src={IceCream2}  width="1045" height="881" alt="логотип Gllacy"></img>
                        <img className="ice-cream-3" src={IceCream3}  width="1045" height="881" alt="логотип Gllacy"></img>
                    </div>
                    <h1>Крем-брюле и пломбир<br/>с малиновым джемом</h1>
                    <form><button className="button">Давайте оба!</button></form>
                    {/* <!--<ul className="radio-btn">
                        <li><input type="radio" checked></input></li>
                        <li><input type="radio"></input></li>
                        <li><input type="radio"></input></li>
                    </ul>--> */}
                </section>
                <section className="proposition">
                    <article className="left">
                        <h2>Малинка даром!</h2>
                        <p>При покупке 2кг любого фруктового мороженного, добавим в ваш заказ банку малинового варенья бесплатно.</p>
                        <a className="button" href="index.html">Хочу варенье!</a>
                    </article>
                    <article className="right">
                        <h2>Шоколадки даром!</h2>
                        <p>При покупке 2кг пломбира, добавим в ваш заказ упаковку вкуснейшей шоколадной присыпки совершенно бесплатно.</p>
                        <a className="button" href="index.html">Хочу шоколадки!</a>
                    </article>
                </section>
                <AllGoods /* sendData={props.sendData} */></AllGoods>
                <section className="our-features">
                    <div>
                        <h3>Магазин Глейси - это онлайн и офлайн магазин по продаже мороженого собственного производства на развес.</h3>
                        <ul className="list-features">
                            <li className="features-1">Все наше мороженое изготавлияется на собственном{/* <br/> */}
                            производстве, с использованием современного оборудования{/* <br/> */}
                            и проверенных временем технологий.</li>
                            <li className="features-2">Все наше мороженое изготавлияется на собственном{/* <br/> */}
                            производстве, с использованием современного оборудования{/* <br/> */}
                            и проверенных временем технологий.</li>
                            <li className="features-3">Все наше мороженое изготавлияется на собственном{/* <br/> */}
                            производстве, с использованием современного оборудования{/* <br/> */}
                            и проверенных временем технологий.</li>
                            <li className="features-4">Все наше мороженое изготавлияется на собственном{/* <br/> */}
                            производстве, с использованием современного оборудования{/* <br/> */}
                            и проверенных временем технологий.</li>
                        </ul>
                    </div>
                </section>
                <section className="another">
                    <div className="news">
                        <p>Новое в нашем блоге</p>
                        <a href="index.html"><span>10 способов сервировки<br/>фруктовых щербетов к<br/>столу</span></a>
                    </div>
                    <div className="subscribe">
                        <div className="subscribe-container">
                            <p>Подпишитесь на нашу сладкую рассылку и будете всегда в курсе
                                всего самого вкусного, что у нас происходит.
                                Обещаем не спамить и не слать всякой ненужной ерунды. Честно :)</p>
                            <form>
                                <input type="email" placeholder="Електронная почта"></input>
                                <button className="button" type="submit">Отправить</button>
                            </form>
                        </div>
                    </div>
                </section>
                <section className="map">
                    <iframe 
                        title='map'
                        className="map" 
                        id="map" 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2536.8399091071087!2d30.780254615157574!3d50.51854549033778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4d976f550c911%3A0x9b039ae5e1a9ceea!2sKyivska%20St%2C%20249%D0%91%2C%20Brovary%2C%20Kyivs&#39;ka%20oblast%2C%2007400!5e0!3m2!1sen!2sua!4v1636889164885!5m2!1sen!2sua" 
                        width="600" 
                        height="450" 
                        style={{ border: 0 }} 
                        allowFullScreen="" 
                        loading="lazy">
                    </iframe>
                    <img className="mark" src={pin} width="index.html" height="index.html" alt="Локация значок"></img>
                    <div className="shadow"></div>
                    <div className="adress-info">
                        <p>Адрес главного офиса<br/>и оффлайн магазина:<br/><b>ул. Большая Конюшенная<br/>19/18, Санкт-Петербург</b></p>
                        <p>Для заказов по телефону:<br/><b>8 812 450-25-25</b><br/>(с 10 до 20 ежедневно)</p>
                        <button className="form-button" onClick={props.onOpen}>Форма обратной связи</button>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Main;