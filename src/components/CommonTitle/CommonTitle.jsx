import React from 'react';
import "./common-title.scss"

const CommonTitle = ({title}) => {
    return (
        <div className="common-section">
            <h1 className="common-section__title">{title}</h1>
        </div>
    );
};

export default CommonTitle;