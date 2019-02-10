import * as actionTypes from '../actions/actionTypes';

const initialState = {
    todos: [],
    loadingAll: false,
    loadingTodo: false
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
                todos: todos,
                loadingTodo: false
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
                todos: todos,
                loadingTodo: false
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
                todos: todos,
                loadingTodo: false
            }
        case actionTypes.FETCH_START:
            return {
                ...state,
                loadingAll: true
            }
        case actionTypes.FETCH_FAIL:
            return {
                ...state,
                loadingAll: false
            }
        case actionTypes.SET_TODOS:
            for (const [ key, value ] of Object.entries(action.data)) {
                todos.push({
                    ...value,
                    id: key
                })
            }
            return {
                ...state,
                todos: todos,
                loadingAll: false
            }
        case actionTypes.LOADING_TODO_START:
            return {
                ...state,
                loadingTodo: true
            }
        case actionTypes.LOADING_TODO_ERROR:
            return {
                ...state,
                loadingTodo: false
            }
        default:
            return state;
    }
}

export default reducer;