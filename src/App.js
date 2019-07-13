import React, { Component } from "react";
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

class App extends Component {

    // constructor() {
    //     super();
    //     this.state = {
    //         isLoggedIn: true
    //     }
    //     this.handleClick = this.handleClick.bind(this);
    // }

    // handleClick = () => {
    //     //when clicked, check if user is logged in
    //     console.log("log in status: " + this.state.isLoggedIn);
    //     this.setState((prevState) => {
    //         return {
    //             isLoggedIn: !prevState.isLoggedIn
    //         }
    //     })
    // }

    // render() {
    //     return (
    //         <div>
    //             <h2>{!this.state.isLoggedIn ? "You are logged in" : "You have logged out"}</h2>
    //             <button onClick={this.handleClick}>Log {this.state.isLoggedIn ? "in" : "out"}</button>
    //         </div>
    //     )
    // }
    constructor() {
        super();
        this.state = {
            loading: false,
            character: {}
        }
    }

    componentDidMount() {
        this.setState({ loading: true })
        fetch("https://swapi.co/api/people/1")
            .then(response => response.json())
            .then(data => this.setState({
                loading: false,
                character: data
            }))
    }

    render() {
        const text = this.state.loading ? "loading..." : this.state.character.name
        return (
            <div>
                {text}
            </div>
        )
    }
}

export default App;