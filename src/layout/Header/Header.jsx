import React, {useState} from 'react';
import Logo from "../../static/img/new_year_logo.png"
import {Link} from "react-router-dom";

import "../../styles/header.scss"

const Header = () => {
    const [isOpen,setIsOpen] = useState(false)
    return (
        <header id="header">
            <div className="container">
                <div className="col-4">
                    <div className="row-top">
                        <div className={isOpen ? "off-active" : "off"}>
                            <div className="off-open">
                                <a href="" className="nuxt-link">
                                    <div className="logo">
                                        <a href="" className="nuxt-link">
                                            <img src={Logo} alt=""/>
                                        </a>
                                    </div>
                                </a>
                                <a className="close-btn"></a>
                            </div>
                            <div className="body">
                                <div className="container">
                                    <div className="d">
                                        <ul>
                                            <li><Link  className="open" to="/sale"> Акции</Link></li>
                                            <li><Link className="open" to="/set-constructor">Конструктор набора</Link></li>
                                            <li><Link className="open" to="/all-products">Все подарки</Link></li>
                                            <li><Link className="open" to="/vip">VIP-наборы</Link></li>
                                            <li><Link className="open" to="/home">Бар</Link></li>
                                            <li><Link className="open" to="/gastro">Гастрономия</Link></li>
                                            <li><Link className="open" to="/diy">Сделай сам</Link></li>
                                            <li><Link className="open" to="/stock">🔥Распродажа</Link></li>
                                            <li><Link className="open" to="/novelties">Новинки</Link></li>
                                            <li><Link className="open" to="/home">Туризм и отдых</Link></li>
                                            <li><Link className="open" to="/entertainment">Развлечения</Link></li>
                                            <li><Link className="open" to="/bathhouse">Баня</Link></li>
                                        </ul>
                                        <div className="vr"></div>
                                        <ul>
                                            <li><Link className="open" to="/certificate">Подарочный сертификат</Link>
                                            </li>
                                            <li><Link className="open" to="/home">Отзывы</Link></li>
                                            <li><Link className="open" to="/delivery">Доставка</Link></li>
                                            <li><Link className="open" to="/home">Партнерская программа</Link>
                                            </li>
                                            <li><Link className="open" to="/corporate-gifts">Корпоративным клиентам</Link>
                                            </li>
                                            <li><Link className="open" to="/suppliers">Поставщикам</Link></li>
                                            <li><Link className="open" to="/contacts">Контакты</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="contacts">
                                    <a href="https://t.me/manbox_bot" target="_blank" rel="nofollow noreferrer noopener">TELEGRAM</a>
                                    <a href="https://api.whatsapp.com/send?phone=74994440104" target="_blank" rel="nofollow noreferrer noopener">WHATSAPP</a>
                                </div>
                            </div>
                        </div>
                        <div className={`nav-toggle ${isOpen && "open"}`} onClick={()=> setIsOpen(!isOpen)
                        }>
                            <div className="menu">

                            </div>
                        </div>
                        <div className="center">
                            <div className="title-city">Ваш город:</div>
                            <div className="city">
                                <span>г.Москва</span>
                            </div>
                        </div>
                        <div className="search">
                        </div>
                        <div className="wishlist">
                            <div className="pos">
                            </div>
                        </div>
                    </div>
                        <div className="main_logo">
                            <a href="/" className="nuxt">
                                <img src={Logo}  alt=""/>
                            </a>
                        </div>
                        <div className="the">
                            <div className="phone-component">
                                <a href="tel:+7 (499) 444 - 01 - 04">+996(700)-654-628</a>
                            </div>
                            <div className="cart-header">
                                <div className="text">Корзина</div>
                            </div>
                        </div>
                </div>
                <div className="row-bottom">
                    <nav>
                        <ul className="d">
                            <li className="nav-item flex-fill"><Link className="" to="/all-products">Готовые наборы</Link></li>
                            <li className="nav-item flex-fill"><Link className="" to="/set-constructor">Конструктор набора</Link></li>
                            <li className="nav-item flex-fill"><Link className="" to="/novelties">Новинки</Link></li>
                            <li className="nav-item flex-fill"><Link className="" to="/vip">VIP-наборы</Link></li>
                            <li className="nav-item flex-fill"><Link className="" to="/sale">🔥Акции</Link></li>
                            <li className="nav-item flex-fill"><Link className="" to="/certificate">Сертификат</Link></li>
                            <li className="nav-item flex-fill"><Link className="" to="/delivery">Доставка</Link></li>
                            <li className="nav-item flex-fill"><Link className="" to="/corporate-gifts">Корпоративные подарки</Link></li>
                        </ul>
                    </nav>
                </div>
                </div>
        </header>
    );
};

export default Header;