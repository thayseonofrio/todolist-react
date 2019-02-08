import * as actionTypes from '../actions/actionTypes';

const initialState = {
    todos: []
}

export const reducer = (state = initialState, action) => {
    let todos = [...state.todos];
    switch (action.type) {
        case actionTypes.ADD_TODO:
            return {
                ...state,
                todos: state.todos.concat(action.data)
            }
        case actionTypes.DELETE_TODO:
            todos = todos.filter(todo => todo.id !== action.id);
            return {
                ...state,
                todos: todos
            }
        case actionTypes.EDIT_TODO:
            todos = todos.map(todo => {
                if (todo.id === action.id) {
                    todo.description = action.description
                }
                return todo;
            });
            return {
                ...state,
                todos: todos
            }
        case actionTypes.TOGGLE_TODO:
            todos = todos.map(todo => {
                if (todo.id === action.id) {
                    todo.done = !todo.done
                }
                return todo;
            });
            return {
                ...state,
                todos: todos
            }
        default:
            return state;
    }
}

export default reducer;