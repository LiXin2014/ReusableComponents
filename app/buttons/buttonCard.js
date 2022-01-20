import React from "react";
import "./buttons.css";

export function ButtonCard(props) {
    const {text, children} = props;
    return (
        <div>
            <div className="buttonLabel">{text}</div>
            {children}
        </div>
    )
}