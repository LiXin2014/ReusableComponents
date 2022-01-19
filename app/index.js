import React from "react";
import ReactDom from "react-dom";
import './index.css';
import { Navigation } from "./navigation/navigation";

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Navigation />
                <div>Buttons</div>
            </React.Fragment>
        )
    }
}

ReactDom.render(
    <App/>, 
    document.getElementById('app')
);