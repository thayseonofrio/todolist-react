import React from 'react';
import classes from './Input.module.css';

const input = (props) => {

    const inputClasses = [classes.Input, props.classes].join(' ');

    let input = null;
    switch (props.type) {
        case "checkbox": {
            input = ( <input 
                type={props.type} 
                checked={props.checked}
                onChange={props.onInputChecked}/> );
            break;
        }
        default: 
            input = ( <input
                className={inputClasses}
                type={props.type}
                onClick={props.onInputClick}
                onBlur={props.onInputBlur}
                onKeyPress={props.onInputKeyPress}
                onChange={props.onInputChange}
                value={props.value}
                placeholder={props.placeholder}/> );
            break;
    }

    return ( input )
}

export default input;