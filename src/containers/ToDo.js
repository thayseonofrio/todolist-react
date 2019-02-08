import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as todoActions from '../store/actions/todoActions';
import Input from '../components/Input/Input';

class ToDo extends Component {

    state = {
        todoDescription: ''
    }

    onKeyPressHandler = (event) => {
        // TODO: handle ID 
        if (event.key === 'Enter') {
            this.props.onAddTodo({
                description: this.state.todoDescription,
                id: Date.now()
            });
        }
    }

    onChangeHandler = (event) => {
        this.setState({
            todoDescription: event.target.value
        })
    }

    render() {
        const todos = this.props.todos.map(todo => (
            <li key={todo.id}>{todo.description}</li>
        ))
        return (
            <div>
                <ul>
                    {todos}
                </ul>
                <Input 
                    onInputKeyPress={(event) => this.onKeyPressHandler(event)}
                    onInputChange={(event) => this.onChangeHandler(event)}
                    value={this.state.todoDescription}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onAddTodo: (data) => dispatch(todoActions.addTodo(data))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDo); 