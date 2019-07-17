import React, { Component } from "react";

class MemeGenerator extends Component {
    constructor() {
        super();
        this.state = {
            topText: "",
            bottomText: "",
            img: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: [],
            randomImage: ""
        }
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const { memes } = response.data
                this.setState({ allMemeImgs: memes })
            })
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const randomNumber = Math.floor(Math.random() * this.state.allMemeImgs.length - 1);
        const ranIm = this.state.allMemeImgs[randomNumber].url;
        this.setState({ randomImage: ranIm })
    }

    render() {
        return (
            <div>
                <form className="meme-form" onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="topText"
                        placeholder="Top Text"
                        value={this.state.topText}
                        onChange={this.handleChange}
                    />
                    <br />
                    <input
                        type="text"
                        name="bottomText"
                        placeholder="Bottom Text"
                        value={this.state.bottomText}
                        onChange={this.handleChange}
                    />
                    <br />
                    <button>Generate!</button>
                </form>
                <div className="memeArea">
                    <img src={this.state.randomImage} alt="simply" />
                    <p className="topText">{this.state.topText}</p>
                    <p className="bottomText">{this.state.bottomText}</p>
                </div>

            </div>
        )
    }
}

export default MemeGenerator