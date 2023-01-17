import React, {useState} from 'react';
import Helmet from "../../layout/Helmet";
import CommonRouter from "../../components/CommonRouter";
import CommonTitle from "../../components/CommonTitle";
import "../../styles/setConstructor.scss"
import Constructor from "../../components/Constructor";

const SetConstructor = () => {

    const saleRouters = [
        {
            route: "home",
            title: "Главная"
        },
        {
            route: "set-constructor",
            title: "КОНСТРУКТОР НАБОРА"
        },
    ]
    return (
        <Helmet title="set-constructor">
            <section className="constructor">
                <div className="container">
                    <CommonRouter routes={saleRouters} />
                    <CommonTitle title= "КОНСТРУКТОР НАБОРА"/>
                    <div className="choose set-constructor__choose">
                        <h2 className="choose-pack">
                            ШАГ 1: ВЫБЕРИТЕ УПАКОВКУ
                        </h2>
                    </div>
                    <Constructor />
                </div>
            </section>
        </Helmet>
    );
};

export default SetConstructor;