import React from 'react';
import { connect } from 'react-redux';
import * as todoActions from '../../store/actions/todoActions';

const item = (props) => {
    return ( 
        <div>
            <button onClick={() => props.onDeleteTodo(props.id)}> x </button>
            <p> {props.description} </p>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        onDeleteTodo: (id) => dispatch(todoActions.deleteTodo(id))
    }
}

export default connect(null, mapDispatchToProps)(item);