import React from "react";
import './ProductData.css';
import ProductsData from "./ProductsData";
import Card from "./Card";
import ProductCard from './ProductCard'
const ProductData = () => {
    return(
        <div className="product-data-container">
               {/* {
                ProductsData.map((data) => {
                    return(
                    <ProductCard data={data}/>
                    )
                })
               } */}
        </div>
    )
};

export default ProductData;
