import React from "react";
import "./navigation.css";

function NavBar(props) {
    const {navItems, selectedItem} = props;

    return (
        <div className="navigations">
            <ul>
                {navItems.map((item, index )=> (
                    <li key={index} className={`${item === selectedItem ? "selected" : ""}`}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export class Navigation extends React.Component {
    constructor(props) {
        super(props);

        this.navigationItems = ["Colors", "Typography", "Spaces", "Buttons", "Inputs", "Grid"];
    }

    render() {
        return <NavBar navItems={this.navigationItems} selectedItem={"Buttons"} />
    }
}