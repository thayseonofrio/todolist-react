import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as todoActions from '../../store/actions/todoActions';
import Input from '../../components/Input/Input';
import Item from '../../components/Item/Item';
import Summary from '../../components/Summary/Summary';
import classes from './ToDo.module.css';

export class ToDo extends Component {

    state = {
        todoDescription: ''
    }

    onKeyPressHandler = (event) => {
        // TODO: handle ID 
        if (event.key === 'Enter') {
            this.props.onAddTodo({
                description: this.state.todoDescription,
                id: Date.now(),
                done: false
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
                    id={todo.id}
                    done={todo.done} /> 
            ))
        }
        return (
            <div className={classes.ToDo}>
                <h1> The Awesome To Do List </h1>
                <Input 
                    placeholder="Add a To Do"
                    onInputKeyPress={(event) => this.onKeyPressHandler(event)}
                    onInputChange={(event) => this.onChangeHandler(event)}
                    value={this.state.todoDescription}/>
                <div className={classes.Items}>
                    {todos}
                </div>
                <Summary />
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