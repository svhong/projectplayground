import React, { Component } from "react";
import FormComponent from "./FormComponent";

class FormContainer extends Component {
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
            <FormComponent
                handleClick={this.handleClick}
                handleChange={this.handleChange}
                {...this.state}
            />
        )
    }
}

export default FormContainer;