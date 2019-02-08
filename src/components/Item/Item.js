import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from '../Input/Input';
import * as todoActions from '../../store/actions/todoActions';
import classes from './Item.module.css';

class Item extends Component {

    state = {
        todoDescription: this.props.description,
        done: this.props.done,
        disabled: true
    }

    onInputChange = (event) => {
        this.setState({
            todoDescription: event.target.value
        });
    }

    disableInputEdit = () => {
        this.setState({
            disabled: true
        });
    }
    
    onKeyPressHandler = (event) => {
        if (event.key === 'Enter') {
            if (event.target.value.length === 0) {
                this.props.onDeleteTodo(this.props.id);
                return;
            }
            this.props.onEditTodo(this.props.id, this.state.todoDescription);
            this.disableInputEdit();
        }
    }

    enableInputEdit = () => {
        this.setState({
            disabled: false
        });
    }

    onInputBlurHandler = () => {
        this.disableInputEdit();
    }

    onCheckboxClickHandler = () => {
        this.props.onToggleTodo(this.props.id)
        const previousDoneState = this.state.done;
        this.setState({
            done: !previousDoneState
        });
    }

    render() {
        let inputClasses = [];
        if (this.state.disabled) {
            inputClasses.push(classes.disabledInput)
        } else {
            inputClasses.push(classes.enabledInput)
        }
        if (this.state.done) {
            inputClasses.push(classes.done)
        }
        inputClasses = inputClasses.join(' ');
        return ( 
            <div className={classes.Item}>
                <Input 
                    type="checkbox" 
                    checked={this.state.done}
                    onInputChecked={this.onCheckboxClickHandler}/>
                <Input
                    type="text"
                    classes={inputClasses}
                    value={this.state.todoDescription}
                    onInputBlur={this.onInputBlurHandler}
                    onInputClick={this.enableInputEdit}
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
        onEditTodo: (id, data) => dispatch(todoActions.editTodo(id, data)),
        onToggleTodo: (id) => dispatch(todoActions.toggleTodo(id))
    }
}

export default connect(null, mapDispatchToProps)(Item);