import React from 'react';
import SearchIcon from '../../static/img/search-line.svg'
import "./product-card.scss";

const ProductCard = () => {
    return (
        <>
            <div className="col-4 product__column">
                <div className="product__item">
                    <div className="product__image">
                        <img className="product__img"
                             src="https://manbox.ru/image/cachewebp/catalog/builder/1441_new-270x270.webp" alt=""/>
                    </div>
                    <div className="product__quantity">
                        <div className="product__stock">
                            <span className="product__icon">
                                <svg data-v-36f493c7="" width="19" height="19" viewBox="0 0 19 19" fill="none"
                                     xmlns="http://www.w3.org/2000/svg" className=""><path data-v-36f493c7=""
                                                                                           d="M17 9.24514V9.98114C16.999 11.7063 16.4404 13.3849 15.4075 14.7666C14.3745 16.1483 12.9226 17.1591 11.2683 17.6483C9.61394 18.1374 7.84581 18.0787 6.22757 17.4808C4.60934 16.883 3.22772 15.778 2.28877 14.3308C1.34981 12.8836 0.903833 11.1716 1.01734 9.45019C1.13085 7.72879 1.79777 6.0902 2.91862 4.7788C4.03948 3.4674 5.55423 2.55345 7.23695 2.17326C8.91967 1.79307 10.6802 1.96701 12.256 2.66914"
                                                                                           stroke="#665CFF"
                                                                                           strokeWidth="2"
                                                                                           strokeLinecap="round"
                                                                                           strokeLinejoin="round"></path> <path
                                    data-v-36f493c7="" d="M17.0016 3.58105L9.00156 11.5891L6.60156 9.18905"
                                    stroke="#665CFF" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round"></path></svg>
                            </span>
                            <span className="product__stock--title">
                                в наличии
                            </span>
                        </div>
                    </div>
                    <div className="product__name">
                        Паштет из оленины с вяленой клюквой и шпинатом, 200 г
                    </div>
                    <div className="product__button">
                        <button className="product__btn product__search-btn">
                            <img className="search--icon" src={SearchIcon} alt=""/>
                        </button>
                        <button className="product__btn product__active--btn">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="8" y1="1" x2="8" y2="15" stroke="white" strokeWidth="2" strokeLinecap="round"></line> <line x1="1" y1="8" x2="15" y2="8" stroke="white" strokeWidth="2" strokeLinecap="round"></line></svg>
                        </button>

                    </div>
                    <div className="product__bottom">
                        <div className="product__price">
                            <div className="product__price-block">
                                <div className="product__price--number">
                                    550 р.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-4 product__column">
                <div className="product__item">
                    <div className="product__image">
                        <img className="product__img"
                             src="https://manbox.ru/image/cachewebp/catalog/builder/1441_new-270x270.webp" alt=""/>
                    </div>
                    <div className="product__quantity">
                        <div className="product__stock">
                            <span className="product__icon">
                                <svg data-v-36f493c7="" width="19" height="19" viewBox="0 0 19 19" fill="none"
                                     xmlns="http://www.w3.org/2000/svg" className=""><path data-v-36f493c7=""
                                                                                           d="M17 9.24514V9.98114C16.999 11.7063 16.4404 13.3849 15.4075 14.7666C14.3745 16.1483 12.9226 17.1591 11.2683 17.6483C9.61394 18.1374 7.84581 18.0787 6.22757 17.4808C4.60934 16.883 3.22772 15.778 2.28877 14.3308C1.34981 12.8836 0.903833 11.1716 1.01734 9.45019C1.13085 7.72879 1.79777 6.0902 2.91862 4.7788C4.03948 3.4674 5.55423 2.55345 7.23695 2.17326C8.91967 1.79307 10.6802 1.96701 12.256 2.66914"
                                                                                           stroke="#665CFF"
                                                                                           strokeWidth="2"
                                                                                           strokeLinecap="round"
                                                                                           strokeLinejoin="round"></path> <path
                                    data-v-36f493c7="" d="M17.0016 3.58105L9.00156 11.5891L6.60156 9.18905"
                                    stroke="#665CFF" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round"></path></svg>
                            </span>
                            <span className="product__stock--title">
                                в наличии
                            </span>
                        </div>
                    </div>
                    <div className="product__name">
                        Паштет из оленины с вяленой клюквой и шпинатом, 200 г
                    </div>
                    <div className="product__button">
                        <button className="product__btn product__search-btn">
                            <img className="search--icon" src={SearchIcon} alt=""/>
                        </button>
                        <button className="product__btn product__active--btn">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="8" y1="1" x2="8" y2="15" stroke="white" strokeWidth="2" strokeLinecap="round"></line> <line x1="1" y1="8" x2="15" y2="8" stroke="white" strokeWidth="2" strokeLinecap="round"></line></svg>
                        </button>

                    </div>
                    <div className="product__bottom">
                        <div className="product__price">
                            <div className="product__price-block">
                                <div className="product__price--number">
                                    550 р.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-4 product__column">
                <div className="product__item">
                    <div className="product__image">
                        <img className="product__img"
                             src="https://manbox.ru/image/cachewebp/catalog/builder/1441_new-270x270.webp" alt=""/>
                    </div>
                    <div className="product__quantity">
                        <div className="product__stock">
                            <span className="product__icon">
                                <svg data-v-36f493c7="" width="19" height="19" viewBox="0 0 19 19" fill="none"
                                     xmlns="http://www.w3.org/2000/svg" className=""><path data-v-36f493c7=""
                                                                                           d="M17 9.24514V9.98114C16.999 11.7063 16.4404 13.3849 15.4075 14.7666C14.3745 16.1483 12.9226 17.1591 11.2683 17.6483C9.61394 18.1374 7.84581 18.0787 6.22757 17.4808C4.60934 16.883 3.22772 15.778 2.28877 14.3308C1.34981 12.8836 0.903833 11.1716 1.01734 9.45019C1.13085 7.72879 1.79777 6.0902 2.91862 4.7788C4.03948 3.4674 5.55423 2.55345 7.23695 2.17326C8.91967 1.79307 10.6802 1.96701 12.256 2.66914"
                                                                                           stroke="#665CFF"
                                                                                           strokeWidth="2"
                                                                                           strokeLinecap="round"
                                                                                           strokeLinejoin="round"></path> <path
                                    data-v-36f493c7="" d="M17.0016 3.58105L9.00156 11.5891L6.60156 9.18905"
                                    stroke="#665CFF" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round"></path></svg>
                            </span>
                            <span className="product__stock--title">
                                в наличии
                            </span>
                        </div>
                    </div>
                    <div className="product__name">
                        Паштет из оленины с вяленой клюквой и шпинатом, 200 г
                    </div>
                    <div className="product__button">
                        <button className="product__btn product__search-btn">
                            <img className="search--icon" src={SearchIcon} alt=""/>
                        </button>
                        <button className="product__btn product__active--btn">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="8" y1="1" x2="8" y2="15" stroke="white" strokeWidth="2" strokeLinecap="round"></line> <line x1="1" y1="8" x2="15" y2="8" stroke="white" strokeWidth="2" strokeLinecap="round"></line></svg>
                        </button>

                    </div>
                    <div className="product__bottom">
                        <div className="product__price">
                            <div className="product__price-block">
                                <div className="product__price--number">
                                    550 р.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-4 product__column">
                <div className="product__item">
                    <div className="product__image">
                        <img className="product__img"
                             src="https://manbox.ru/image/cachewebp/catalog/builder/1441_new-270x270.webp" alt=""/>
                    </div>
                    <div className="product__quantity">
                        <div className="product__stock">
                            <span className="product__icon">
                                <svg data-v-36f493c7="" width="19" height="19" viewBox="0 0 19 19" fill="none"
                                     xmlns="http://www.w3.org/2000/svg" className=""><path data-v-36f493c7=""
                                                                                           d="M17 9.24514V9.98114C16.999 11.7063 16.4404 13.3849 15.4075 14.7666C14.3745 16.1483 12.9226 17.1591 11.2683 17.6483C9.61394 18.1374 7.84581 18.0787 6.22757 17.4808C4.60934 16.883 3.22772 15.778 2.28877 14.3308C1.34981 12.8836 0.903833 11.1716 1.01734 9.45019C1.13085 7.72879 1.79777 6.0902 2.91862 4.7788C4.03948 3.4674 5.55423 2.55345 7.23695 2.17326C8.91967 1.79307 10.6802 1.96701 12.256 2.66914"
                                                                                           stroke="#665CFF"
                                                                                           strokeWidth="2"
                                                                                           strokeLinecap="round"
                                                                                           strokeLinejoin="round"></path> <path
                                    data-v-36f493c7="" d="M17.0016 3.58105L9.00156 11.5891L6.60156 9.18905"
                                    stroke="#665CFF" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round"></path></svg>
                            </span>
                            <span className="product__stock--title">
                                в наличии
                            </span>
                        </div>
                    </div>
                    <div className="product__name">
                        Паштет из оленины с вяленой клюквой и шпинатом, 200 г
                    </div>
                    <div className="product__button">
                        <button className="product__btn product__search-btn">
                            <img className="search--icon" src={SearchIcon} alt=""/>
                        </button>
                        <button className="product__btn product__active--btn">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="8" y1="1" x2="8" y2="15" stroke="white" strokeWidth="2" strokeLinecap="round"></line> <line x1="1" y1="8" x2="15" y2="8" stroke="white" strokeWidth="2" strokeLinecap="round"></line></svg>
                        </button>

                    </div>
                    <div className="product__bottom">
                        <div className="product__price">
                            <div className="product__price-block">
                                <div className="product__price--number">
                                    550 р.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-4 product__column">
                <div className="product__item">
                    <div className="product__image">
                        <img className="product__img"
                             src="https://manbox.ru/image/cachewebp/catalog/builder/1441_new-270x270.webp" alt=""/>
                    </div>
                    <div className="product__quantity">
                        <div className="product__stock">
                            <span className="product__icon">
                                <svg data-v-36f493c7="" width="19" height="19" viewBox="0 0 19 19" fill="none"
                                     xmlns="http://www.w3.org/2000/svg" className=""><path data-v-36f493c7=""
                                                                                           d="M17 9.24514V9.98114C16.999 11.7063 16.4404 13.3849 15.4075 14.7666C14.3745 16.1483 12.9226 17.1591 11.2683 17.6483C9.61394 18.1374 7.84581 18.0787 6.22757 17.4808C4.60934 16.883 3.22772 15.778 2.28877 14.3308C1.34981 12.8836 0.903833 11.1716 1.01734 9.45019C1.13085 7.72879 1.79777 6.0902 2.91862 4.7788C4.03948 3.4674 5.55423 2.55345 7.23695 2.17326C8.91967 1.79307 10.6802 1.96701 12.256 2.66914"
                                                                                           stroke="#665CFF"
                                                                                           strokeWidth="2"
                                                                                           strokeLinecap="round"
                                                                                           strokeLinejoin="round"></path> <path
                                    data-v-36f493c7="" d="M17.0016 3.58105L9.00156 11.5891L6.60156 9.18905"
                                    stroke="#665CFF" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round"></path></svg>
                            </span>
                            <span className="product__stock--title">
                                в наличии
                            </span>
                        </div>
                    </div>
                    <div className="product__name">
                        Паштет из оленины с вяленой клюквой и шпинатом, 200 г
                    </div>
                    <div className="product__button">
                        <button className="product__btn product__search-btn">
                            <img className="search--icon" src={SearchIcon} alt=""/>
                        </button>
                        <button className="product__btn product__active--btn">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="8" y1="1" x2="8" y2="15" stroke="white" strokeWidth="2" strokeLinecap="round"></line> <line x1="1" y1="8" x2="15" y2="8" stroke="white" strokeWidth="2" strokeLinecap="round"></line></svg>
                        </button>

                    </div>
                    <div className="product__bottom">
                        <div className="product__price">
                            <div className="product__price-block">
                                <div className="product__price--number">
                                    550 р.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-4 product__column">
            <div className="product__item">
                <div className="product__image">
                    <img className="product__img"
                         src="https://manbox.ru/image/cachewebp/catalog/builder/1441_new-270x270.webp" alt=""/>
                </div>
                <div className="product__quantity">
                    <div className="product__stock">
                            <span className="product__icon">
                                <svg data-v-36f493c7="" width="19" height="19" viewBox="0 0 19 19" fill="none"
                                     xmlns="http://www.w3.org/2000/svg" className=""><path data-v-36f493c7=""
                                                                                           d="M17 9.24514V9.98114C16.999 11.7063 16.4404 13.3849 15.4075 14.7666C14.3745 16.1483 12.9226 17.1591 11.2683 17.6483C9.61394 18.1374 7.84581 18.0787 6.22757 17.4808C4.60934 16.883 3.22772 15.778 2.28877 14.3308C1.34981 12.8836 0.903833 11.1716 1.01734 9.45019C1.13085 7.72879 1.79777 6.0902 2.91862 4.7788C4.03948 3.4674 5.55423 2.55345 7.23695 2.17326C8.91967 1.79307 10.6802 1.96701 12.256 2.66914"
                                                                                           stroke="#665CFF"
                                                                                           strokeWidth="2"
                                                                                           strokeLinecap="round"
                                                                                           strokeLinejoin="round"></path> <path
                                    data-v-36f493c7="" d="M17.0016 3.58105L9.00156 11.5891L6.60156 9.18905"
                                    stroke="#665CFF" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round"></path></svg>
                            </span>
                        <span className="product__stock--title">
                                в наличии
                            </span>
                    </div>
                </div>
                <div className="product__name">
                    Паштет из оленины с вяленой клюквой и шпинатом, 200 г
                </div>
                <div className="product__button">
                    <button className="product__btn product__search-btn">
                        <img className="search--icon" src={SearchIcon} alt=""/>
                    </button>
                    <button className="product__btn product__active--btn">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="8" y1="1" x2="8" y2="15" stroke="white" strokeWidth="2" strokeLinecap="round"></line> <line x1="1" y1="8" x2="15" y2="8" stroke="white" strokeWidth="2" strokeLinecap="round"></line></svg>
                    </button>

                </div>
                <div className="product__bottom">
                    <div className="product__price">
                        <div className="product__price-block">
                            <div className="product__price--number">
                                550 р.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default ProductCard;