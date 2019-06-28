/*
var init = function () {
    //initialize players
    console.log("Game Started. Players: " + player1.name + " and " + player2.name + " initialized.")
}

var Player = function (name, credits) {
    this.name = name;
    this.total_credits = credits
    this.add_credits = function (amount) {
        this.total_credits += amount
        console.log("Congratulations " + this.name + "! " + +amount + " has been credited to your account. Your total credit is " + this.total_credits);
    }
    this.remove_credits = function (amount) {
        this.total_credits -= amount
        console.log(this.name + ", " + amount + " has been discredited from your account. Your total credit is " + this.total_credits);
    }
}

Player.prototype.giveCredits = function (name, amount) {
    this.remove_credits(amount);
    name.add_credits(amount);
}

var player1 = new Player("Sean", 1000000);
var player2 = new Player("Vicky", 1000000);
*/

import React from "react";
import ReactDOM from "react-dom";

import App from "./App.js";

ReactDOM.render(<App />, document.getElementById("root"));
