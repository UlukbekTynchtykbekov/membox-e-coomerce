import React, {useState} from 'react';
import arrowDown from "../../static/img/arrow-down-s-line.svg"

const ReadMoreLess = ({children}) => {
    const [isReadMoreShown, setReadMoreShown] = useState(false);

    return (
        <>
            <div className="composition__title-block">
                <h2 className="composition__title">Состав набора (14)
                </h2>
            </div>
            {isReadMoreShown ? children : children}
            <div className="show-tabs"><a>
                Посмотреть все товары в наборе
                <img src={arrowDown} alt=""/></a></div>
        </>
    );
};

export default ReadMoreLess;