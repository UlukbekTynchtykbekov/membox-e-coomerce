import React, {useState} from 'react';
import Helmet from "../../layout/Helmet";
import CommonRouter from "../../components/CommonRouter";
import CommonTitle from "../../components/CommonTitle";
import Filter from "../../components/Filter";
import MainProductsList from "../../components/MainProducts";

const BathHouse = () => {
    const [activeSort, setActiveSort] = useState(false);

    const saleRouters = [
        {
            route: "home",
            title: "Главная"
        },
        {
            route: "bathhouse",
            title: "Баня"
        },
    ]

    return (
        <Helmet title="БАНЯ">
            <section className="all-products">
                <div className="container">
                    <CommonRouter routes={saleRouters} />
                    <CommonTitle title="БАНЯ" />
                    <div onClick={() => setActiveSort(true)} className={ activeSort ? "sticky-active" : "sticky" }>
                        <div className="sticky__top">
                            <div className="filter-button">
                                <div className="filter-button__flex">
                                    <div className="filter-button__text">Фильтры</div>
                                    <div className="svg">
                                        <svg width="17" height="18" viewBox="0 0 14 15" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M12.0097 2C12.112 2 12.171 2.11602 12.1108 2.19863L7.28781 8.64469L7.1798 8.79292C7.06295 8.95329 7 9.14659 7 9.34501C7 9.14659 6.93705 8.95329 6.8202 8.79292L6.71219 8.64469L1.88783 2.19863C1.82761 2.11603 1.88661 2 1.98884 2H12.0097ZM12.7499 0.5H1.24959C0.765217 0.5 0.327718 0.778125 0.121468 1.21563C-0.0879074 1.65 -0.0222825 2.16875 0.280843 2.54063L5.5 9.52813V12.4375C5.5 12.7531 5.64687 13.05 5.9 13.2375L7.02459 14.3C7.07594 14.4325 7.28562 14.4997 7.49719 14.4997C7.65 14.4997 7.80406 14.4647 7.94687 14.3938C8.2875 14.225 8.5 13.8781 8.5 13.5V9.52813L13.7155 2.54375C14.0218 2.16875 14.0843 1.65313 13.878 1.21563C13.6718 0.778125 13.2343 0.5 12.7499 0.5Z"
                                                fill="#0F1928"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3 products-column">
                            <Filter activeSort={activeSort} setActiveSort={setActiveSort} />
                        </div>
                        <div className="col-9 products-column">
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

export default BathHouse;