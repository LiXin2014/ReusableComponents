import React from "react";
import ReactDom from "react-dom";
import './index.css';
import { Navigation } from "./navigation/navigation";
import { Button } from "./buttons/button";
import { ButtonCard } from "./buttons/buttonCard";

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Navigation />
                <div className="buttons">
                    <div className="header">Buttons</div>
                    <ButtonCard text="<Button />">
                        <Button />
                    </ButtonCard>
                    <ButtonCard text={`<Button onClick="alert('Hello world!')" />}`}>
                        <Button onClick={() => alert('Hello world!')} />
                    </ButtonCard>
                    <ButtonCard text={`<Button autoFocus />}`}>
                        <Button autoFocus />
                    </ButtonCard>
                   <ButtonCard text={`<Button variant="outline"/>`}>
                        <Button variant="outline" />
                    </ButtonCard>
                    <ButtonCard text={`<Button variant="text"/>`}>
                        <Button variant="text" />
                    </ButtonCard>
                    <ButtonCard text={`<Button disableShadow />`}>
                        <Button disableShadow />
                    </ButtonCard>
                    <div className="disabledSection">
                        <ButtonCard text={`<Button disabled />`}>
                            <Button disabled />
                        </ButtonCard>
                        <ButtonCard text={`<Button variant="text" disabled />`}>
                            <Button variant="text" disabled />
                        </ButtonCard>
                    </div>
                    <div className="iconSection">
                        <ButtonCard text={`<Button startIcon="local_grocery_store" />`}>
                            <Button startIcon="local_grocery_store" />
                        </ButtonCard>
                        <ButtonCard text={`<Button endIcon="local_grocery_store" />`}>
                            <Button endIcon="local_grocery_store" />
                        </ButtonCard>
                    </div>
                    <div className="sizeSection">
                        <ButtonCard text={`<Button size="sm" />`}>
                            <Button size="sm" />
                        </ButtonCard>
                        <ButtonCard text={`<Button size="md" />`}>
                            <Button size="md" />
                        </ButtonCard>
                        <ButtonCard text={`<Button size="lg" />`}>
                            <Button size="lg" />
                        </ButtonCard>
                    </div>
                    <div className="colorSection">
                        <ButtonCard text={`<Button color="default" />`}>
                            <Button color="default" />
                        </ButtonCard>
                        <ButtonCard text={`<Button color="primary" />`}>
                            <Button color="primary" />
                        </ButtonCard>
                        <ButtonCard text={`<Button color="secondary" />`}>
                            <Button color="secondary" />
                        </ButtonCard>
                        <ButtonCard text={`<Button color="danger" />`}>
                            <Button color="danger" />
                        </ButtonCard>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

ReactDom.render(
    <App/>, 
    document.getElementById('app')
);