import React from 'react';
import {Link} from "react-router-dom";
import "./main-products-card.scss";

const MainProductsCard = ({box}) => {
    return (
        <div className="col-4 presents__column">
            <div className="presents__item">
                <div className="presents__top top">
                    <div className="presents__add-wishList">
                        <div className="presents__mobile-type">
                            <div className="presents__button buttons">
                                <button type="presents__btn button">Сохранить</button>
                            </div>
                            <div className="presents__icon icon">
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M10.4844 3.60936L10.9613 4.12499L11.477 3.61022C12.9164 2.20729 14.9102 1.56878 16.8695 1.89491C19.8301 2.38819 22 4.94999 22 7.95351V8.20272C22 9.98593 21.2609 11.6918 19.9547 12.9078L12.1902 20.1566C11.868 20.4574 11.4426 20.625 11 20.625C10.5574 20.625 10.132 20.4574 9.80977 20.1566L2.04488 12.9078C0.740352 11.6918 0 9.98593 0 8.20272V7.95351C0 4.94999 2.17078 2.38819 5.13047 1.89491C7.05117 1.56878 9.08359 2.20729 10.4844 3.60936C10.4457 3.60936 10.4844 3.60979 10.4844 3.60936ZM10.9613 7.04257L9.02773 5.03163C8.09531 4.13702 6.77187 3.71249 5.46992 3.92905C3.5041 4.2569 2.0625 5.95976 2.0625 7.95351V8.20272C2.0625 9.41444 2.56566 10.5746 3.45211 11.3996L11 18.4465L18.5496 11.3996C19.4348 10.5746 19.9375 9.41444 19.9375 8.20272V7.95351C19.9375 5.95976 18.4937 4.2569 16.5301 3.92905C15.2281 3.71249 13.9047 4.13702 12.9723 5.03163L10.9613 7.04257Z"
                                        fill="black"></path>
                                    <path
                                        d="M9.02773 5.03165L10.9613 7.04259L12.9723 5.03165C13.9047 4.13704 15.2281 3.71251 16.5301 3.92907C18.4938 4.25692 19.9375 5.95977 19.9375 7.95352V8.20274C19.9375 9.41446 19.4348 10.5746 18.5496 11.3996L11 18.4465L3.45211 11.3996C2.56566 10.5746 2.0625 9.41446 2.0625 8.20274V7.95352C2.0625 5.95977 3.5041 4.25692 5.46992 3.92907C6.77188 3.71251 8.09531 4.13704 9.02773 5.03165Z"
                                        fill="white"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="presents__image">
                        <div className="presents__ratio">
                            <Link>
                                <div className="presents__picture">
                                    <img  className="presents__img"
                                        src="https://manbox.ru/image/cachewebp/catalog/products/Barmen/DSC_3491_1-750x750.webp"
                                        alt=""/>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="presents__middle middle">
                    <div className="presents__price">
                        <div className="presents__price-number">{box.price}</div>
                        {
                            box.oldPrice ? <div className="presents__old-price">{box.oldPrice}</div> : null
                        }
                    </div>
                </div>
                <div className="presents__bottom bottom">
                    <div className="presents__sticker">
                        Бестселлер
                    </div>
                    <div className="presents__name"><Link className="presents__name-link">{box.title}</Link></div>
                    <div className="presents__rating">
                        <div className="presents__start">
                            <svg width="35" height="35" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35"
                                 className="star active">
                                <path
                                    d="M31.547 12a.848.848 0 00-.677-.577l-9.427-1.376-4.224-8.532a.847.847 0 00-1.516 0l-4.218 8.534-9.427 1.355a.847.847 0 00-.467 1.467l6.823 6.664-1.612 9.375a.847.847 0 001.23.893l8.428-4.434 8.432 4.432a.847.847 0 001.229-.894l-1.615-9.373 6.822-6.665a.845.845 0 00.214-.869z"></path>
                            </svg>
                            <svg width="35" height="35" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35"
                                 className="star active">
                                <path
                                    d="M31.547 12a.848.848 0 00-.677-.577l-9.427-1.376-4.224-8.532a.847.847 0 00-1.516 0l-4.218 8.534-9.427 1.355a.847.847 0 00-.467 1.467l6.823 6.664-1.612 9.375a.847.847 0 001.23.893l8.428-4.434 8.432 4.432a.847.847 0 001.229-.894l-1.615-9.373 6.822-6.665a.845.845 0 00.214-.869z"></path>
                            </svg>
                            <svg width="35" height="35" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35"
                                 className="star active">
                                <path
                                    d="M31.547 12a.848.848 0 00-.677-.577l-9.427-1.376-4.224-8.532a.847.847 0 00-1.516 0l-4.218 8.534-9.427 1.355a.847.847 0 00-.467 1.467l6.823 6.664-1.612 9.375a.847.847 0 001.23.893l8.428-4.434 8.432 4.432a.847.847 0 001.229-.894l-1.615-9.373 6.822-6.665a.845.845 0 00.214-.869z"></path>
                            </svg>
                            <svg width="35" height="35" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35"
                                 className="star active">
                                <path
                                    d="M31.547 12a.848.848 0 00-.677-.577l-9.427-1.376-4.224-8.532a.847.847 0 00-1.516 0l-4.218 8.534-9.427 1.355a.847.847 0 00-.467 1.467l6.823 6.664-1.612 9.375a.847.847 0 001.23.893l8.428-4.434 8.432 4.432a.847.847 0 001.229-.894l-1.615-9.373 6.822-6.665a.845.845 0 00.214-.869z"></path>
                            </svg>
                            <svg width="35" height="35" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35"
                                 className="star active">
                                <path
                                    d="M31.547 12a.848.848 0 00-.677-.577l-9.427-1.376-4.224-8.532a.847.847 0 00-1.516 0l-4.218 8.534-9.427 1.355a.847.847 0 00-.467 1.467l6.823 6.664-1.612 9.375a.847.847 0 001.23.893l8.428-4.434 8.432 4.432a.847.847 0 001.229-.894l-1.615-9.373 6.822-6.665a.845.845 0 00.214-.869z"></path>
                            </svg>
                        </div>
                    </div>
                    <div className="presents__buttons button-mobile-type button">
                        <div className="presents__add-toCart">
                            <div className="presents__btn-mobile-type">
                                <div className="presents__outside_cart">
                                    <button type="button-btn"
                                            className="presents__btn active">
                                        <span>В корзину</span>
                                        <div className="presents__price-block d-flex">
                                            <div className="price">6990 р.</div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="presents__composition">
                            <Link>Смотреть состав</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainProductsCard;