import React from 'react';
import Helmet from "../../layout/Helmet";
import CommonRouter from "../../components/CommonRouter";
import CommonTitle from "../../components/CommonTitle";
import "../../styles/sale.scss"
import {Link} from "react-router-dom";

const Sale = () => {

    const saleRouters = [
        {
            route: "home",
            title: "Главная"
        },
        {
            route: "sale",
            title: "Акции"
        },
    ]

    return (
        <Helmet title="Sale">
            <section className="sale">
                <div className="container">
                    <CommonRouter routes={saleRouters} />
                    <CommonTitle title="Акции" />
                    <div className="row wrapper">
                        <div className="col-4">
                            <div className="article">
                                <div className="article__image">
                                    <Link to="second-box-for-sale" className="article__link" >
                                        <img className="article__img" src="https://manbox.ru/image/cache/catalog/actions/min_besplatnaya-371x246.jpg" alt=""/>
                                    </Link>
                                </div>
                                <div className="article__info">
                                    <h3 className="article__title">Второй бокс со скидкой 20%</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="article">
                                <div className="article__image">
                                    <Link to="second-box-for-sale" className="article__link" >
                                        <img className="article__img" src="https://manbox.ru/image/cache/catalog/actions/1_420h280_2-box-20%25-371x246.jpg" alt=""/>
                                    </Link>
                                </div>
                                <div className="article__info">
                                    <h3 className="article__title">Бесплатная доставка</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="article">
                                <div className="article__image">
                                    <Link to="second-box-for-sale" className="article__link" >
                                        <img className="article__img" src="https://manbox.ru/image/cache/catalog/actions/min_rasprodazha-371x246.jpg" alt=""/>
                                    </Link>
                                </div>
                                <div className="article__info">
                                    <h3 className="article__title">Распродажа!</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="article">
                                <div className="article__image">
                                    <Link to="second-box-for-sale" className="article__link" >
                                        <img className="article__img" src="https://manbox.ru/image/cache/catalog/actions/min_otzyv-371x246.jpg" alt=""/>
                                    </Link>
                                </div>
                                <div className="article__info">
                                    <h3 className="article__title">Бонусы за отзыв!</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Helmet>
    );
};

export default Sale;