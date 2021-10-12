import React from "react"
import Dice from "./Dice"



class DiceBox extends React.Component {
    constructor() {
        super()
        this.state = {
            dieNumber: [0, 0, 0, 0, 0, 0]
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        this.setState(prevState => {
            return {
                dieNumber: prevState.number = this.state.dieNumber.map(number => Math.floor(Math.random() * 7))
            }
        })
    }

    render() {
        return (
            <div>
                <div className="dieContainer">
                    <div className="div1"><Dice number={this.state.dieNumber[0]} /></div>
                    <div className="div2"><Dice number={this.state.dieNumber[1]} /></div>
                    <div ><Dice number={this.state.dieNumber[2]} /></div>
                    <div ><Dice number={this.state.dieNumber[3]} /></div>
                    <div ><Dice number={this.state.dieNumber[4]} /></div>
                    <div ><Dice number={this.state.dieNumber[5]} /></div>
                    

                </div>
                <h1>ROLL THE DICE</h1>
                <button onClick={this.handleClick} className="rollTheDice">Click Me</button>
            </div>
        )
    }
}

export default DiceBox