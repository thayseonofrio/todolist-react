import React from 'react';
import { connect } from 'react-redux';
import classes from './Summary.module.css';

const summary = (props) => {

    const getTotalTodos = () => {
        return props.todos.length
    }

    const getCompletedTodos = () => {
        const completedTodos = props.todos.filter(todo => todo.done);
        return completedTodos.length;
    }

    const getUncompletedTodos = () => {
        const uncompletedTodos = props.todos.filter(todo => !todo.done);
        return uncompletedTodos.length;
    }

    const total = getTotalTodos();
    const completed = getCompletedTodos();
    const uncompleted = getUncompletedTodos();

    return (
        <ul className={classes.Summary}>
            <li> Total: {total} </li>
            <li> Completed: {completed} </li>
            <li> Not Completed: {uncompleted} </li>
        </ul>
    );
};

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, null)(summary);