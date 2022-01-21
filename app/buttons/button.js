import React from "react";
import "./buttons.css";

Button.defaultProps = {
    variant: '',
    startIcon: '',
    endIcon: '',
    size: '',
    color: '',
    disableShadow: null,
    disabled: null
};

export function Button(props) {
    const {variant, startIcon, endIcon, size, color, disableShadow, disabled, ...rest} = props;

    const variantStyle = variant;
    const sizeStyle = size;
    const colorStyle = color;
    const disableShadowStyle = disableShadow ? "disableShadow" : '';
    const disabledStyle = disabled ? "disabled" : '';

    let iconStyle = startIcon ? "start-icon" : (endIcon ? "end-icon" : "");

    return (
        <button 
            className={`basic ${variantStyle} ${sizeStyle} ${colorStyle} ${iconStyle} ${disableShadowStyle} ${disabledStyle}`} 
            {...rest}
            disabled={disabled}>
                {startIcon && <span className="material-icons">
                    {startIcon}
                </span>}
                Default
                {endIcon && <span className="material-icons">
                    {endIcon}
                </span>}
        </button>
    );
}


/*  NOTE：
    1. How to get rest of properties when destructuring an object, at line 15.
 */