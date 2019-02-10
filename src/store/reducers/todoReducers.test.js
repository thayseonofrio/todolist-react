import reducer from './todoReducers';
import * as actionTypes from '../actions/actionTypes';
import { mockTodos } from '../../helpers/mocks';

describe('todo reducer', () => {

    it('should return inital state', () => {
        expect(reducer(undefined, { })).toEqual({
            loadingAll: false,
            loadingTodo: false,
            todos: []
        });
    });

    it('should add todo', () => {
        expect(reducer({ 
            todos: [  { ...mockTodos[0] } ]
        }, {
            type: actionTypes.ADD_TODO,
            data: mockTodos[1]
        })).toEqual({
            todos: [  { ...mockTodos[0] }, { ...mockTodos[1] } ]
        });
    });

    it('should delete todo', () => {
        expect(reducer({ 
            todos: [  { ...mockTodos[0] } ],
            loadingTodo: true
        }, {
            type: actionTypes.DELETE_TODO,
            id: mockTodos[0].id
        })).toEqual({
            todos: [ ],
            loadingTodo: false
        });
    });

    it('should edit todo', () => {
        expect(reducer({ 
            todos: [  { ...mockTodos[0] } ],
            loadingTodo: true
        }, {
            type: actionTypes.EDIT_TODO,
            id: mockTodos[0].id,
            description: 'new description'
        })).toEqual({
            todos: [ {
                ...mockTodos[0],
                description: 'new description'
            }],
            loadingTodo: false
        });
    });

    it('should toggle todo', () => {
        expect(reducer({ 
            todos: [ { ...mockTodos[0] } ],
            loadingTodo: true
        }, {
            type: actionTypes.TOGGLE_TODO,
            id: mockTodos[0].id,
            done: true
        })).toEqual({
            todos: [ {
                ...mockTodos[0],
                done: true
            }],
            loadingTodo: false
        });
    });

    it('should set loadingAll state on fetch start', () => {
        expect(reducer({ 
            todos: [],
            loadingAll: false
        }, {
            type: actionTypes.FETCH_START,
        })).toEqual({
            todos: [],
            loadingAll: true
        });
    });

    it('should set loadingAll state on fetch fail', () => {
        expect(reducer({ 
            todos: [],
            loadingAll: true
        }, {
            type: actionTypes.FETCH_FAIL,
        })).toEqual({
            todos: [],
            loadingAll: false
        });
    });

    it('should set todos', () => {
        expect(reducer({ 
            todos: [],
            loadingAll: true
        }, {
            type: actionTypes.SET_TODOS,
            data: { 1: { description: 'Todo 1', done: false }}
        })).toEqual({
            todos: [  { ...mockTodos[0] } ],
            loadingAll: false
        });
    });
});