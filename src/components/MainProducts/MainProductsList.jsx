import React from 'react';
import MainProductsCard from "../MainProductsCard";

const MainProductsList = () => {
    return (
        <div className="row">
            <MainProductsCard />
            <MainProductsCard />
            <MainProductsCard />
            <MainProductsCard />
            <MainProductsCard />
            <MainProductsCard />
        </div>
    );
};

export default MainProductsList;