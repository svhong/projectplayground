import React from "react";
// import ProductItem from "./components/ProductItem";

// import productsData from "./components/productsData";

// const App = () => {

//     const newProductList = productsData.map(item => <ProductItem product={item} />);

//     return (
//         <div>
//             {newProductList}
//         </div>
//     )
// }

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            counter: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        this.setState((prevState) => {
            return {
                counter: prevState.counter + 1
            }
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.handleClick}>+1 buddeh</button>
            </div>
        )
    }
}

export default App;