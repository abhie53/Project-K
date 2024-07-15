import React from "react";
import './ProductData.css';
import ProductsData from "./ProductsData";

import { CardStyled } from "./Card.styles";

const ProductData = () => {
    return (
        <div className="product-data-container">
            {
                ProductsData.map((data) => {
                    return (
                        <div className="product-container">
                            <CardStyled data={data} />
                        </div>
                    )
                })
            }
        </div>
    )
};

export default ProductData;
