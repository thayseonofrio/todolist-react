import * as actionTypes from '../actions/actionTypes';

const initialState = {
    todos = []
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TODO:
            return {
                ...state,
                todos: state.todos.concat(action.data)
            }
        case actionTypes.DELETE_TODO:
            let todos = [...state.todos];
            todos = todos.filter(todo => todo.id !== action.id);
            return {
                ...state,
                todos: todos
            }
        case actionTypes.EDIT_TODO:
            let todos = [...state.todos];
            todos[action.id] = action.data;
            return {
                ...state,
                todos: todos
            }
        default:
            return state;
    }
}

export default reducer;