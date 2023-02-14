import React from 'react';
import leftArrow from "../../static/img/arrow-left-line.svg";
import rightArrow from "../../static/img/arrow-right-line.svg";
import Slider from "react-slick";
import "./review.scss";

const Review = () => {
    const slider = React.useRef(null);

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 621,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    }
    return (
        <div className="reviews">
            <div className="container">
                <div className="reviews__block">
                    <div className="reviews__top">
                        <div className="reviews__title">Отзывы покупателей c
                            <a className="reviews__link" href="https://market.yandex.ru/shop--manbox/477437/reviews"
                               target="_blank"
                               rel="nofollow noreferrer noopener">Яндекс Маркет
                            </a>
                        </div>
                    </div>
                    <div className="arrows reviews__arrows">
                        <img onClick={() => slider?.current?.slickNext()}
                             className="arrows__arrow" src={leftArrow} alt=""/>
                        <img onClick={() => slider?.current?.slickPrev()}
                             className="arrows__arrow" src={rightArrow} alt=""/>
                    </div>
                    <div className="swiper">
                        <Slider ref={slider} {...settings}>
                            <div className="swiper__slide">
                                <div className="swiper__review">
                                    <div className="swiper__data">
                                        <div className="swiper__date">11.11.2021</div>
                                        <div className="icon">
                                            <svg width="34" height="33" viewBox="0 0 34 33"
                                                 fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M7.47927 0.000427663L0 7.33984L9.30195 16.4679L16.7812 9.12844L7.47927 0.000427663Z"
                                                    fill="black"></path>
                                                <path
                                                    d="M16.7849 23.4136L9.30566 16.0742L0.00371755 25.2022L7.48299 32.5417L16.7849 23.4136Z"
                                                    fill="black"></path>
                                                <path
                                                    d="M16.4065 9.13421L23.8857 16.4736L33.1877 7.34562L25.7084 0.00619596L16.4065 9.13421Z"
                                                    fill="black"></path>
                                                <path
                                                    d="M25.7131 32.5435L33.1924 25.2041L23.8904 16.0761L16.4112 23.4155L25.7131 32.5435Z"
                                                    fill="black"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="info swiper__info">
                                        <div className="name swiper__name">Елена</div>
                                        <div className="stars swiper__stars">
                                            <svg width="35" height="35"
                                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35"
                                                 className="star active">
                                                <path
                                                    d="M31.547 12a.848.848 0 00-.677-.577l-9.427-1.376-4.224-8.532a.847.847 0 00-1.516 0l-4.218 8.534-9.427 1.355a.847.847 0 00-.467 1.467l6.823 6.664-1.612 9.375a.847.847 0 001.23.893l8.428-4.434 8.432 4.432a.847.847 0 001.229-.894l-1.615-9.373 6.822-6.665a.845.845 0 00.214-.869z"></path>
                                            </svg>
                                            <svg width="35" height="35"
                                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35"
                                                 className="star active">
                                                <path
                                                    d="M31.547 12a.848.848 0 00-.677-.577l-9.427-1.376-4.224-8.532a.847.847 0 00-1.516 0l-4.218 8.534-9.427 1.355a.847.847 0 00-.467 1.467l6.823 6.664-1.612 9.375a.847.847 0 001.23.893l8.428-4.434 8.432 4.432a.847.847 0 001.229-.894l-1.615-9.373 6.822-6.665a.845.845 0 00.214-.869z"></path>
                                            </svg>
                                            <svg width="35" height="35"
                                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35"
                                                 className="star active">
                                                <path
                                                    d="M31.547 12a.848.848 0 00-.677-.577l-9.427-1.376-4.224-8.532a.847.847 0 00-1.516 0l-4.218 8.534-9.427 1.355a.847.847 0 00-.467 1.467l6.823 6.664-1.612 9.375a.847.847 0 001.23.893l8.428-4.434 8.432 4.432a.847.847 0 001.229-.894l-1.615-9.373 6.822-6.665a.845.845 0 00.214-.869z"></path>
                                            </svg>
                                            <svg width="35" height="35"
                                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35"
                                                 className="star active">
                                                <path
                                                    d="M31.547 12a.848.848 0 00-.677-.577l-9.427-1.376-4.224-8.532a.847.847 0 00-1.516 0l-4.218 8.534-9.427 1.355a.847.847 0 00-.467 1.467l6.823 6.664-1.612 9.375a.847.847 0 001.23.893l8.428-4.434 8.432 4.432a.847.847 0 001.229-.894l-1.615-9.373 6.822-6.665a.845.845 0 00.214-.869z"></path>
                                            </svg>
                                            <svg width="35" height="35"
                                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35"
                                                 className="star active">
                                                <path data-v-ace0e88e=""
                                                      d="M31.547 12a.848.848 0 00-.677-.577l-9.427-1.376-4.224-8.532a.847.847 0 00-1.516 0l-4.218 8.534-9.427 1.355a.847.847 0 00-.467 1.467l6.823 6.664-1.612 9.375a.847.847 0 001.23.893l8.428-4.434 8.432 4.432a.847.847 0 001.229-.894l-1.615-9.373 6.822-6.665a.845.845 0 00.214-.869z"></path>
                                            </svg>
                                        </div>
                                        <div className="pro swiper__pro">
                                            <div className="swiper__text">Достоинства:</div>
                                            <div className="swiper__text">Очень прикольный ящичек с мини-фомкой!
                                                Покупали
                                                начальнику что-то необычное от коллектива. Надеемся, что
                                                разнообразим впечатления человека, которого сложно удивить.
                                                Нашли
                                                магазин в инстаграмме. Идея ящика прям зашла! Мы выбрали
                                                предложенный комплект, но порадовало то, что можно собрать набор
                                                на
                                                свое усмотрение.
                                            </div>
                                        </div>
                                        <div className="contra">
                                            <div className="swiper__text">Недостатки:</div>
                                            <div className="swiper__text">Пока не заметили</div>
                                        </div>
                                        <div className="text swiper__texts">
                                            <div className="swiper__text">Коменнтарий:</div>
                                            <div className="swiper__text">Очень порадовало то, что по просьбе
                                                перенесли
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper__slide">
                                <div className="swiper__review">
                                    <div className="swiper__data">
                                        <div className="swiper__date">11.11.2021</div>
                                        <div className="icon">
                                            <svg width="34" height="33" viewBox="0 0 34 33"
                                                 fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M7.47927 0.000427663L0 7.33984L9.30195 16.4679L16.7812 9.12844L7.47927 0.000427663Z"
                                                    fill="black"></path>
                                                <path
                                                    d="M16.7849 23.4136L9.30566 16.0742L0.00371755 25.2022L7.48299 32.5417L16.7849 23.4136Z"
                                                    fill="black"></path>
                                                <path
                                                    d="M16.4065 9.13421L23.8857 16.4736L33.1877 7.34562L25.7084 0.00619596L16.4065 9.13421Z"
                                                    fill="black"></path>
                                                <path
                                                    d="M25.7131 32.5435L33.1924 25.2041L23.8904 16.0761L16.4112 23.4155L25.7131 32.5435Z"
                                                    fill="black"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="info swiper__info">
                                        <div className="name swiper__name">Елена</div>
                                        <div className="stars swiper__stars">
                                            <svg width="35" height="35"
                                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35"
                                                 className="star active">
                                                <path
                                                    d="M31.547 12a.848.848 0 00-.677-.577l-9.427-1.376-4.224-8.532a.847.847 0 00-1.516 0l-4.218 8.534-9.427 1.355a.847.847 0 00-.467 1.467l6.823 6.664-1.612 9.375a.847.847 0 001.23.893l8.428-4.434 8.432 4.432a.847.847 0 001.229-.894l-1.615-9.373 6.822-6.665a.845.845 0 00.214-.869z"></path>
                                            </svg>
                                            <svg width="35" height="35"
                                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35"
                                                 className="star active">
                                                <path
                                                    d="M31.547 12a.848.848 0 00-.677-.577l-9.427-1.376-4.224-8.532a.847.847 0 00-1.516 0l-4.218 8.534-9.427 1.355a.847.847 0 00-.467 1.467l6.823 6.664-1.612 9.375a.847.847 0 001.23.893l8.428-4.434 8.432 4.432a.847.847 0 001.229-.894l-1.615-9.373 6.822-6.665a.845.845 0 00.214-.869z"></path>
                                            </svg>
                                            <svg width="35" height="35"
                                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35"
                                                 className="star active">
                                                <path
                                                    d="M31.547 12a.848.848 0 00-.677-.577l-9.427-1.376-4.224-8.532a.847.847 0 00-1.516 0l-4.218 8.534-9.427 1.355a.847.847 0 00-.467 1.467l6.823 6.664-1.612 9.375a.847.847 0 001.23.893l8.428-4.434 8.432 4.432a.847.847 0 001.229-.894l-1.615-9.373 6.822-6.665a.845.845 0 00.214-.869z"></path>
                                            </svg>
                                            <svg width="35" height="35"
                                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35"
                                                 className="star active">
                                                <path
                                                    d="M31.547 12a.848.848 0 00-.677-.577l-9.427-1.376-4.224-8.532a.847.847 0 00-1.516 0l-4.218 8.534-9.427 1.355a.847.847 0 00-.467 1.467l6.823 6.664-1.612 9.375a.847.847 0 001.23.893l8.428-4.434 8.432 4.432a.847.847 0 001.229-.894l-1.615-9.373 6.822-6.665a.845.845 0 00.214-.869z"></path>
                                            </svg>
                                            <svg width="35" height="35"
                                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35"
                                                 className="star active">
                                                <path data-v-ace0e88e=""
                                                      d="M31.547 12a.848.848 0 00-.677-.577l-9.427-1.376-4.224-8.532a.847.847 0 00-1.516 0l-4.218 8.534-9.427 1.355a.847.847 0 00-.467 1.467l6.823 6.664-1.612 9.375a.847.847 0 001.23.893l8.428-4.434 8.432 4.432a.847.847 0 001.229-.894l-1.615-9.373 6.822-6.665a.845.845 0 00.214-.869z"></path>
                                            </svg>
                                        </div>
                                        <div className="pro swiper__pro">
                                            <div className="swiper__text">Достоинства:</div>
                                            <div className="swiper__text">Очень прикольный ящичек с мини-фомкой!
                                                Покупали
                                                начальнику что-то необычное от коллектива. Надеемся, что
                                                разнообразим впечатления человека, которого сложно удивить.
                                                Нашли
                                                магазин в инстаграмме. Идея ящика прям зашла! Мы выбрали
                                                предложенный комплект, но порадовало то, что можно собрать набор
                                                на
                                                свое усмотрение.
                                            </div>
                                        </div>
                                        <div className="contra">
                                            <div className="swiper__text">Недостатки:</div>
                                            <div className="swiper__text">Пока не заметили</div>
                                        </div>
                                        <div className="text swiper__texts">
                                            <div className="swiper__text">Коменнтарий:</div>
                                            <div className="swiper__text">Очень порадовало то, что по просьбе
                                                перенесли
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper__slide">
                                <div className="swiper__review">
                                    <div className="swiper__data">
                                        <div className="swiper__date">11.11.2021</div>
                                        <div className="icon">
                                            <svg width="34" height="33" viewBox="0 0 34 33"
                                                 fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M7.47927 0.000427663L0 7.33984L9.30195 16.4679L16.7812 9.12844L7.47927 0.000427663Z"
                                                    fill="black"></path>
                                                <path
                                                    d="M16.7849 23.4136L9.30566 16.0742L0.00371755 25.2022L7.48299 32.5417L16.7849 23.4136Z"
                                                    fill="black"></path>
                                                <path
                                                    d="M16.4065 9.13421L23.8857 16.4736L33.1877 7.34562L25.7084 0.00619596L16.4065 9.13421Z"
                                                    fill="black"></path>
                                                <path
                                                    d="M25.7131 32.5435L33.1924 25.2041L23.8904 16.0761L16.4112 23.4155L25.7131 32.5435Z"
                                                    fill="black"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="info swiper__info">
                                        <div className="name swiper__name">Елена</div>
                                        <div className="stars swiper__stars">
                                            <svg width="35" height="35"
                                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35"
                                                 className="star active">
                                                <path
                                                    d="M31.547 12a.848.848 0 00-.677-.577l-9.427-1.376-4.224-8.532a.847.847 0 00-1.516 0l-4.218 8.534-9.427 1.355a.847.847 0 00-.467 1.467l6.823 6.664-1.612 9.375a.847.847 0 001.23.893l8.428-4.434 8.432 4.432a.847.847 0 001.229-.894l-1.615-9.373 6.822-6.665a.845.845 0 00.214-.869z"></path>
                                            </svg>
                                            <svg width="35" height="35"
                                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35"
                                                 className="star active">
                                                <path
                                                    d="M31.547 12a.848.848 0 00-.677-.577l-9.427-1.376-4.224-8.532a.847.847 0 00-1.516 0l-4.218 8.534-9.427 1.355a.847.847 0 00-.467 1.467l6.823 6.664-1.612 9.375a.847.847 0 001.23.893l8.428-4.434 8.432 4.432a.847.847 0 001.229-.894l-1.615-9.373 6.822-6.665a.845.845 0 00.214-.869z"></path>
                                            </svg>
                                            <svg width="35" height="35"
                                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35"
                                                 className="star active">
                                                <path
                                                    d="M31.547 12a.848.848 0 00-.677-.577l-9.427-1.376-4.224-8.532a.847.847 0 00-1.516 0l-4.218 8.534-9.427 1.355a.847.847 0 00-.467 1.467l6.823 6.664-1.612 9.375a.847.847 0 001.23.893l8.428-4.434 8.432 4.432a.847.847 0 001.229-.894l-1.615-9.373 6.822-6.665a.845.845 0 00.214-.869z"></path>
                                            </svg>
                                            <svg width="35" height="35"
                                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35"
                                                 className="star active">
                                                <path
                                                    d="M31.547 12a.848.848 0 00-.677-.577l-9.427-1.376-4.224-8.532a.847.847 0 00-1.516 0l-4.218 8.534-9.427 1.355a.847.847 0 00-.467 1.467l6.823 6.664-1.612 9.375a.847.847 0 001.23.893l8.428-4.434 8.432 4.432a.847.847 0 001.229-.894l-1.615-9.373 6.822-6.665a.845.845 0 00.214-.869z"></path>
                                            </svg>
                                            <svg width="35" height="35"
                                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35"
                                                 className="star active">
                                                <path data-v-ace0e88e=""
                                                      d="M31.547 12a.848.848 0 00-.677-.577l-9.427-1.376-4.224-8.532a.847.847 0 00-1.516 0l-4.218 8.534-9.427 1.355a.847.847 0 00-.467 1.467l6.823 6.664-1.612 9.375a.847.847 0 001.23.893l8.428-4.434 8.432 4.432a.847.847 0 001.229-.894l-1.615-9.373 6.822-6.665a.845.845 0 00.214-.869z"></path>
                                            </svg>
                                        </div>
                                        <div className="pro swiper__pro">
                                            <div className="swiper__text">Достоинства:</div>
                                            <div className="swiper__text">Очень прикольный ящичек с мини-фомкой!
                                                Покупали
                                                начальнику что-то необычное от коллектива. Надеемся, что
                                                разнообразим впечатления человека, которого сложно удивить.
                                                Нашли
                                                магазин в инстаграмме. Идея ящика прям зашла! Мы выбрали
                                                предложенный комплект, но порадовало то, что можно собрать набор
                                                на
                                                свое усмотрение.
                                            </div>
                                        </div>
                                        <div className="contra">
                                            <div className="swiper__text">Недостатки:</div>
                                            <div className="swiper__text">Пока не заметили</div>
                                        </div>
                                        <div className="text swiper__texts">
                                            <div className="swiper__text">Коменнтарий:</div>
                                            <div className="swiper__text">Очень порадовало то, что по просьбе
                                                перенесли
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper__slide">
                                <div className="swiper__review">
                                    <div className="swiper__data">
                                        <div className="swiper__date">11.11.2021</div>
                                        <div className="icon">
                                            <svg width="34" height="33" viewBox="0 0 34 33"
                                                 fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M7.47927 0.000427663L0 7.33984L9.30195 16.4679L16.7812 9.12844L7.47927 0.000427663Z"
                                                    fill="black"></path>
                                                <path
                                                    d="M16.7849 23.4136L9.30566 16.0742L0.00371755 25.2022L7.48299 32.5417L16.7849 23.4136Z"
                                                    fill="black"></path>
                                                <path
                                                    d="M16.4065 9.13421L23.8857 16.4736L33.1877 7.34562L25.7084 0.00619596L16.4065 9.13421Z"
                                                    fill="black"></path>
                                                <path
                                                    d="M25.7131 32.5435L33.1924 25.2041L23.8904 16.0761L16.4112 23.4155L25.7131 32.5435Z"
                                                    fill="black"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="info swiper__info">
                                        <div className="name swiper__name">Елена</div>
                                        <div className="stars swiper__stars">
                                            <svg width="35" height="35"
                                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35"
                                                 className="star active">
                                                <path
                                                    d="M31.547 12a.848.848 0 00-.677-.577l-9.427-1.376-4.224-8.532a.847.847 0 00-1.516 0l-4.218 8.534-9.427 1.355a.847.847 0 00-.467 1.467l6.823 6.664-1.612 9.375a.847.847 0 001.23.893l8.428-4.434 8.432 4.432a.847.847 0 001.229-.894l-1.615-9.373 6.822-6.665a.845.845 0 00.214-.869z"></path>
                                            </svg>
                                            <svg width="35" height="35"
                                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35"
                                                 className="star active">
                                                <path
                                                    d="M31.547 12a.848.848 0 00-.677-.577l-9.427-1.376-4.224-8.532a.847.847 0 00-1.516 0l-4.218 8.534-9.427 1.355a.847.847 0 00-.467 1.467l6.823 6.664-1.612 9.375a.847.847 0 001.23.893l8.428-4.434 8.432 4.432a.847.847 0 001.229-.894l-1.615-9.373 6.822-6.665a.845.845 0 00.214-.869z"></path>
                                            </svg>
                                            <svg width="35" height="35"
                                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35"
                                                 className="star active">
                                                <path
                                                    d="M31.547 12a.848.848 0 00-.677-.577l-9.427-1.376-4.224-8.532a.847.847 0 00-1.516 0l-4.218 8.534-9.427 1.355a.847.847 0 00-.467 1.467l6.823 6.664-1.612 9.375a.847.847 0 001.23.893l8.428-4.434 8.432 4.432a.847.847 0 001.229-.894l-1.615-9.373 6.822-6.665a.845.845 0 00.214-.869z"></path>
                                            </svg>
                                            <svg width="35" height="35"
                                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35"
                                                 className="star active">
                                                <path
                                                    d="M31.547 12a.848.848 0 00-.677-.577l-9.427-1.376-4.224-8.532a.847.847 0 00-1.516 0l-4.218 8.534-9.427 1.355a.847.847 0 00-.467 1.467l6.823 6.664-1.612 9.375a.847.847 0 001.23.893l8.428-4.434 8.432 4.432a.847.847 0 001.229-.894l-1.615-9.373 6.822-6.665a.845.845 0 00.214-.869z"></path>
                                            </svg>
                                            <svg width="35" height="35"
                                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35"
                                                 className="star active">
                                                <path data-v-ace0e88e=""
                                                      d="M31.547 12a.848.848 0 00-.677-.577l-9.427-1.376-4.224-8.532a.847.847 0 00-1.516 0l-4.218 8.534-9.427 1.355a.847.847 0 00-.467 1.467l6.823 6.664-1.612 9.375a.847.847 0 001.23.893l8.428-4.434 8.432 4.432a.847.847 0 001.229-.894l-1.615-9.373 6.822-6.665a.845.845 0 00.214-.869z"></path>
                                            </svg>
                                        </div>
                                        <div className="pro swiper__pro">
                                            <div className="swiper__text">Достоинства:</div>
                                            <div className="swiper__text">Очень прикольный ящичек с мини-фомкой!
                                                Покупали
                                                начальнику что-то необычное от коллектива. Надеемся, что
                                                разнообразим впечатления человека, которого сложно удивить.
                                                Нашли
                                                магазин в инстаграмме. Идея ящика прям зашла! Мы выбрали
                                                предложенный комплект, но порадовало то, что можно собрать набор
                                                на
                                                свое усмотрение.
                                            </div>
                                        </div>
                                        <div className="contra">
                                            <div className="swiper__text">Недостатки:</div>
                                            <div className="swiper__text">Пока не заметили</div>
                                        </div>
                                        <div className="text swiper__texts">
                                            <div className="swiper__text">Коменнтарий:</div>
                                            <div className="swiper__text">Очень порадовало то, что по просьбе
                                                перенесли
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;