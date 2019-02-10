import * as actionTypes from './actionTypes';
import axios from '../../axios';

export const loadingAllTodos = () => {
    return {
        type: actionTypes.FETCH_START
    }
}

export const fetchTodos = () => {
    return dispatch => {
        dispatch(loadingAllTodos());
        axios.get('/todos.json')
        .then(response => {
            dispatch(setTodos(response.data));
        })
        .catch(error => {
            dispatch(fetchTodosError());
        });
    };
}

export const fetchTodosError = () => {
    return {
        type: actionTypes.FETCH_FAIL
    }
}

export const setTodos = (data) => {
    return {
        type: actionTypes.SET_TODOS,
        data: data
    }
}

export const addTodo = (data) => {
    return dispatch => {
        axios.post('/todos.json', data)
        .then(response => {
            dispatch(addTodoSuccess(response.data.name, data));
        })
        .catch(error => {
        });
    };
};

export const addTodoSuccess = (id, data) => {
    return {
        type: actionTypes.ADD_TODO,
        data: data,
        id: id
    }
} 

export const deleteTodo = (id) => {
    return dispatch => {
        axios.delete('/todos/' + id + '.json')
        .then(response => {
            dispatch(deleteTodoSuccess(id));
        })
        .catch(error => {
        });
    };
};

export const deleteTodoSuccess = (id) => {
    return {
        type: actionTypes.DELETE_TODO,
        id: id
    }
} 

export const editTodo = (id, description) => {
    return dispatch => {
        axios.patch('/todos/' + id + '.json', { description: description })
        .then(response => {
            dispatch(editTodoSuccess(id, response.data.description));
        })
        .catch(error => {
        });
    };
};

export const editTodoSuccess = (id, description) => {
    return {
        type: actionTypes.EDIT_TODO,
        id: id,
        description: description
    }
} 

export const toggleTodo = (id, done) => {
    return dispatch => {
        axios.patch('/todos/' + id + '.json', { done: !done })
        .then(response => {
            dispatch(toggleTodoSuccess(id, response.data.done));
        })
        .catch(error => {
        });
    };
};

export const toggleTodoSuccess = (id, done) => {
    return {
        type: actionTypes.TOGGLE_TODO,
        id: id,
        done: done
    }
}