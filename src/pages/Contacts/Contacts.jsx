import React from 'react';
import Helmet from "../../layout/Helmet";
import "../../styles/contacts.scss"
import CommonRouter from "../../components/CommonRouter";
import CommonTitle from "../../components/CommonTitle";
import {Link} from "react-router-dom";
import MapPage from "../Mappage";

const Contacts = () => {
    const contactsRouters =[
        {
            route:"home",
            title:"Главная"
        },
        {
            route: "contacts",
            title: "Связаться с нами"
        }
    ]
    return (
        <Helmet title="Contacts">
            <section className="contacts">
                <div className="container">
                    <CommonRouter routes={contactsRouters} />
                    <CommonTitle title="КОНТАКТЫ" />
                    <div className="contacts-text">
                        <p className="contacts-title">
                            Не стесняйтесь: отправляйте почтовых голубей, записки в бутылках, а
                        также просто звоните по телефону, пишите в мессенджеры
                        </p>
                    </div>
                    <div className="row">
                            <div className="row__card">
                                <div className="contacts-number">
                                    <a className="phone" href="tel:7 (499) 444 - 01 - 04">+7 (499) 444 - 01 - 04</a>
                                    <a className="phone" href="tel:8 (800) 444 - 24 - 16">8 (800) 444 - 24 - 16</a>
                                    <a className="email" href="mailto:ulukbektynctykbekov@gmail.com">info@manbox.ru</a>
                                </div>
                                <div className="contacts-suppliers">
                                    <Link className="suppliers-title" to="/suppliers" >
                                        <b>Поставщикам</b>
                                        <hr className="hr"/>
                                    </Link>
                                </div>
                                <div className="address-contacts">
                                    <div className="with-email">
                                        <p>
                                            <b>Для оптовых и корпоративных запросов:</b> b2b+303726@manbox.ru
                                        </p>
                                        <p>
                                            <b>Для поставщиков товаров:</b> product@manbox.ru
                                        </p>
                                        <p>
                                            <b>Для рекламных предложений:</b> marketing@manbox.ru
                                        </p>
                                    </div>
                                    <div className="zone-delivery">
                                        <p><b>Зоны доставки:</b></p>
                                        <p>Москва, Санкт-Петербург</p>
                                        <p>Все регионы РФ (отправка из Москвы)</p>
                                        <p>страны СНГ (Казахстан и Беларусь)</p>
                                    </div>
                                    <div className="folds">
                                        <p><b>Склад:</b></p>
                                        <p>г. Москва:</p>
                                        <p>Основной: Щёлковское шоссе 100, к107</p>
                                        <p>Время работы: будние 10-19, выходные 11 - 16</p>
                                    </div>
                                    <div className="official-license">
                                        <p>MANBOX
                                            <span className="">®</span>
                                        </p>
                                        <p>
                                            ООО "МЭНБОКС" <br/>
                                            ИНН: 6671021024 <br/>
                                            ОГРН: 1156658061823
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row__card">
                                <MapPage/>
                            </div>
                    </div>
                </div>
            </section>
        </Helmet>
    );
};

export default Contacts;