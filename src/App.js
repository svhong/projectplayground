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
        super();
        this.state = {
            isLoggedIn: true
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        //when clicked, check if user is logged in
        console.log("log in status: " + this.state.isLoggedIn);
        this.setState((prevState) => {
            return {
                isLoggedIn: !prevState.isLoggedIn
            }
        })
    }

    render() {
        return (
            <div>
                <h2>Something is here</h2>
                <button onClick={this.handleClick}>Log {this.state.isLoggedIn ? "in" : "out"}</button>
            </div>
        )
    }
}

export default App;