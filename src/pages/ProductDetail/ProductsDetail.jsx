import React from 'react';
import Helmet from "../../layout/Helmet";
import CommonRouter from "../../components/CommonRouter";
import CommonTitle from "../../components/CommonTitle";
import rightArrow from "../../static/img/arrow-right-line.svg"
import leftArrow from "../../static/img/arrow-left-line.svg"
import "../../styles/products-detail.scss"

const ProductsDetail = () => {

    const saleRouters = [
        {
            route: "home",
            title: "Главная"
        },
        {
            route: "all-products",
            title: "Акции"
        },

        {
            route: "product-detail",
            title: "Большой набор бармена «Бармен Box XL»"
        },
    ]
    return (
        <Helmet title="Products Detail">
            <section className="products-detail">
                <div className="container">
                    <CommonRouter routes={saleRouters}/>
                    <div className="row">
                        <div className="col-6">
                            <CommonTitle title="БОЛЬШОЙ НАБОР БАРМЕНА «БАРМЕН BOX XL»"/>
                            <div className="detail">
                                <div className="detail__wrapper">
                                    <div className="model detail__model">
                                        Код товара: MB-01
                                    </div>
                                    <div className="stock detail__stock"><span
                                        className="icon detail__icon"><svg width="19"
                                                                           height="19" viewBox="0 0 19 19"
                                                                           fill="none"
                                                                           xmlns="http://www.w3.org/2000/svg"
                                                                           className=""><path
                                        d="M17 9.24514V9.98114C16.999 11.7063 16.4404 13.3849 15.4075 14.7666C14.3745 16.1483 12.9226 17.1591 11.2683 17.6483C9.61394 18.1374 7.84581 18.0787 6.22757 17.4808C4.60934 16.883 3.22772 15.778 2.28877 14.3308C1.34981 12.8836 0.903833 11.1716 1.01734 9.45019C1.13085 7.72879 1.79777 6.0902 2.91862 4.7788C4.03948 3.4674 5.55423 2.55345 7.23695 2.17326C8.91967 1.79307 10.6802 1.96701 12.256 2.66914"
                                        stroke="#665CFF"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"></path> <path
                                        data-v-36f493c7="" d="M17.0016 3.58105L9.00156 11.5891L6.60156 9.18905"
                                        stroke="#665CFF" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round"></path></svg></span> <span
                                        data-v-36f493c7="">в наличии</span></div>
                                    <div className="add-to-wishlist">
                                        <div className="mobile-type">
                                            <div className="buttons">
                                                <button className="detail__button" type="button">Сохранить</button>
                                            </div>
                                            <div className="align-self-center icon">
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
                                </div>
                                <div className="detail__customer-price">
                                    <div className="icon detail__icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                             className="ui-g1">
                                            <path fill="#665cff"
                                                  d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2ZM8 2a3 3 0 0 1 3 3c0 1.702.561 3.35 1.086 4.531A16.248 16.248 0 0 0 12.83 11H3.17a16.254 16.254 0 0 0 .744-1.469C4.439 8.351 5 6.701 5 5a3 3 0 0 1 3-3Zm6.556 7.988a14.277 14.277 0 0 1-.642-1.27C13.439 7.65 13 6.299 13 5A5 5 0 1 0 3 5c0 1.298-.439 2.65-.914 3.719-.233.526-.467.964-.642 1.27-.18.314-.444.63-.444 1.011v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1c0-.38-.264-.697-.444-1.012Z"></path>
                                        </svg>
                                    </div>
                                    <div className="detail__text">Предложить свою цену</div>
                                </div>
                                <div className="detail__price-wrapper">
                                    <div className="detail__price-info">
                                        <div className="price-block">
                                            <div className="detail__price">6990 р.</div>
                                        </div>
                                        <div className="detail__installment-price">
                                            <div className="detail__part">1747 р.</div>
                                            <div className="detail__period"> - рассрочка на 8 недель</div>
                                            <div className="detail__help-button">
                                                <div>
                                                    <div className="help"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="detail__sostav">
                                        <div className="sostav-label">
                                            <div className="count">14</div>
                                            <div className="text">товаров в наборе</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="analogs">
                                    <div className="analogs__heading">Похожие наборы:</div>
                                    <div className="analogs__items">
                                        <div className="analogs__item">
                                            <div className="analogs__items-wrapper">
                                                <div className="analogs__top">Пивовар Box</div>
                                                <div className="analogs__bottom"><small className="analogs__small">6990
                                                    р.</small></div>
                                            </div>
                                        </div>
                                        <div className="analogs__item">
                                            <div className="analogs__items-wrapper">
                                                <div className="analogs__top">Пивовар Box</div>
                                                <div className="analogs__bottom"><small className="analogs__small">6990
                                                    р.</small></div>
                                            </div>
                                        </div>
                                        <div className="analogs__item">
                                            <div className="analogs__items-wrapper">
                                                <div className="analogs__top">Пивовар Box</div>
                                                <div className="analogs__bottom"><small className="analogs__small">6990
                                                    р.</small></div>
                                            </div>
                                        </div>
                                        <div className="analogs__item">
                                            <div className="analogs__items-wrapper">
                                                <div className="analogs__top">Пивовар Box</div>
                                                <div className="analogs__bottom"><small className="analogs__small">6990
                                                    р.</small></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="sticky--top">
                                    <div className="sticky--top__links">
                                        <div className="sticky--top__text">💯 гарантия качества</div>
                                    </div>
                                    <div className="sticky__actions sticky--top">
                                        <div className="buttons button-mobile-type">
                                            <div className="add-to-cart">
                                                <div className="mobile--type">
                                                    <div className="outside_cart">
                                                        <button type="button"
                                                                className="button sticky--top__button">
                                                            <span className="add--span">В корзину</span>
                                                            <div className="price-block sticky--top__price">
                                                                <div className="price">6990 р.</div>
                                                            </div>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="shipping">
                                                <div
                                                    className="shipping__items">
                                                    <div className="shipping__icon icon">
                                                        <svg data-v-1d87fb94="" width="22" height="19"
                                                             viewBox="0 0 22 19" fill="none"
                                                             xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M9.42387 2.07414C9.73899 1.97784 10.073 1.96089 10.3963 2.02479C10.7195 2.08869 11.022 2.23148 11.2768 2.44044C11.5315 2.64941 11.7307 2.91809 11.8566 3.22259C11.9825 3.52709 12.0313 3.85799 11.9985 4.18586C11.9657 4.51373 11.8524 4.82842 11.6687 5.10196C11.4849 5.37549 11.2365 5.5994 10.9454 5.75376C10.6542 5.90813 10.3295 5.98818 10 5.9868H1M12.4239 17.8995C12.739 17.9958 13.073 18.0127 13.3963 17.9488C13.7195 17.8849 14.022 17.7421 14.2768 17.5332C14.5315 17.3242 14.7307 17.0555 14.8566 16.751C14.9825 16.4465 15.0313 16.1156 14.9985 15.7877C14.9657 15.4599 14.8524 15.1452 14.6687 14.8716C14.4849 14.5981 14.2365 14.3742 13.9454 14.2198C13.6542 14.0655 13.3295 13.9854 13 13.9868H1M16.73 5.7168C17.0208 5.42668 17.3787 5.21271 17.7719 5.09381C18.1652 4.97491 18.5816 4.95474 18.9845 5.03508C19.3874 5.11543 19.7642 5.29382 20.0817 5.55447C20.3993 5.81512 20.6477 6.15 20.805 6.52949C20.9623 6.90898 21.0236 7.32139 20.9836 7.73025C20.9436 8.1391 20.8035 8.53179 20.5756 8.8736C20.3477 9.2154 20.0391 9.49578 19.6771 9.68995C19.3151 9.88411 18.9108 9.98606 18.5 9.9868H1"
                                                                stroke="#665CFF" strokeWidth="2"
                                                                strokeLinecap="round" strokeLinejoin="round"></path>
                                                        </svg>
                                                    </div>
                                                    <div className="shipping--text">доставим <span
                                                    >28.01.2023</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="options">
                                    <div className="options__list">
                                        <div className="options__heading">
                                            <div className="options__add">
                                                <div className="options__text">Добавить к набору</div>
                                                </div>
                                            <div className="arrows">
                                                <img className="arrows__arrow" src={leftArrow} alt=""/>
                                                <img className="arrows__arrow" src={rightArrow} alt=""/>
                                            </div>
                                        </div>
                                        <div className="tabs options__tabs">
                                            <div className="tabs__items options__tab-items">
                                                <div className="tab options__tab tab-active">Опции</div>
                                                <div className="tab options__tab">Товары</div>
                                            </div>
                                        </div>
                                        <div className="slider">
                                            <div className="slider__container">
                                                <div className="slider__wrapper">
                                                    <div className="slider__slide">
                                                        <div className="slider__item">
                                                            <div className="top">
                                                                <div className="top__photo">
                                                                    <div className="image">
                                                                        <img className="img" src="https://manbox.ru/image/cachewebp/catalog/options/otkritka-200x200.webp" alt=""/>
                                                                    </div>
                                                                    <div className="name">Подписать открытку</div>
                                                                </div>
                                                                <div className="price">99 р.</div>
                                                            </div>
                                                            <div className="buttons">
                                                                <button type="button">Добавить</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="slider__slide">
                                                        <div className="slider__item">
                                                            <div className="top">
                                                                <div className="top__photo">
                                                                    <div className="image">
                                                                        <img className="img" src="https://manbox.ru/image/cachewebp/catalog/options/otkritka-200x200.webp" alt=""/>
                                                                    </div>
                                                                    <div className="name">Подписать открытку</div>
                                                                </div>
                                                                <div className="price">99 р.</div>
                                                            </div>
                                                            <div className="buttons">
                                                                <button type="button top__button">Добавить</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="slider__slide">
                                                        <div className="slider__item">
                                                            <div className="top">
                                                                <div className="top__photo">
                                                                    <div className="image">
                                                                        <img className="img" src="https://manbox.ru/image/cachewebp/catalog/options/otkritka-200x200.webp" alt=""/>
                                                                    </div>
                                                                    <div className="name">Подписать открытку</div>
                                                                </div>
                                                                <div className="price">99 р.</div>
                                                            </div>
                                                            <div className="buttons">
                                                                <button type="button top__button">Добавить</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="slider__slide">
                                                        <div className="slider__item">
                                                            <div className="top">
                                                                <div className="top__photo">
                                                                    <div className="image">
                                                                        <img className="img" src="https://manbox.ru/image/cachewebp/catalog/options/otkritka-200x200.webp" alt=""/>
                                                                    </div>
                                                                    <div className="name">Подписать открытку</div>
                                                                </div>
                                                                <div className="price">99 р.</div>
                                                            </div>
                                                            <div className="buttons">
                                                                <button type="button top__button">Добавить</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="slider__slide">
                                                        <div className="slider__item">
                                                            <div className="top">
                                                                <div className="top__photo">
                                                                    <div className="image">
                                                                        <img className="img" src="https://manbox.ru/image/cachewebp/catalog/options/otkritka-200x200.webp" alt=""/>
                                                                    </div>
                                                                    <div className="name">Подписать открытку</div>
                                                                </div>
                                                                <div className="price">99 р.</div>
                                                            </div>
                                                            <div className="buttons">
                                                                <button type="button top__button">Добавить</button>
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
                        <div className="col-6">

                        </div>
                    </div>
                </div>
            </section>
        </Helmet>
    );
};

export default ProductsDetail;