import React from "react";

function FormComponent(props) {
    return (
        <main>
            <form>
                <input
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    value={props.firstName}
                    onChange={props.handleChange}
                />
                <br />
                <input
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    value={props.lastName}
                    onChange={props.handleChange}
                />
                <br />
                <input
                    type="text"
                    placeholder="Age"
                    name="age"
                    value={props.age}
                    onChange={props.handleChange}
                />
                <br />
                <h3> Gender</h3>
                <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={props.gender === "Male"}
                    onChange={props.handleChange}
                />Male
            <br />
                <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={props.gender === "Female"}
                    onChange={props.handleChange}
                />Female
            <br />
                <h3>Destination</h3>
                <select
                    name="destination"
                    onChange={props.handleChange}
                    value={props.destination}
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
                    checked={props.isVegan}
                    onChange={props.handleChange}
                />Vegan
            <br />
                <input
                    type="checkbox"
                    name="isGlutenFree"
                    checked={props.isGlutenFree}
                    onChange={props.handleChange}
                />Gluten Free
            <br />
                <input
                    type="checkbox"
                    name="isDairyFree"
                    checked={props.isDairyFree}
                    onChange={props.handleChange}
                />Dairy Free
            <br />
                <br />
                <button onClick={props.handleClick}>Submit</button>
            </form>
            <hr />
            <h2>Entered information:</h2>
            <p>
                Your name: {props.firstName} {props.lastName}
            </p>
            <p>Your age: {props.age}</p>
            <p>Your gender: {props.gender}</p>
            <p>Your destination: {props.destination}</p>
            <p>
                Your dietary restrictions:
            {props.isVegan ? "Vegan " : " "}
                {props.isGlutenFree ? "Gluten Free " : " "}
                {props.isDairyFree ? "Dairy Free " : " "}

            </p>
        </main>
    )
}

export default FormComponent;