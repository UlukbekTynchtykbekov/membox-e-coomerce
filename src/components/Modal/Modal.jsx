    import React from 'react';
import './modal.scss'
import  closeIcon  from "../../static/img/close-line.svg"

const Modal = ({ active, setActive }) => {

    console.log(active)

    return (
        <div className={ active ? "modal--active" : "modal" }>
            <div className="modal__shadow">
                <div className="modal__show">
                    <div className="modal__dialog">
                        <div className="modal__content">
                            <div className="modal__header">
                                <div className="modal__title">
                                    Деревянный ящик MANBOX с ломом
                                </div>
                                <div onClick={() => setActive(false)} className="modal-close">
                                    <a className="close--btn">
                                        <img className="close--icon" src={closeIcon} alt=""/>
                                    </a>
                                </div>
                            </div>
                            <div className="modal__body">
                                <div className="modal__help">
                                    <div className="modal__description">
                                        Крафтовая коробка с Вашим персональным поздравлением на наклейке.
                                    </div>
                                </div>
                                <div className="fastview modal__fastview">
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="fastview__model">Код товара: 1542</div>
                                            <div className="fastview__name">
                                                Тушеное мясо лося, 325 г
                                            </div>
                                            <div className="fastview__quantity">
                                                <div className="fastview__stock">
                                                    <span className="fastview__icon">
                                                        <svg data-v-36f493c7="" width="19" height="19"
                                                             viewBox="0 0 19 19" fill="none"
                                                             xmlns="http://www.w3.org/2000/svg" className=""><path
                                                            data-v-36f493c7=""
                                                            d="M17 9.24514V9.98114C16.999 11.7063 16.4404 13.3849 15.4075 14.7666C14.3745 16.1483 12.9226 17.1591 11.2683 17.6483C9.61394 18.1374 7.84581 18.0787 6.22757 17.4808C4.60934 16.883 3.22772 15.778 2.28877 14.3308C1.34981 12.8836 0.903833 11.1716 1.01734 9.45019C1.13085 7.72879 1.79777 6.0902 2.91862 4.7788C4.03948 3.4674 5.55423 2.55345 7.23695 2.17326C8.91967 1.79307 10.6802 1.96701 12.256 2.66914"
                                                            stroke="#665CFF" strokeWidth="2" strokeLinecap="round"
                                                            strokeLinejoin="round"></path> <path data-v-36f493c7=""
                                                                                                  d="M17.0016 3.58105L9.00156 11.5891L6.60156 9.18905"
                                                                                                  stroke="#665CFF"
                                                                                                  strokeWidth="2"
                                                                                                  strokeLinecap="round"
                                                                                                  strokeLinejoin="round"></path></svg>
                                                    </span>
                                                    <span className="fastview__cash">
                                                        в наличии
                                                    </span>
                                                </div>
                                                <div className="fastview__descripton">
                                                    Подойдет для приготовления оригинальных блюд, либо можно съесть прямо из банки, жадно облизывая вилку! Срок годности 36 мес.
                                                </div>
                                                <div className="fastview__price">
                                                    <div className="fastview__price--block">
                                                        <div className="fastview__price--number">
                                                            410 р.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="fastview__image">
                                                <img className="fastview__img" src="https://manbox.ru/image/cachewebp/catalog/builder/1442_new-350x350.webp" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="button">
                                            <div className="button__block">
                                                <button className="button__btn">
                                                    Добавить к набору
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;