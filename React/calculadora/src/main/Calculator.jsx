import React, { Component } from "react";
import "./Calculator.css"
import Button from "../components/Button";
import Display from "../components/Display";

export default class Calculator extends Component {

    constructor(props) {
        super(props)
        this.clearMemory = this.clearMemory.bind(this)
        this.addDigit = this.addDigit.bind(this)
        // this.setOperation = this.setOperation.bind(this)
    }
    clearMemory() {
        console.log("limpar")
    }

    setOperation(operation) {
        console.log(operation)
    }

    addDigit(n) {
        console.log(n)
    }


    render() {
        const element = (<div className="calculator">
            <Display value={100}></Display>
            <Button label="AC" operation triple click={this.clearMemory}></Button>
            <Button label="/" operation click={e => this.setOperation("/")}></Button>
            <Button label="7" click={e => this.addDigit("7")}></Button>
            <Button label="8" click={e => this.addDigit("8")}></Button>
            <Button label="9" click={e => this.addDigit("9")}></Button>
            <Button label="*" operation click={e => this.setOperation("*")}></Button>
            <Button label="4" click={e => this.addDigit("4")}></Button>
            <Button label="5" click={e => this.addDigit("5")}></Button>
            <Button label="6" click={e => this.addDigit("6")}></Button>
            <Button label="-" operation click={e => this.setOperation("-")}></Button>
            <Button label="1" click={e => this.addDigit("1")}></Button>
            <Button label="2" click={e => this.addDigit("2")}></Button>
            <Button label="3" click={e => this.addDigit("3")}></Button>
            <Button label="+" operation click={e => this.setOperation("+")}></Button>
            <Button label="0" double click={e => this.addDigit("0")}></Button>
            <Button label="." click={e => this.addDigit(".")}></Button>
            <Button label="=" operation click={e => this.setOperation("=")}></Button>
        </div>)
        return element;
    }
}