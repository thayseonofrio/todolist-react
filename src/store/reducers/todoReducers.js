import * as actionTypes from '../actions/actionTypes';

const initialState = {
    todos: [],
    loadingAll: false
}

const addTodo = (state, action) => {
    const newTodo = action.data
    newTodo['id'] = action.id
    return {
        ...state,
        todos: state.todos.concat(newTodo)
    }
}

const deleteTodo = (state, action) => {
    let todos = [...state.todos];
    todos = todos.filter(todo => todo.id !== action.id);
    return {
        ...state,
        todos: todos
    }
}

const editTodo = (state, action) => {
    let todos = [...state.todos];
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
}

const toggleTodo = (state, action) => {
    let todos = [...state.todos];
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
}

const fetchStart = (state) => {
    return {
        ...state,
        loadingAll: true
    }
}

const fetchFail = (state) => {
    return {
        ...state,
        loadingAll: false
    }
}

const setTodos = (state, action) => {
    let todos = [...state.todos];
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
}


export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TODO:
            return addTodo(state, action);
        case actionTypes.DELETE_TODO:
            return deleteTodo(state, action);
        case actionTypes.EDIT_TODO:
            return editTodo(state, action);
        case actionTypes.TOGGLE_TODO:
            return toggleTodo(state, action);
        case actionTypes.FETCH_START:
            return fetchStart(state);
        case actionTypes.FETCH_FAIL:
            return fetchFail(state);
        case actionTypes.SET_TODOS:
            return setTodos(state, action);
        default:
            return state;
    }
}

export default reducer;