import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from '../Input/Input';
import * as todoActions from '../../store/actions/todoActions';

class Item extends Component {

    state = {
        todoDescription: this.props.description
    }

    onInputChange = (event) => {
        this.setState({
            todoDescription: event.target.value
        });
    }
    
    onKeyPressHandler = (event) => {
        if (event.key === 'Enter') {
            this.props.onEditTodo(this.props.id, this.state.todoDescription);
        }
    }

    render() {
        return ( 
            <div>
                <button onClick={() => this.props.onDeleteTodo(this.props.id)}> x </button>
                <Input
                    value={this.state.todoDescription}
                    onInputChange={(event) => this.onInputChange(event)}
                    onInputKeyPress={(event) => this.onKeyPressHandler(event)}
                />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onDeleteTodo: (id) => dispatch(todoActions.deleteTodo(id)),
        onEditTodo: (id, data) => dispatch(todoActions.editTodo(id, data))
    }
}

export default connect(null, mapDispatchToProps)(Item);