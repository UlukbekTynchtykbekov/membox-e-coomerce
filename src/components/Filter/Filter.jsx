import React from 'react';
import percent from "../../static/img/percent-line.svg";
import thumbUp from "../../static/img/like.png";
import close from "../../static/img/close-line.svg"
import './filter.scss';

const Filter = ({activeSort, setActiveSort}) => {
    return (
        <div className={activeSort ? "sort-active" : "sort"}>
            <div className="sort__top-items">
                <div className="sort__title">Фильтры</div>
                <div onClick={() => setActiveSort(false)} className="sort__close"><img className="sort__close-btn" src={close} alt=""/></div>
            </div>
            <div className="sort__items">
                <div className="sort__item">
                    <div className="sort__buttons">
                        <button type="button" className="sort__btn sort__btn-hover">
                            <span
                            className="sort__svg svg">
                                <img className="sort__img" src={percent} alt=""/>
                            </span>
                            <span className="sort__text text">Sale</span>
                        </button>
                        <button type="button" className="sort__btn sort__btn--border">
                            <span
                            className="sort__svg svg">
                                <img className="sort__img" src={thumbUp} alt=""/>
                        </span>
                            <span className="sort__text text">New</span>
                        </button>
                    </div>
                </div>
                <div className="sort__item">
                    <div className="sort__select">
                        <div className="sort__title title">Направления</div>
                        <div className="content sort__content">
                            <div className="content__item">
                                <label className="content__input content__input--margin">
                                   18+
                                    <input className="content__checked-input" value="all" type="radio" />
                                    <div className="control-indicator-radio sort__content--radio"></div>
                                </label>
                            </div>
                            <div className="content__item">
                                <label className="content__input content__input--margin">
                                    Авто
                                    <input className="content__checked-input" value="all" type="radio" />
                                    <div className="control-indicator-radio sort__content--radio"></div>
                                </label>
                            </div>
                            <div className="content__item">
                                <label className="content__input content__input--margin">
                                    Бар
                                    <input className="content__checked-input" value="all" type="radio"  />
                                    <div className="control-indicator-radio sort__content--radio"></div>
                                </label>
                            </div>
                            <div className="content__item">
                                <label className="content__input content__input--margin">
                                    Гастрономия
                                    <input className="content__checked-input" value="all" type="radio"  />
                                    <div className="control-indicator-radio sort__content--radio"></div>
                                </label>
                            </div>
                            <div className="content__item">
                                <label className="content__input content__input--margin">
                                    Сделай сам
                                    <input className="content__checked-input" value="all" type="radio"  />
                                    <div className="control-indicator-radio sort__content--radio"></div>
                                </label>
                            </div>
                            <div className="content__item">
                                <label className="content__input content__input--margin">
                                    Туризм и отдых
                                    <input className="content__checked-input" value="all" type="radio"  />
                                    <div className="control-indicator-radio sort__content--radio"></div>
                                </label>
                            </div>
                            <div className="content__item">
                                <label className="content__input content__input--margin">
                                    Развлечения
                                    <input className="content__checked-input" value="all" type="radio"  />
                                    <div className="control-indicator-radio sort__content--radio"></div>
                                </label>
                            </div>
                            <div className="content__item">
                                <label className="content__input content__input--margin">
                                    Баня
                                    <input className="content__checked-input" value="all" type="radio" />
                                    <div className="control-indicator-radio sort__content--radio"></div>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sort__item">
                    <div className="sort__select">
                        <div className="sort__title title">Упаковка</div>
                        <div className="content sort__content">
                            <div className="content__item">
                                <label className="content__input content__input--margin">
                                    Деревянный ящик
                                    <input className="content__checked-input" value="all" type="radio" />
                                    <div className="control-indicator-radio sort__content--radio"></div>
                                </label>
                            </div>
                            <div className="content__item">
                                <label className="content__input content__input--margin">
                                    Деревянный ящик без лома
                                    <input className="content__checked-input" value="all" type="radio"  />
                                    <div className="control-indicator-radio sort__content--radio"></div>
                                </label>
                            </div>
                            <div className="content__item">
                                <label className="content__input content__input--margin">
                                    Картонная коробка
                                    <input className="content__checked-input" value="all" type="radio"  />
                                    <div className="control-indicator-radio sort__content--radio"></div>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sort__item">
                    <div className="sort__select">
                        <div className="sort__title title">Кому</div>
                        <div className="content sort__content">
                            <div className="content__item">
                                <label className="content__input content__input--margin">
                                    Боссу
                                    <input className="content__checked-input" value="all" type="radio" />
                                    <div className="control-indicator-radio sort__content--radio"></div>
                                </label>
                            </div>
                            <div className="content__item">
                                <label className="content__input content__input--margin">
                                    Брату
                                    <input className="content__checked-input" value="all" type="radio" />
                                    <div className="control-indicator-radio sort__content--radio"></div>
                                </label>
                            </div>
                            <div className="content__item">
                                <label className="content__input content__input--margin">
                                    Другу
                                    <input className="content__checked-input" value="all" type="radio"  />
                                    <div className="control-indicator-radio sort__content--radio"></div>
                                </label>
                            </div>
                            <div className="content__item">
                                <label className="content__input content__input--margin">
                                    Коллеге
                                    <input className="content__checked-input" value="all" type="radio"  />
                                    <div className="control-indicator-radio sort__content--radio"></div>
                                </label>
                            </div>
                            <div className="content__item">
                                <label className="content__input content__input--margin">
                                    Мужу
                                    <input className="content__checked-input" value="all" type="radio"  />
                                    <div className="control-indicator-radio sort__content--radio"></div>
                                </label>
                            </div>
                            <div className="content__item">
                                <label className="content__input content__input--margin">
                                    Папе
                                    <input className="content__checked-input" value="all" type="radio"  />
                                    <div className="control-indicator-radio sort__content--radio"></div>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sort__item">
                    <div className="sort__select">
                        <div className="sort__title title">Сортировать</div>
                        <div className="content sort__content">
                            <div className="content__item">
                                <label className="content__input content__input--margin">
                                    Популярные
                                    <input className="content__checked-input" name="sort-items" checked type="radio" />
                                    <div className="control-indicator-radio"></div>
                                </label>
                            </div>
                            <div className="content__item">
                                <label className="content__input content__input--margin">
                                    Новинки
                                    <input className="content__checked-input" name="sort-items" type="radio" />
                                    <div className="control-indicator-radio"></div>
                                </label>
                            </div>
                            <div className="content__item">
                                <label className="content__input content__input--margin">
                                    Сначала дорогие
                                    <input className="content__checked-input" name="sort-items" type="radio"  />
                                    <div className="control-indicator-radio"></div>
                                </label>
                            </div>
                            <div className="content__item">
                                <label className="content__input content__input--margin">
                                    Сначала дешевые
                                    <input className="content__checked-input" name="sort-items" type="radio"  />
                                    <div className="control-indicator-radio"></div>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="accept">
                <button type="button" className="accept__btn accept__btn-cancel">Отменить</button>
                <button type="button" className="accept__btn accept__btn--show">Показать</button>
            </div>
        </div>
    );
};

export default Filter;