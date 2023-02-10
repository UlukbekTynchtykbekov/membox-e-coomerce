import React from 'react';
import MainProductsCard from "../MainProductsCard";

const MainProductsList = ({box}) => {
    return (
        <div className="row">
            <MainProductsCard box={box} />
        </div>
    );
};

export default MainProductsList;