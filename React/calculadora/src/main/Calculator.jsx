import React, { Component } from "react";
import "./Calculator.css"
import Button from "../components/Button";
import Display from "../components/Display";

const initialState = {
    displayValue: "0",
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0,
}

export default class Calculator extends Component {

    state = { ...initialState }

    constructor(props) {
        super(props)
        this.clearMemory = this.clearMemory.bind(this)
        this.addDigit = this.addDigit.bind(this)
        // this.setOperation = this.setOperation.bind(this)
    }
    clearMemory() {
        this.setState({ ...initialState })
    }

    setOperation(operation) {
        if (this.state.current == 0) {
            this.setState({ operation, clearDisplay: true, current: 1 })
        } else {
            const equals = operation === "="
            const currentOperation = this.state.operation

            const values = [...this.state.values]
            values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}}`)
            values[1] = 0

            this.setState({
                displayValue: values[0],
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                clearDisplay: !equals,
                values,
            })
        }
    }

    addDigit(n) {
        if (n === "." && this.state.displayValue.includes(".")) {
            return
        }

        const clearDisplay = this.state.displayValue === "0"
            || this.state.clearDisplay

        const currentValue = clearDisplay ? "" : this.state.displayValue
        const displayValue = currentValue + n

        this.setState({ displayValue, clearDisplay: false })

        if (n !== ".") {
            const i = this.state.current
            const newValue = parseFloat(displayValue)
            const values = [...this.state.values]
            values[i] = newValue
            this.setState({ values })
        }
    }


    render() {
        const element = (<div className="calculator">
            <Display value={this.state.displayValue}></Display>
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