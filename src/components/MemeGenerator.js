//"https://api.imgflip.com/get_memes"
// "http://i.imgflip.com/1bij.jpg"
import React, { Component } from "react";

class MemeGenerator extends Component {
    constructor() {
        super();
        this.state = {
            topText: "",
            botText: "",
            img: "http://i.imgflip.com/1bij.jpg",
            allImgs: [],
            ranImg: ""
        }
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const { memes } = response.data;
                this.setState({
                    allImgs: memes
                });
            })

    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const ranNum = Math.floor(Math.random() * this.state.allImgs.length - 1);
        const randomImg = this.state.allImgs[ranNum].url;
        this.setState({ ranImg: randomImg })
    }

    render() {
        return (
            <div>
                <form className="memeForm" onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="topText"
                        placeholder="Top Text"
                        value={this.state.topText}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="botText"
                        placeholder="Bottom Text"
                        value={this.state.botText}
                        onChange={this.handleChange}
                    />
                    <button>Generate Pic</button>
                </form>
                <div className="memeArea">
                    <img src={this.state.ranImg} alt="Bruh" />
                    <p className="topText">{this.state.topText}</p>
                    <p className="botText">{this.state.botText}</p>
                </div>
            </div>
        )
    }
}

export default MemeGenerator;