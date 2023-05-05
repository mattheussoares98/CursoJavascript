import React from "react";
import "./Button.css"

export default props => {
    let classes = "button"
    if (props.operation) classes += " operation"
    if (props.double) classes += " double"
    if (props.triple) classes += " triple"

    return <button
        onClick={e => props.click && props.click(e.target.innetHTML)}
        className={classes}>{props.label}
    </button>
}
