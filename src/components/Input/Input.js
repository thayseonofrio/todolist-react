import React from 'react';

const input = (props) => {
    return (
        <input
            onKeyPress={props.onInputKeyPress}
            onChange={props.onInputChange}
            value={props.value}>
        </input>
    )
}

export default input;