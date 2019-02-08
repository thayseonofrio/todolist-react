import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as todoActions from '../store/actions/todoActions';
import Input from '../components/Input/Input';
import Item from '../components/Item/Item';
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
            this.setState({
                todoDescription: ''
            })
        }
    }

    onChangeHandler = (event) => {
        this.setState({
            todoDescription: event.target.value
        })
    }

    render() {
        let todos = null;
        if (this.props.todos) {
            todos = this.props.todos.map(todo => (
                <Item 
                    key={todo.id} 
                    description={todo.description} 
                    id={todo.id} /> 
            ))
        }
        return (
            <div>
                {todos}
                <Item></Item>
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