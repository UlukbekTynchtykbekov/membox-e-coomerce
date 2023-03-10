import React from 'react';
import "./process.scss";

const Process = () => {
    return (
        <section className="magnet">
            <div className="container">
                <div className="magnet__container">
                    <div className="title magnet__title">5 оригинальных способов</div>
                    <div className="subtitle magnet__subtitle">креативно поздравить мужчину!</div>
                    <div className="magnet__bonus">
                        <div className="magnet__plus">+ внутри бонус</div>
                        <div className="magnet__process">5 способов вручить подарок удаленно</div>
                    </div>
                    <div className="text magnet__text">Мы подготовили список классных идей как сделать самый главный день своего
                        любимого человека запоминающимся. На какую почту вам прислать этот чудо-файл?
                    </div>
                    <div className="form magnet__form">
                        <div className="input magnet__input">
                            <label className="magnet__label">Ваш email</label>
                            <input type="text" placeholder="Ваш email" className="form-control magnet__form-control"/>
                        </div>
                        <div className="magnet__button">
                            <button type="submit" className="button magnet__btn">Получить бесплатно</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;