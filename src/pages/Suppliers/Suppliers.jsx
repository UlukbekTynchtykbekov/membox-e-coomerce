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
                            <div className="col">
                                <div className="form-custom">
                                    <div className="form">
                                        <div className="text">
                                            <div className="red required">
                                                * Обязательно для заполнения
                                            </div>
                                        </div>
                                        <div className="rows">
                                            <div className="row">
                                                <div className="name required">Название компании</div>
                                                <div className="description required">
                                                    Правовая форма (ООО, ИП и тд), торговая марка
                                                </div>
                                                <div className="answers">
                                                    <div className="text">
                                                        <input type="text" placeholder="Название компании" className="form-control"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="name required">Регион работы</div>
                                                <div className="description required">конктрентая область, по РФ, страны СНГ</div>
                                                <div className="answers">
                                                    <div className="text">
                                                        <input type="text" placeholder="Регион работы" className="form-control"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="name required">Сроки поставок до склада в г. Москва</div>
                                                <div className="description required">в календарных днях</div>
                                                <div className="answers">
                                                    <div className="text">
                                                        <input type="text" placeholder="Сроки поставок до склада в г. Москва" className="form-control"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="name required">C кем работаете</div>
                                                <div className="description required">
                                                    оптовые продажи, представлены на маркетплэйсах в розницу, есть точки продаж
                                                    по стране, что-то своё
                                                </div>
                                                <div className="answers">
                                                    <div data-v-ac0c8d40="" className="text">
                                                        <input type="text" placeholder="C кем работаете" className="form-control"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="name required">Товарные категории</div>
                                                <div className="description required">
                                                    как видите ваше участие: укажите предложение к конкретной коробке или "на ваше усмотрение"
                                                </div>
                                                <div className="answers">
                                                    <div className="text">
                                                        <input type="text" placeholder="Товарные категории" className="form-control"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="name required">Контактные данные</div>
                                                <div className="description required">ФИО, сайт, телефон</div>
                                                <div className="answers">
                                                    <div className="textarea">
                                                        <textarea placeholder="Контактные данные" className="form-control"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="name required">Документы</div>
                                                <div className="description required">
                                                    презентации, коммерческие предложения и т.д.
                                                </div>
                                                <div  className="answers">
                                                    <div className="files">
                                                        <div className="files">
                                                            <input type="file" id="files" multiple="multiple"/>
                                                            <div>
                                                                <button className="download-button">
                                                                    + Добавить файлы
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="buttons">
                                        <button type="button" className="btn btn-primary disabled" disabled="disabled">Отправить</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Helmet>
    );
};

export default Suppliers;