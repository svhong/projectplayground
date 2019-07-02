import React from "react";
import ProductItem from "./components/ProductItem";

import productsData from "./components/productsData";

const App = () => {

    const newProductList = productsData.map(item => <ProductItem product={item} />);

    return (
        <div>
            {newProductList}
        </div>
    )
}

export default App;