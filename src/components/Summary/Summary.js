import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './Summary.module.css';

export class Summary extends Component {

    state = {
        total: 0,
        completed: 0,
        uncompleted: 0
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            total: this.getTotalTodos(nextProps.todos),
            completed: this.getCompletedTodos(nextProps.todos),
            uncompleted: this.getUncompletedTodos(nextProps.todos)
        })
    }

    shouldComponentUpdate(nextProps) {
        return this.state.todos !== nextProps.todos;
    }

    getTotalTodos = (todos) => {
        return todos.length
    }

    getCompletedTodos = (todos) => {
        const completedTodos = todos.filter(todo => todo.done);
        return completedTodos.length;
    }

    getUncompletedTodos = (todos) => {
        const uncompletedTodos = todos.filter(todo => !todo.done);
        return uncompletedTodos.length;
    }

    render () {
        return (
            <ul className={classes.Summary}>
                <li> Total: {this.state.total} </li>
                <li> Completed: {this.state.completed} </li>
                <li> Not Completed: {this.state.uncompleted} </li>
            </ul>
        );
    } 
};

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, null)(Summary);