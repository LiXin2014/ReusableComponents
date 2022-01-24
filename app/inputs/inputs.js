import React from "react";
import { Input } from "./input";

export function Inputs(props) {
    return (
        <div className="inputs">
            <Input />
            <Input error/>
            <Input disabled/>
            <Input helperText="Some interesting test"/>
            <Input helperText="Some interesting test" error/>
            <Input startIcon="call" />
            <Input endIcon="lock" />
            <Input value="Text"/>
            <Input size="sm"/>
            <Input size="md"/>
            <Input fullWidth/>
            <Input multiline row="4" />
        </div>
    )
}