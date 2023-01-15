import React from 'react';
import ProductCard from "../ProductCard";

const ProductList = ({ setModalActive}) => {
    return (
        <>
            {/*{*/}
            {/*    data?.map(item => (*/}
            {/*        <ProductCard key={item.id} item={item}/>*/}
            {/*    ))*/}
            {/*}*/}
            <ProductCard setModalActive={setModalActive} />
        </>
    );
};

export default ProductList;