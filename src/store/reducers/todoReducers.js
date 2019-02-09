import * as actionTypes from '../actions/actionTypes';

const initialState = {
    todos: []
}

export const reducer = (state = initialState, action) => {
    let todos = [...state.todos];
    switch (action.type) {
        case actionTypes.ADD_TODO:
            const newTodo = action.data
            newTodo['id'] = action.id
            return {
                ...state,
                todos: state.todos.concat(newTodo)
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
                    todo.done = action.done
                }
                return todo;
            });
            return {
                ...state,
                todos: todos
            }
        case actionTypes.SET_TODOS:
            for (const [ key, value ] of Object.entries(action.data)) {
                todos.push({
                    ...value,
                    id: key
                })
            }
            console.log(todos);
            return {
                ...state,
                todos: todos
            }
        default:
            return state;
    }
}

export default reducer;