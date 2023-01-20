import React from 'react';
import "../../styles/all-products.scss"
import Helmet from "../../layout/Helmet";
import CommonRouter from "../../components/CommonRouter";
import CommonTitle from "../../components/CommonTitle";
import Filter from "../../components/Filter";
import MainProductsList from "../../components/MainProducts";

const AllPresents = () => {

    const saleRouters = [
        {
            route: "home",
            title: "Главная"
        },
        {
            route: "all-products",
            title: "Акции"
        },
    ]

    return (
        <Helmet title="all-products">
            <section className="all-products">
                <div className="container">
                    <CommonRouter routes={saleRouters} />
                    <CommonTitle title="Подарочные наборы" />
                    <div className="row">
                        <div className="col-3">
                            <Filter />
                        </div>
                        <div className="col-9">
                            <div className="presents">
                                <MainProductsList />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Helmet>
    );
};

export default AllPresents;