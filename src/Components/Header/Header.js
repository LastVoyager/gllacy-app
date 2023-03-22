import logo from '.././img/svg/logo.svg';

import CartList from './Cart/CartList';

import './Header.css';
import './Header_drop-down_comp.css';


function Header (props) {

    const numberOfCartGoods = props.items.reduce((curNumb, item) => {
        return curNumb + item.amount;
    }, 0);

    return (
        <div className="header" id="header">
            <div className="header-container">
                <nav className="main-navigation">
                    <a className="main-logo" href="index.html">
                       <img src={logo} alt={'logo'}></img> {/* added closing tag */}
                    </a>
                    <div className="header-burger">
                        <span></span>
                    </div>
                    <div className="options">
                        <ul className="left-option">
                            <li className="dropdown" name={'first'}>            {/* name value was changed */}
                                <a href="catalog.html" className="dropbtn">Каталог</a>
                                <div className="dropdown-content">
                                    <p>Новинки</p>
                                    <a href="catalog.html">Сливочное</a>
                                    <a href="catalog.html">Щербетьі</a>
                                    <a href="catalog.html">Фруктовьій лед</a>
                                    <a href="catalog.html">Мелорин</a>
                                </div>
                            </li>
                            <li className="dropdown">
                                <a href="catalog.html" className="dropbtn">Доставка и оплата</a>
                                <div className="dropdown-content">
                                    <p>Новинки</p>
                                    <a href="catalog.html">Сливочное</a>
                                    <a href="catalog.html">Щербетьі</a>
                                    <a href="catalog.html">Фруктовьій лед</a>
                                    <a href="catalog.html">Мелорин</a>
                                </div>
                            </li>
                            <li className="dropdown">
                                <a href="catalog.html" className="dropbtn">O Компании</a>
                                <div className="dropdown-content">
                                    <p>Новинки</p>
                                    <a href="catalog.html">Сливочное</a>
                                    <a href="catalog.html">Щербетьі</a>
                                    <a href="catalog.html">Фруктовьій лед</a>
                                    <a href="catalog.html">Мелорин</a>
                                </div>
                            </li>
                        </ul>
                        <ul className="right-option">
                            <li className="search">
                                <button className="search-button" id="search-button" type="submit"></button>
                                <div className="search-content">
                                    <div>
                                        <input  type="search" id="search" placeholder="Что ищем?"></input>  {/* added closing tag */}
                                    </div>
                                </div>
                            </li>
                            <li className="enter">
                                <a className="enter-button" href="catalog.html">Вход</a>
                                <div className="enter-content">
                                    <form>
                                        <section className="e-mail">
                                            <label className="visually-hidden" htmlFor="user-e-mail"></label>
                                            <p><input className="e-mail-user" id="user-e-mail" type="text" name="e-mail" placeholder="Електронная почта"></input></p> {/* added closing tag */}
                                        </section>
                                        <section className="password">
                                            <label className="visually-hidden" htmlFor="password-login"></label>
                                            <p><input className="password-user" id="password-login" type="text" name="password" placeholder="Пароль"></input></p> {/* added closing tag */}
                                        </section>
                                    </form>
                                    <div>
                                        <form><button className="button" type="submit">Вход</button></form>
                                        <article>
                                            <a href="catalog.html">Забьіли пароль?</a>
                                            <a href="catalog.html">Новая регистрация</a>
                                        </article>
                                    </div>
                                </div>
                            </li>
                            <li className="cart">
                                <a className="cart-button" href="catalog.html">{numberOfCartGoods}</a>
                                <CartList items={props.items} /* onDelete={props.onDeleteItem} */></CartList>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="phone">
                    <p>с 10 до 20 ежедневно</p>
                    <a className="phone-number" href="tel:+38050-555-50-50">050-555-50-50</a>
                </div>
            </div> 
        </div>
    ); 
}

export default Header;