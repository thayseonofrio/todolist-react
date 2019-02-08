import * as actionTypes from './actionTypes';

export const addTodo = (data) => {
    return {
        type: actionTypes.ADD_TODO,
        data: data
    }
} 

export const deleteTodo = (id) => {
    return {
        type: actionTypes.DELETE_TODO,
        id: id
    }
} 

export const editTodo = (id, description) => {
    return {
        type: actionTypes.EDIT_TODO,
        id: id,
        description: description
    }
} 