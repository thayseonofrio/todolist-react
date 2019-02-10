import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as todoActions from '../../store/actions/todoActions';
import Input from '../../components/Input/Input';
import Item from '../../components/Item/Item';
import Summary from '../../components/Summary/Summary';
import classes from './ToDo.module.css';
import Spinner from '../../components/Spinner/Spinner';

export class ToDo extends Component {

    state = {
        todoDescription: ''
    }

    componentDidMount() {
        this.props.onFetchTodos();
    }

    onKeyPressHandler = (event) => {
        if (event.key === 'Enter') {
            this.props.onAddTodo({
                description: this.state.todoDescription,
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
        let todosPage = <Spinner />;

        if (this.props.todos) {
            todos = this.props.todos.map(todo => (
                <Item 
                    key={todo.id} 
                    description={todo.description} 
                    id={todo.id}
                    done={todo.done} /> 
            ))
        }
        
        if (!this.props.loading) {
            todosPage = (
                <div>
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
            )
        }

        return (
            <div className={classes.ToDo}>
                <h1> The Awesome To Do List </h1>
                {todosPage}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos,
        loading: state.loadingAll
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onAddTodo: (data) => dispatch(todoActions.addTodo(data)),
        onFetchTodos: () => dispatch(todoActions.fetchTodos())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDo); 