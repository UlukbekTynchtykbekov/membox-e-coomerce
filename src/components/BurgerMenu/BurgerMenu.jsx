import React, {useState} from 'react';
import {Link} from "react-router-dom";
import Logo from "../../static/img/new_year_logo.png";

const BurgerMenu = () => {
    const [isOpen,setIsOpen] = useState(false)
    return (
        <div>
            <div className={`nav-toggle ${isOpen && "open"}`} onClick={()=> setIsOpen(!isOpen)
            }>
                <div className="menu">
                    <div className={`off ${isOpen && "open"}`}>
                        <div className="logo">
                            <a href="" className="nuxt-link">
                                <img src={Logo} alt=""/>
                            </a>
                        </div>
                        <div className="container">
                            <div className="d">
                                <ul>
                                    <li><Link  className="opens" to="/sale"> Акции</Link></li>
                                    <li><Link className="opens" to="/set-constructor">Конструктор набора</Link></li>
                                    <li><Link className="opens" to="/home">Все подарки</Link></li>
                                    <li><Link className="opens" to="/vip">VIP-наборы</Link></li>
                                    <li><Link className="opens" to="/home">Бар</Link></li>
                                    <li><Link className="opens" to="/home">Гастрономия</Link></li>
                                    <li><Link className="opens" to="/home">Сделай сам</Link></li>
                                    <li><Link className="opens" to="/stock">🔥Распродажа</Link></li>
                                    <li><Link className="opens" to="/novelties">Новинки</Link></li>
                                    <li><Link className="opens" to="/home">Туризм и отдых</Link></li>
                                    <li><Link className="opens" to="/home">Развлечения</Link></li>
                                    <li><Link className="opens" to="/home">Баня</Link></li>
                                </ul>
                                <div className="vr"></div>
                                <ul>
                                    <li><Link className="opens" to="/certificate">Подарочный сертификат</Link>
                                    </li>
                                    <li><Link className="opens" to="/home">Отзывы</Link></li>
                                    <li><Link className="opens" to="/delivery">Доставка</Link></li>
                                    <li><Link className="opens" to="/home">Партнерская программа</Link></li>
                                    <li><Link className="opens" to="/corporate-gifts">Корпоративным клиентам</Link></li>
                                    <li><Link className="opens" to="/suppliers">Поставщикам</Link></li>
                                    <li><Link className="opens" to="/contacts">Контакты</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="contacts">
                            <a href="https://t.me/manbox_bot" target="_blank" rel="nofollow noreferrer noopener">TELEGRAM</a>
                            <a href="https://api.whatsapp.com/send?phone=74994440104" target="_blank" rel="nofollow noreferrer noopener">WHATSAPP</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BurgerMenu;