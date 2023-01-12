import React from 'react';
import {NavLink} from "react-router-dom";
import "./common-router.scss"

const CommonRouter = ({routes}) => {
    return (
        <div className="breadcrumbs">
            <ul className="breadcrumbs__list">
                {
                    routes.map(r => (
                        <li key={r.title} className="breadcrumbs__category">
                            <NavLink to={r.route === "second-box-for-sale" ? "/sale/second-box-for-sale" : `/${r.route}`} className={(navClass) => navClass.isActive ? "nav--active" : "breadcrumbs__link"}>
                                <span className="breadcrumbs__item">{r.title}</span>
                            </NavLink>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default CommonRouter;