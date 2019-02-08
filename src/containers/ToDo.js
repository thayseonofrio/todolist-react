import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as todoActions from '../store/actions/todoActions';
import Input from '../components/Input/Input';

class ToDo extends Component {

    state = {
        todoDescription: ''
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
                    onInputChange={(event) => this.onChangeHandler(event)}
                    value={this.state.todoDescription}/>
                <button onClick={() => this.props.onAddTodo({
                    description: this.state.todoDescription,
                    id: Date.now()
                })}> Add Todo </button>
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