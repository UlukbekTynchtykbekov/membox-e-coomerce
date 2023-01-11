import React from 'react';
import {Link} from "react-router-dom";
import "../../styles/common-router.scss"

const CommonRouter = ({title}) => {
    return (
        <div className="breadcrumbs">
            <ul className="breadcrumbs__list">
                <li className="breadcrumbs__category">
                    <Link to="/home" className="breadcrumbs__link">
                        <span className="breadcrumbs__item">Главная</span>
                    </Link>
                </li>
                <li className="breadcrumbs__category">
                    <Link to="/sale" className="breadcrumbs__link">
                        <span className="breadcrumbs__item">{title}</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default CommonRouter;