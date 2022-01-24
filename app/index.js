import React from "react";
import ReactDom from "react-dom";
import './index.css';
import { Navigation } from "./navigation/navigation";
import { Buttons } from "./buttons/buttons";
import { Inputs } from "./inputs/inputs";

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Navigation />
                <Inputs />
            </React.Fragment>
        )
    }
}

ReactDom.render(
    <App/>, 
    document.getElementById('app')
);