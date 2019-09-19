import React, { useState } from "react";

// import MemeHeader from "./components/MemeHeader";
// import MemeGenerator from "./components/MemeGenerator";
// import FormContainer from "./components/FormContainer";
// import ProductItem from "./components/ProductItem";
// import productsData from "./components/productsData";

import "./style.css";

// const App = () => {

//     const newProductList = productsData.map(item => <ProductItem product={item} />);

//     return (
//         <div>
//             {newProductList}
//         </div>
//     )
// }
const App = () => {
    const [count, setCount] = useState(10);

    return (
        <div>
            <button onClick={() => { setCount(count + 1) }}>+</button>
            {count}
        </div>
    )
}
// class App extends Component {
//     /* MEME Gen***********************************/
//     // render() {
//     //     return (
//     //         <div>
//     //             <MemeHeader />
//     //             <MemeGenerator />
//     //         </div>

//     //     )
//     // }
//     /************************Log In Status********************/

//     // constructor() {
//     //     super();
//     //     this.state = {
//     //         isLoggedIn: true
//     //     }
//     //     this.handleClick = this.handleClick.bind(this);
//     // }

//     // handleClick = () => {
//     //     //when clicked, check if user is logged in
//     //     console.log("log in status: " + this.state.isLoggedIn);
//     //     this.setState((prevState) => {
//     //         return {
//     //             isLoggedIn: !prevState.isLoggedIn
//     //         }
//     //     })
//     // }

//     // render() {
//     //     return (
//     //         <div>
//     //             <h2>{!this.state.isLoggedIn ? "You are logged in" : "You have logged out"}</h2>
//     //             <button onClick={this.handleClick}>Log {this.state.isLoggedIn ? "in" : "out"}</button>
//     //         </div>
//     //     )
//     // }
//     /***************************SWAPI************************ */
//     // constructor() {
//     //     super();
//     //     this.state = {
//     //         loading: false,
//     //         character: {}
//     //     }
//     // }

//     // componentDidMount() {
//     //     this.setState({ loading: true })
//     //     fetch("https://swapi.co/api/people/1")
//     //         .then(response => response.json())
//     //         .then(data => this.setState({
//     //             loading: false,
//     //             character: data
//     //         }))
//     // }

//     // render() {
//     //     const text = this.state.loading ? "loading..." : this.state.character.name
//     //     return (
//     //         <div>
//     //             {text}
//     //         </div>
//     //     )
//     // }
//     /*********************airline form*********************** */
//     // Render Form for airline customer form
//     // render() {
//     //     return (
//     //         <FormContainer />
//     //     )
//     // }
// }

export default App;