import React from "react";
import "./input.css";

export class Input extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hovered: false
        }

        this.onMouseOver = this.onMouseOver.bind(this);
        this.onMouseOut = this.onMouseOut.bind(this);
        this.onFocused = this.onFocused.bind(this);
    }

    render() {
        const {error, disabled, helperText, value, size, fullWidth, multiline, row, startIcon, endIcon} = this.props;

        const basicStyle = error ? "error" : "default";
        const disabledStyle = disabled ? "disabled" : "";
        const hoveredStyle = this.state.hovered ? "hovered" : "";
        const sizeStyle = size;
        const fullWidthStyle = fullWidth ? "fullWidth" : "";
        const startIconStyle = startIcon ? "start-input-icon" : "";
        const endIconStyle = endIcon ? "end-input-icon" : "";

        return (
            <div className={`input-container ${basicStyle} ${disabledStyle} ${hoveredStyle} ${sizeStyle} ${fullWidthStyle} ${startIconStyle} ${endIconStyle}`}>
                <div className="helperText" id="helperText">{helperText}</div>
                {startIcon ? <span className="material-icons start-input-icon">
                    {startIcon}
                    </span> : null}
                {multiline ? 
                    <textarea 
                        rows={row ? row : 1}
                        placeholder="Placeholder" 
                        disabled={disabled} ></textarea> : 
                    <input 
                    id="inputItem" 
                    placeholder="Placeholder" 
                    disabled={disabled} 
                    onMouseOver={this.onMouseOver}
                    onMouseOut={this.onMouseOut}
                    onFocus={this.onFocused}
                    value={value}/>
                }
                {endIcon ? <span className="material-icons end-input-icon">
                    {endIcon}
                    </span> : null}
                <label for="inputItem" className="label" id="label">Label</label>
            </div>
        )
    }

    onMouseOver() {
        this.setState({hovered: true})
    }

    onMouseOut() {
        this.setState({hovered: false})
    }

    onFocused() {
        this.setState({hovered: false})
    }
}

Input.defaultProps = {
    error: '',
    disabled: null,
    helperText: null,
    startIcon: null,
    endIcon: null,
    value: null,
    size: '',
    fullWidth: false,
    multiline: false
}


// change to class, have a state as hovered, when hovered and error class, change color. 