import React from 'react';
import Helmet from "../../layout/Helmet";
import {Link} from "react-router-dom";
import CommonRouter from "../../coponenets/CommonRouter";

const Sale = () => {
    return (
        <Helmet title="Sale">
            <section className="sale">
                <div className="container">
                    <CommonRouter title="Акции" />
                    <div className="row">
                        <div className="col-2">
                            
                        </div>
                    </div>
                </div>
            </section>
        </Helmet>
    );
};

export default Sale;