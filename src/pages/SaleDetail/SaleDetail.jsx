import React from 'react';
import Helmet from "../../layout/Helmet";
import CommonRouter from "../../components/CommonRouter";
import CommonTitle from "../../components/CommonTitle";
import "../../styles/saleDetail.scss";
import {Link} from "react-router-dom";

const SaleDetail = () => {
    const saleRouters = [
        {
            route: "home",
            title: "Главная"
        },
        {
            route: "sale",
            title: "Акции"
        },
        {
            route: "second-box-for-sale",
            title: "ВТОРОЙ БОКС СО СКИДКОЙ 20%"
        },
    ]

    return (
        <Helmet title="ВТОРОЙ БОКС СО СКИДКОЙ 20%">
            <section className="sale-detail">
                <div className="container">
                    <CommonRouter routes={saleRouters} />
                    <CommonTitle title= "ВТОРОЙ БОКС СО СКИДКОЙ 20%"/>
                    <div className='data'>
                        <div className="data__number">25.01.2022</div>
                        <div className="daxta__image">
                            <svg width="16" height="15" viewBox="0 0 16 14" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M14.91 6.376l.002-.002a.869.869 0 00-.017-.782 4.919 4.919 0 00-.434-.659c-.078-.106-.166-.225-.269-.37C12.667 2.402 10.409 1 7.982 1 5.575 1 3.335 2.381 1.81 4.506a28.31 28.31 0 01-.247.338c-.203.273-.348.469-.494.743a.88.88 0 00-.016.794l.001.002c.281.546.61.955 1.065 1.518C3.638 9.786 5.74 11 7.982 11c2.283 0 4.419-1.257 5.94-3.197l.084-.108c.385-.49.663-.844.906-1.32zM.186 5.12c-.22.33-.273 1.23 0 1.719.37.722.684 1.11 1.095 1.616l.059.073C3.137 10.76 5.476 12 7.982 12c2.505 0 4.927-1.283 6.728-3.58.062-.08.122-.156.182-.23.32-.401.603-.757.912-1.36.325-.63.195-1.33-.022-1.704a5.283 5.283 0 00-.562-.83c-.078-.101-.153-.197-.223-.296-1.803-2.552-4.51-4-7.016-4C5.476 0 2.8 1.41.996 3.923c-.063.087-.127.172-.192.258a6.599 6.599 0 00-.62.94zM10 6a2 2 0 11-4 0 2 2 0 014 0zm1 0a3 3 0 11-6 0 3 3 0 016 0z"
                                      fill="#A4A4A4" className="_2bKiA">
                                </path>
                            </svg>
                        </div>
                        <div className="data__view">
                            2054
                        </div>
                    </div>
                    <div className="description sale-detail__description">
                        <p className="description__image">
                            <img className="description__img" src="https://manbox.ru/image/catalog/actions/2_1210h480_2-box.jpg" alt=""/>
                        </p>
                        <p className="description__title">
                            Когда хочется больше и выгоднее, приходите в MANBOX! Выбирайте подарочные наборы по выгодным ценам и получайте скидку 20% на второй товар*!
                            А ещё можно купить сейчас, а заплатить потом. Просто оформите рассрочку без переплат на 8 недель с помощью сервиса «Долями». Приятных покупок и ярких праздников!
                        </p>
                        <p className="description__title">
                            *Акция распространяется на неакционный товар.
                        </p>
                    </div>
                    <div className="button--block sale-detail__button">
                        <Link to="/all-products">
                            <button className="button--block__btn sale-detail__btn">Посмотреть все подарочные боксы</button>
                        </Link>
                    </div>
                </div>
            </section>
        </Helmet>
    );
};

export default SaleDetail;