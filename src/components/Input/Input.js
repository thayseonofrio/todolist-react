import React from 'react';

const input = (props) => {
    return (
        <input
            onChange={props.onInputChange}
            value={props.value}>
        </input>
    )
}

export default input;