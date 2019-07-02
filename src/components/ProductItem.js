import React from "react";

const ProductItem = (props) => {
    return (
        <div className="product-item">
            <h3>{props.product.name}</h3>
            <h4>price: {props.product.price}</h4>
            <p>decription: {props.product.description}</p>
        </div>
    )
}

export default ProductItem; 