import React, {useRef, useState} from 'react';
import "./constructor.scss"
import ProductList from "../ProductList";
import Modal from "../Modal";
import closeIcon from "../../static/img/close-line.svg";
import {Link} from "react-router-dom";
import close from "../../static/img/close-line.svg";

const Constructor = () => {
    const [modalActive, setModalActive] = useState(false)
    const [kit, setKit] = useState(false)
    const filterRef = useRef(null);
    const sortRef = useRef(null);
    const filterMobileRef = useRef(null);

    const filterToggle = () => filterRef.current.classList.toggle("open")
    const sortToggle = () => sortRef.current.classList.toggle("open")
    const filterMobileAdd = () => filterMobileRef.current.classList.add("mobile-modal")
    const filterMobileDelete = () => filterMobileRef.current.classList.remove("mobile-modal")
    return (
        <div className={kit ? "builder-bg" : "builder builder-top"}>
            <div className="left">
                <div className="left__boxes">
                    <div className="row">
                        <div className="col-6 builder__column">
                            <div className="left__box">
                                <div className="left__cover">
                                    <div className="left__image">
                                        <img className="left__img"
                                             src="https://manbox.ru/image/cachewebp/catalog/builder/packing/DSC_3665_1-200x200.webp"
                                             alt=""/>
                                    </div>
                                    <div className="left__name">
                                        <p className="left__title">Деревянный ящик MANBOX с ломом</p>
                                    </div>
                                    <div className="left__price">
                                        <div className="left__info">
                                            <div className="left__info--price">1790 р.</div>
                                            <div className="left__old--price">2290 р.</div>
                                        </div>
                                    </div>
                                </div>
                                <div onClick={() => setModalActive(true)} className="button-description">
                                    <div className="button-description__cover">
                                        <div className="button-description__btn">
                                        </div>
                                    </div>
                                </div>
                                <div className="various">
                                    <div className="various__craft various-graft"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 builder__column">
                            <div className="left__box">
                                <div className="left__cover">
                                    <div className="left__image">
                                        <img className="left__img"
                                             src="https://manbox.ru/image/cachewebp/catalog/builder/packing/DSC_3665_1-200x200.webp"
                                             alt=""/>
                                    </div>
                                    <div className="left__name">
                                        <p className="left__title">Деревянный ящик MANBOX с ломом</p>
                                    </div>
                                    <div className="left__price">
                                        <div className="left__info">
                                            <div className="left__info--price">1790 р.</div>
                                            <div className="left__old--price">2290 р.</div>
                                        </div>
                                    </div>
                                </div>
                                <div onClick={() => setModalActive(true)} className="button-description">
                                    <div className="button-description__cover">
                                        <div className="button-description__btn">
                                        </div>
                                    </div>
                                </div>
                                <div className="various">
                                    <div className="various__craft"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 builder__column">
                            <div className="left__box">
                                <div className="left__cover">
                                    <div className="left__image">
                                        <img className="left__img"
                                             src="https://manbox.ru/image/cachewebp/catalog/builder/packing/DSC_3665_1-200x200.webp"
                                             alt=""/>
                                    </div>
                                    <div className="left__name">
                                        <p className="left__title">Деревянный ящик MANBOX с ломом</p>
                                    </div>
                                    <div className="left__price">
                                        <div className="left__info">
                                            <div className="left__info--price">1790 р.</div>
                                            <div className="left__old--price">2290 р.</div>
                                        </div>
                                    </div>
                                </div>
                                <div onClick={() => setModalActive(true)} className="button-description">
                                    <div className="button-description__cover">
                                        <div className="button-description__btn">
                                        </div>
                                    </div>
                                </div>
                                <div className="various">
                                    <div className="various__craft"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 builder__column">
                            <div className="left__box">
                                <div className="left__cover">
                                    <div className="left__image">
                                        <img className="left__img"
                                             src="https://manbox.ru/image/cachewebp/catalog/builder/packing/DSC_3665_1-200x200.webp"
                                             alt=""/>
                                    </div>
                                    <div className="left__name">
                                        <p className="left__title">Деревянный ящик MANBOX с ломом</p>
                                    </div>
                                    <div className="left__price">
                                        <div className="left__info">
                                            <div className="left__info--price">1790 р.</div>
                                            <div className="left__old--price">2290 р.</div>
                                        </div>
                                    </div>
                                </div>
                                <div onClick={() => setModalActive(true)} className="button-description">
                                    <div className="button-description__cover">
                                        <div className="button-description__btn">
                                        </div>
                                    </div>
                                </div>
                                <div className="various">
                                    <div className="various__craft"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="products">
                    <div className="choose set-constructor__choose">
                        <h2 className="choose-pack">
                            ШАГ 2: ДОБАВЬТЕ ТОВАРЫ
                        </h2>
                    </div>
                    <div className="filter">
                        <div className="row filter__row">
                            <div className="col-4 filter__column">
                                <div onClick={filterToggle} ref={filterRef} className="filter__select">
                                    <div className="filter__title">
                                        Выбрать категорию
                                    </div>
                                    <div className="content">
                                        <div className="content__item">
                                            <label className="content__input">
                                                <b className="content__category">Все товары</b>
                                                <input className="content__checked-input" value="all" checked="checked"
                                                       type="radio" name="filter-category"/>
                                                <div className="control-indicator-radio"></div>
                                            </label>
                                        </div>
                                        <div className="content__item">
                                            <label className="content__input">
                                                <b className="content__category">АКЦИЯ</b>
                                                <input className="content__checked-input" value="sale" type="radio"
                                                       name="filter-category"/>
                                                <div className="control-indicator-radio"></div>
                                            </label>
                                        </div>
                                        <div className="content__item">
                                            <label className="content__input">
                                                <b className="content__category">Авто</b>
                                                <input className="content__checked-input" type="radio"
                                                       name="filter-category"/>
                                                <div className="control-indicator-radio"></div>
                                            </label>
                                        </div>
                                        <div className="content__item">
                                            <label className="content__input">
                                                <b className="content__category">Сеты</b>
                                                <input className="content__checked-input" type="radio"
                                                       name="filter-category"/>
                                                <div className="control-indicator-radio"></div>
                                            </label>
                                            <label className="content__input">
                                                Гастрономические сеты
                                                <input className="content__checked-input" type="radio"
                                                       name="filter-category"/>
                                                <div className="control-indicator-radio"></div>
                                            </label>
                                            <label className="content__input">
                                                Сеты для бара
                                                <input className="content__checked-input" type="radio"
                                                       name="filter-category"/>
                                                <div className="control-indicator-radio"></div>
                                            </label>
                                            <label className="content__input">
                                                Сеты для красоты
                                                <input className="content__checked-input" type="radio"
                                                       name="filter-category"/>
                                                <div className="control-indicator-radio"></div>
                                            </label>
                                            <label className="content__input">
                                                Сеты для приготовления алкоголя
                                                <input className="content__checked-input" type="radio"
                                                       name="filter-category"/>
                                                <div className="control-indicator-radio"></div>
                                            </label>
                                            <label className="content__input">
                                                Сеты для развлечений
                                                <input className="content__checked-input" type="radio"
                                                       name="filter-category"/>
                                                <div className="control-indicator-radio"></div>
                                            </label>
                                            <label className="content__input">
                                                Сеты для туризма и отдыха
                                                <input className="content__checked-input" type="radio"
                                                       name="filter-category"/>
                                                <div className="control-indicator-radio"></div>
                                            </label>
                                        </div>
                                        <div className="content__item">
                                            <label className="content__input">
                                                <b className="content__category">Бар</b>
                                                <input className="content__checked-input" type="radio"
                                                       name="filter-category"/>
                                                <div className="control-indicator-radio"></div>
                                            </label>
                                            <label className="content__input">
                                                Барный инвентарь
                                                <input className="content__checked-input" type="radio"
                                                       name="filter-category"/>
                                                <div className="control-indicator-radio"></div>
                                            </label>
                                            <label className="content__input">
                                                Посуда
                                                <input className="content__checked-input" type="radio"
                                                       name="filter-category"/>
                                                <div className="control-indicator-radio"></div>
                                            </label>
                                            <label className="content__input">
                                                Приготовление алкоголя
                                                <input className="content__checked-input" type="radio"
                                                       name="filter-category"/>
                                                <div className="control-indicator-radio"></div>
                                            </label>
                                        </div>
                                        <div className="content__item">
                                            <label className="content__input">
                                                Гастрономия
                                                <input className="content__checked-input" type="radio"
                                                       name="filter-category"/>
                                                <div className="control-indicator-radio"></div>
                                            </label>
                                            <label className="content__input">
                                                Для приготовления блюд
                                                <input className="content__checked-input" type="radio"
                                                       name="filter-category"/>
                                                <div className="control-indicator-radio"></div>
                                            </label>
                                            <label className="content__input">
                                                Напитки
                                                <input className="content__checked-input" type="radio"
                                                       name="filter-category"/>
                                                <div className="control-indicator-radio"></div>
                                            </label>
                                            <label className="content__input">
                                                Соусы, специи
                                                <input className="content__checked-input" type="radio"
                                                       name="filter-category"/>
                                                <div className="control-indicator-radio"></div>
                                            </label>
                                            <label className="content__input">
                                                Мясо
                                                <input className="content__checked-input" type="radio"
                                                       name="filter-category"/>
                                                <div className="control-indicator-radio"></div>
                                            </label>
                                            <label className="content__input">
                                                Рыба
                                                <input className="content__checked-input" type="radio"
                                                       name="filter-category"/>
                                                <div className="control-indicator-radio"></div>
                                            </label>
                                            <label className="content__input">
                                                Сладости
                                                <input className="content__checked-input" type="radio"
                                                       name="filter-category"/>
                                                <div className="control-indicator-radio"></div>
                                            </label>
                                            <label className="content__input">
                                                Снеки
                                                <input className="content__checked-input" type="radio"
                                                       name="filter-category"/>
                                                <div className="control-indicator-radio"></div>
                                            </label>
                                            <label className="content__input">
                                                Чай и кофе
                                                <input className="content__checked-input" type="radio"
                                                       name="filter-category"/>
                                                <div className="control-indicator-radio"></div>
                                            </label>
                                        </div>
                                        <div className="content__item">
                                            <label className="content__input">
                                                <b className="content__category">Инструменты</b>
                                                <input className="content__checked-input" type="radio"
                                                       name="filter-category"/>
                                                <div className="control-indicator-radio"></div>
                                            </label>
                                        </div>
                                        <div className="content__item">
                                            <label className="content__input">
                                                <b className="content__category">Развлечения</b>
                                                <input className="content__checked-input" type="radio"
                                                       name="filter-category"/>
                                                <div className="control-indicator-radio"></div>
                                            </label>
                                        </div>
                                        <div className="content__item">
                                            <label className="content__input">
                                                <b className="content__category">Туризм и отдых</b>
                                                <input className="content__checked-input" type="radio"
                                                       name="filter-category"/>
                                                <div className="control-indicator-radio"></div>
                                            </label>
                                            <label className="content__input">
                                                Рыбалка
                                                <input className="content__checked-input" type="radio"
                                                       name="filter-category"/>
                                                <div className="control-indicator-radio"></div>
                                            </label>
                                            <label className="content__input">
                                                Походный инвентарь
                                                <input className="content__checked-input" type="radio"
                                                       name="filter-category"/>
                                                <div className="control-indicator-radio"></div>
                                            </label>
                                            <label className="content__input">
                                                Путешествия
                                                <input className="content__checked-input" type="radio"
                                                       name="filter-category"/>
                                                <div className="control-indicator-radio"></div>
                                            </label>
                                            <label className="content__input">
                                                Спортивные товары
                                                <input className="content__checked-input" type="radio"
                                                       name="filter-category"/>
                                                <div className="control-indicator-radio"></div>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 filter__col">
                                <div onClick={sortToggle} ref={sortRef} className="filter__select">
                                    <div className="filter__title">
                                        Сортировать
                                    </div>
                                    <div className="content">
                                        <div className="content__item">
                                            <label className="content__input">
                                                <b className="content__category">Популярные</b>
                                                <input className="content__checked-input" type="radio" name="sort"/>
                                                <div className="control-indicator-radio"></div>
                                            </label>
                                        </div>
                                        <div className="content__item">
                                            <label className="content__input">
                                                <b className="content__category">Новинки</b>
                                                <input className="content__checked-input" type="radio" name="sort"/>
                                                <div className="control-indicator-radio"></div>
                                            </label>
                                        </div>
                                        <div className="content__item">
                                            <label className="content__input">
                                                <b className="content__category">Сначала дорогие</b>
                                                <input className="content__checked-input" type="radio" name="sort"/>
                                                <div className="control-indicator-radio"></div>
                                            </label>
                                        </div>
                                        <div className="content__item">
                                            <label className="content__input">
                                                <b className="content__category">Сначала дешевые</b>
                                                <input className="content__checked-input" type="radio" name="sort"/>
                                                <div className="control-indicator-radio"></div>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 filter__col">
                                <div className="filter__search">
                                    <input className="filter__input" type="text" placeholder="Поиск по названию"/>
                                </div>
                            </div>
                            <div onClick={filterMobileAdd} className="filter__svg">Фильтр
                                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                                    <g fill="none" fillRule="evenodd">
                                        <path d="M0 0h24v24H0z"></path>
                                        <path data-v-a5bc8348=""
                                              d="M4.126 6a4.002 4.002 0 017.748 0H22a1 1 0 010 2H11.874a4.002 4.002 0 01-7.748 0H2a1 1 0 110-2h2.126zm8 10a4.002 4.002 0 017.748 0H22a1 1 0 010 2h-2.126a4.002 4.002 0 01-7.748 0H2a1 1 0 010-2h10.126zM16 19a2 2 0 100-4 2 2 0 000 4zM8 9a2 2 0 100-4 2 2 0 000 4z"
                                              fill="currentColor" fillRule="nonzero"></path>
                                    </g>
                                </svg>
                            </div>
                        </div>
                        <div className="filter__mobile-filters" ref={filterMobileRef}>
                            <div className="filter__mobile-block">
                                <div className="sort__top-items filter__top">
                                    <div className="sort__title">Фильтры</div>
                                    <div onClick={filterMobileDelete} className="sort__close"><img className="sort__close-btn" src={close} alt=""/>
                                    </div>
                                </div>
                                <div className="filters">
                                    <div className="col-6 mobile-filters">
                                        <div className="content content-hidden">
                                            <div className="content__item">
                                                <label className="content__input">
                                                    <b className="content__category">Все товары</b>
                                                    <input className="content__checked-input" value="all"
                                                           checked="checked" type="radio" name="filter-category"/>
                                                    <div className="control-indicator-radio"></div>
                                                </label>
                                            </div>
                                            <div className="content__item">
                                                <label className="content__input">
                                                    <b className="content__category">АКЦИЯ</b>
                                                    <input className="content__checked-input" value="sale" type="radio"
                                                           name="filter-category"/>
                                                    <div className="control-indicator-radio"></div>
                                                </label>
                                            </div>
                                            <div className="content__item">
                                                <label className="content__input">
                                                    <b className="content__category">Авто</b>
                                                    <input className="content__checked-input" type="radio"
                                                           name="filter-category"/>
                                                    <div className="control-indicator-radio"></div>
                                                </label>
                                            </div>
                                            <div className="content__item">
                                                <label className="content__input">
                                                    <b className="content__category">Сеты</b>
                                                    <input className="content__checked-input" type="radio"
                                                           name="filter-category"/>
                                                    <div className="control-indicator-radio"></div>
                                                </label>
                                                <label className="content__input">
                                                    Гастрономические сеты
                                                    <input className="content__checked-input" type="radio"
                                                           name="filter-category"/>
                                                    <div className="control-indicator-radio"></div>
                                                </label>
                                                <label className="content__input">
                                                    Сеты для бара
                                                    <input className="content__checked-input" type="radio"
                                                           name="filter-category"/>
                                                    <div className="control-indicator-radio"></div>
                                                </label>
                                                <label className="content__input">
                                                    Сеты для красоты
                                                    <input className="content__checked-input" type="radio"
                                                           name="filter-category"/>
                                                    <div className="control-indicator-radio"></div>
                                                </label>
                                                <label className="content__input">
                                                    Сеты для приготовления алкоголя
                                                    <input className="content__checked-input" type="radio"
                                                           name="filter-category"/>
                                                    <div className="control-indicator-radio"></div>
                                                </label>
                                                <label className="content__input">
                                                    Сеты для развлечений
                                                    <input className="content__checked-input" type="radio"
                                                           name="filter-category"/>
                                                    <div className="control-indicator-radio"></div>
                                                </label>
                                                <label className="content__input">
                                                    Сеты для туризма и отдыха
                                                    <input className="content__checked-input" type="radio"
                                                           name="filter-category"/>
                                                    <div className="control-indicator-radio"></div>
                                                </label>
                                            </div>
                                            <div className="content__item">
                                                <label className="content__input">
                                                    <b className="content__category">Бар</b>
                                                    <input className="content__checked-input" type="radio"
                                                           name="filter-category"/>
                                                    <div className="control-indicator-radio"></div>
                                                </label>
                                                <label className="content__input">
                                                    Барный инвентарь
                                                    <input className="content__checked-input" type="radio"
                                                           name="filter-category"/>
                                                    <div className="control-indicator-radio"></div>
                                                </label>
                                                <label className="content__input">
                                                    Посуда
                                                    <input className="content__checked-input" type="radio"
                                                           name="filter-category"/>
                                                    <div className="control-indicator-radio"></div>
                                                </label>
                                                <label className="content__input">
                                                    Приготовление алкоголя
                                                    <input className="content__checked-input" type="radio"
                                                           name="filter-category"/>
                                                    <div className="control-indicator-radio"></div>
                                                </label>
                                            </div>
                                            <div className="content__item">
                                                <label className="content__input">
                                                    Гастрономия
                                                    <input className="content__checked-input" type="radio"
                                                           name="filter-category"/>
                                                    <div className="control-indicator-radio"></div>
                                                </label>
                                                <label className="content__input">
                                                    Для приготовления блюд
                                                    <input className="content__checked-input" type="radio"
                                                           name="filter-category"/>
                                                    <div className="control-indicator-radio"></div>
                                                </label>
                                                <label className="content__input">
                                                    Напитки
                                                    <input className="content__checked-input" type="radio"
                                                           name="filter-category"/>
                                                    <div className="control-indicator-radio"></div>
                                                </label>
                                                <label className="content__input">
                                                    Соусы, специи
                                                    <input className="content__checked-input" type="radio"
                                                           name="filter-category"/>
                                                    <div className="control-indicator-radio"></div>
                                                </label>
                                                <label className="content__input">
                                                    Мясо
                                                    <input className="content__checked-input" type="radio"
                                                           name="filter-category"/>
                                                    <div className="control-indicator-radio"></div>
                                                </label>
                                                <label className="content__input">
                                                    Рыба
                                                    <input className="content__checked-input" type="radio"
                                                           name="filter-category"/>
                                                    <div className="control-indicator-radio"></div>
                                                </label>
                                                <label className="content__input">
                                                    Сладости
                                                    <input className="content__checked-input" type="radio"
                                                           name="filter-category"/>
                                                    <div className="control-indicator-radio"></div>
                                                </label>
                                                <label className="content__input">
                                                    Снеки
                                                    <input className="content__checked-input" type="radio"
                                                           name="filter-category"/>
                                                    <div className="control-indicator-radio"></div>
                                                </label>
                                                <label className="content__input">
                                                    Чай и кофе
                                                    <input className="content__checked-input" type="radio"
                                                           name="filter-category"/>
                                                    <div className="control-indicator-radio"></div>
                                                </label>
                                            </div>
                                            <div className="content__item">
                                                <label className="content__input">
                                                    <b className="content__category">Инструменты</b>
                                                    <input className="content__checked-input" type="radio"
                                                           name="filter-category"/>
                                                    <div className="control-indicator-radio"></div>
                                                </label>
                                            </div>
                                            <div className="content__item">
                                                <label className="content__input">
                                                    <b className="content__category">Развлечения</b>
                                                    <input className="content__checked-input" type="radio"
                                                           name="filter-category"/>
                                                    <div className="control-indicator-radio"></div>
                                                </label>
                                            </div>
                                            <div className="content__item">
                                                <label className="content__input">
                                                    <b className="content__category">Туризм и отдых</b>
                                                    <input className="content__checked-input" type="radio"
                                                           name="filter-category"/>
                                                    <div className="control-indicator-radio"></div>
                                                </label>
                                                <label className="content__input">
                                                    Рыбалка
                                                    <input className="content__checked-input" type="radio"
                                                           name="filter-category"/>
                                                    <div className="control-indicator-radio"></div>
                                                </label>
                                                <label className="content__input">
                                                    Походный инвентарь
                                                    <input className="content__checked-input" type="radio"
                                                           name="filter-category"/>
                                                    <div className="control-indicator-radio"></div>
                                                </label>
                                                <label className="content__input">
                                                    Путешествия
                                                    <input className="content__checked-input" type="radio"
                                                           name="filter-category"/>
                                                    <div className="control-indicator-radio"></div>
                                                </label>
                                                <label className="content__input">
                                                    Спортивные товары
                                                    <input className="content__checked-input" type="radio"
                                                           name="filter-category"/>
                                                    <div className="control-indicator-radio"></div>
                                                </label>
                                                <div className="button content__button">
                                                    <button className="btn content__btn">
                                                        Применить
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product product--margin">
                        <div className="row">
                            <ProductList setModalActive={setModalActive}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="right__cart">
                    <div className={kit ? "right__top--transform" : "right__top"}>
                        <div className="right__top-block">
                            <div className="right__chosen-title">
                                <h3 className="right__title">ВАШ НАБОР</h3>
                                <div className="right__button">
                                    <button className="right__close"> очистить
                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 1L1 9" stroke="black" strokeWidth="2" strokeLinecap="round">
                                            </path>
                                            <path d="M1 1L9 9" stroke="black" strokeWidth="2" strokeLinecap="round">
                                            </path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="button" onClick={() => setKit(false)}>
                                <div className="modal-close">
                                    <a className="close--btn">
                                        <img className="close--icon" src={closeIcon} alt=""/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className=" products right__products">
                            <div className="right__products--row">
                                <div className="right__packing--item">
                                    <p className="right__product--name">Картонная коробка MANBOX 29х21х11 см
                                        ОРАНЖЕВАЯ</p>
                                </div>
                                <div className="right__product--amount">
                                    <div className="right__product--number">
                                        <input className="right__input" type="text" disabled="disabled"/>
                                    </div>
                                </div>
                                <div className="right__product--price">
                                    <p className="product__price--number">690 р.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right__bottom">
                        <div className="right__filling">
                            <p className="right__filling--title">НАБОР ЗАПОЛНЕН НА 0%</p>
                            <div className="progress">
                                <div role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"
                                     className="progress__bar"></div>
                            </div>
                        </div>
                        <div className="right__totals">
                            <div className="options--block">
                                <div className="open">
                                    <div className="open__plus">
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z"
                                                fill="black" stroke="black" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round">
                                            </path>
                                            <path d="M11 7V15" stroke="white" strokeWidth="2" strokeLinecap="round"
                                                  strokeLinejoin="round"></path>
                                            <path d="M7 11H15" stroke="white" strokeWidth="2" strokeLinecap="round"
                                                  strokeLinejoin="round">
                                            </path>
                                        </svg>
                                    </div>
                                    <div className="open__form">
                                        <span className="open__title">
                                            ОФОРМЛЕНИЕ
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="right__total--amount">
                                <div className="right__total--number">
                                    Итого 690 р.
                                </div>
                            </div>
                        </div>
                        <div className="checkout">
                            <div className="checkout__present">
                                <div className="checkout__fill">
                                    <div className="checkout__text">
                                        Добавьте ещё что-нибудь, чтобы сумма заказа стала 4000 р. и
                                        <b className="main--title"> выбирайте подарок!</b>
                                    </div>
                                    <div className="progress">
                                        <div role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"
                                             className="progress--bar"></div>
                                    </div>
                                </div>
                                <div className="checkout__icon">
                                    <svg className="checkout__present--icon" xmlns="http://www.w3.org/2000/svg"
                                         aria-hidden="true" focusable="false" width="20px" height="20px"
                                         preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16">
                                        <g fillRule="evenodd">
                                            <path d="M0 4h16v3H0z">
                                            </path>
                                            <path
                                                d="M12.66 9.777a.681.681 0 0 1 0 1.029a.87.87 0 0 1-1.14 0L8.485 8.064h-.996l-3.035 2.742a.87.87 0 0 1-1.14 0a.683.683 0 0 1 0-1.029l1.898-1.713L1 8v8h14V8l-4.238.064l1.898 1.713z"></path>
                                            <path
                                                d="M11.928.097c-1.159 0-2.623.838-3.96 2.253C6.634.935 5.17.097 4.014.097c-.592 0-1.098.221-1.46.637c-.599.684-.678 2.021-.293 3.304h1.96s-.59-1.007-.428-1.884c.015-.018.078-.051.22-.051c.573 0 1.905.678 3.057 1.935h1.845c1.157-1.264 2.42-1.935 3.013-1.935c.176 0 .22.049.22.049c.124 1.138-.432 1.886-.432 1.886h2.038c.387-1.283.23-2.62-.365-3.304c-.364-.416-.868-.637-1.46-.637z">
                                            </path>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                            <div className="checkout__error--block">
                                Минимальная сумма заказа
                                <b>1500 р</b>
                            </div>
                            <div className="button checkout__button">
                                <button className={kit ? "checkout__btn-display" : "checkout__btn"}
                                        onClick={() => setKit(true)}>Посмотреть
                                </button>
                                <button className={kit ? "checkout__btn" : "checkout__btn-display"}>Оформить заказ
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal active={modalActive} setActive={setModalActive}/>
        </div>
    );
};

export default Constructor;