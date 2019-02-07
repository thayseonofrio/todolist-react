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

export const editTodo = (id, data) => {
    return {
        type: actionTypes.DELETE_TODO,
        id: id,
        data: data
    }
} 