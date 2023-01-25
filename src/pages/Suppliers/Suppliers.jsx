import React from 'react';
import Helmet from "../../layout/Helmet";
import CommonRouter from "../../components/CommonRouter";
import CommonTitle from "../../components/CommonTitle";
import Man from "../../static/img/man.jpeg"
import "../../styles/suppliers.scss"

const Suppliers = () => {
    const suppliersRouters =[
        {
            route:"home",
            title:"Главная"
        },
        {
            route: "suppliers",
            title: "Поставщикам"
        }
    ]
    return (
        <Helmet title="Suppliers">
            <section className="suppliers">
                <div className="container">
                    <CommonRouter routes={suppliersRouters} />
                    <CommonTitle title="ПОСТАВЩИКАМ" />
                    <div className="row">
                        <div className="row__card">
                            <div className="suppliers-description">
                                <p>
                                    Мы всегда в поиске российских производителей интересных товаров для наших подарочных наборов. Поэтому приглашаем вас поделиться информацией о вашем товаре и начать вместе работать!
                                </p>
                            </div>
                            <div className="suppliers-description">
                                <p>
                                    Чтобы ваш товар как можно быстрее появился в наших наборах, потребуется 4 простых шага.
                                </p>
                            </div>
                            <div className="contacts-step">
                                <ol className="steps">
                                    <li>Познакомьтесь с нашим ассортиментом</li>
                                    <li>Приложите ваше КП</li>
                                    <li>Заполните анкету поставщика</li>
                                    <li>Получите решение о сотрудничестве</li>
                                </ol>
                            </div>
                            <div className="image">
                                <img src={Man} alt=""/>
                            </div>
                        </div>
                        <div className="row__card">
                            <form action="">
                                <div className="red required">* Обязательно для заполнения</div>
                                <div className="input-box">
                                    <span className="details">Название компании* </span>
                                    <p className="input-title">Правовая форма (ООО, ИП и тд), торговая марка</p>
                                    <input type="text" placeholder="Название компании" required/>
                                </div>
                                <hr/>
                                <div className="input-box">
                                    <span className="details">Регион работы* </span>
                                    <p className="input-title">конктрентая область, по РФ, страны СНГ</p>
                                    <input type="text" placeholder="Регион работы" required/>
                                </div>
                                <div className="input-box">
                                    <span className="details">Сроки поставок до склада в г. Москва* </span>
                                    <p className="input-title">в календарных днях</p>
                                    <input type="text" placeholder="Сроки поставок до склада в г. Москва" required/>
                                </div>
                                <hr/>
                                <div className="input-box">
                                    <span className="details">C кем работаете* </span>
                                    <p className="input-title">оптовые продажи, представлены на маркетплэйсах в розницу, есть точки продаж по стране, что-то своё</p>
                                    <input type="text" placeholder="C кем работаете" required/>
                                </div>
                                <hr/>
                                <div className="input-box">
                                    <span className="details">Товарные категории* </span>
                                    <p className="input-title">как видите ваше участие: укажите предложение к конкретной коробке или "на ваше усмотрение"</p>
                                    <input type="text" placeholder="Товарные категории" required/>
                                </div>
                                <hr/>
                                <div className="input-box">
                                    <span className="details">Контактные данные* </span>
                                    <p className="input-title">ФИО, сайт, телефон</p>
                                    <input type="text" placeholder="Контактные данные" required/>
                                </div>
                                <hr/>
                                <div className="input-box">
                                    <span className="details">Документы* </span>
                                        <div className="files">
                                            <input type="file" id="files" multiple="multiple" className="hidden"/>
                                            <div className="files-up">
                                                <label htmlFor="files">+ Добавить файлы</label>
                                            </div>
                                        </div>
                                </div>
                                <div className="input-btn">
                                    <button className="button" type="button">
                                        Отправить
                                    </button>
                                </div>
                            </form>
                        </div>
                        </div>
                    </div>
            </section>
        </Helmet>
    );
};

export default Suppliers;