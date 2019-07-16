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
    //***************************SWAPI************************ */
    // constructor() {
    //     super();
    //     this.state = {
    //         loading: false,
    //         character: {}
    //     }
    // }

    // componentDidMount() {
    //     this.setState({ loading: true })
    //     fetch("https://swapi.co/api/people/1")
    //         .then(response => response.json())
    //         .then(data => this.setState({
    //             loading: false,
    //             character: data
    //         }))
    // }

    // render() {
    //     const text = this.state.loading ? "loading..." : this.state.character.name
    //     return (
    //         <div>
    //             {text}
    //         </div>
    //     )
    // }
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            destination: "",
            isVegan: false,
            isGlutenFree: false,
            isDairyFree: false

        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange = (event) => {
        const { name, value, type, checked } = event.target
        type === "checkbox" ? this.setState({
            [name]: checked
        }) : this.setState({ [name]: value })
    }

    handleClick = (event) => {
        event.preventDefault();
        console.log(this.state)
    }
    render() {
        return (
            <main>
                <form>
                    <input
                        type="text"
                        placeholder="First Name"
                        name="firstName"
                        value={this.state.firstName}
                        onChange={this.handleChange}
                    />
                    <br />
                    <input
                        type="text"
                        placeholder="Last Name"
                        name="lastName"
                        value={this.state.lastName}
                        onChange={this.handleChange}
                    />
                    <br />
                    <input
                        type="text"
                        placeholder="Age"
                        name="age"
                        value={this.state.age}
                        onChange={this.handleChange}
                    />
                    <br />
                    <h3> Gender</h3>
                    <input
                        type="radio"
                        name="gender"
                        value="Male"
                        checked={this.state.gender === "Male"}
                        onChange={this.handleChange}
                    />Male
                    <br />
                    <input
                        type="radio"
                        name="gender"
                        value="Female"
                        checked={this.state.gender === "Female"}
                        onChange={this.handleChange}
                    />Female
                    <br />
                    <h3>Destination</h3>
                    <select
                        name="destination"
                        onChange={this.handleChange}
                        value={this.state.destination}
                    >
                        <option value="">--Please Select Destination--</option>
                        <option value="Dubai">Dubai, United Arab Emirates</option>
                        <option value="Auckland">Auckland, New Zealand</option>
                        <option value="Tokyo">Tokyo, Japan</option>
                    </select>
                    <br />
                    <h3>Diet Restrictions</h3>
                    <input
                        type="checkbox"
                        name="isVegan"
                        checked={this.state.isVegan}
                        onChange={this.handleChange}
                    />Vegan
                    <br />
                    <input
                        type="checkbox"
                        name="isGlutenFree"
                        checked={this.state.isGlutenFree}
                        onChange={this.handleChange}
                    />Gluten Free
                    <br />
                    <input
                        type="checkbox"
                        name="isDairyFree"
                        checked={this.state.isDairyFree}
                        onChange={this.handleChange}
                    />Dairy Free
                    <br />
                    <br />
                    <button onClick={this.handleClick}>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>
                    Your name: {this.state.firstName} {this.state.lastName}
                </p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.destination}</p>
                <p>
                    Your dietary restrictions:
                    {this.state.isVegan ? "Vegan " : " "}
                    {this.state.isGlutenFree ? "Gluten Free " : " "}
                    {this.state.isDairyFree ? "Dairy Free " : " "}

                </p>
            </main>
        )
    }
}

export default App;