import reducer from './todoReducers';
import * as actionTypes from '../actions/actionTypes';
import { mockTodos } from '../../helpers/mocks';

describe('todo reducer', () => {

    it('should return inital state', () => {
        expect(reducer(undefined, { })).toEqual({
            todos: []
        });
    });

    it('should add todo', () => {
        expect(reducer({ 
            todos: [ mockTodos[0] ]
        }, {
            type: actionTypes.ADD_TODO,
            data: mockTodos[1]
        })).toEqual({
            todos: [ mockTodos[0], mockTodos[1] ]
        });
    });

    it('should delete todo', () => {
        expect(reducer({ 
            todos: [ mockTodos[0] ]
        }, {
            type: actionTypes.DELETE_TODO,
            id: mockTodos[0].id
        })).toEqual({
            todos: [ ]
        });
    });

    it('should edit todo', () => {
        expect(reducer({ 
            todos: [ mockTodos[0] ]
        }, {
            type: actionTypes.EDIT_TODO,
            id: mockTodos[0].id,
            description: 'new description'
        })).toEqual({
            todos: [ {
                ...mockTodos[0],
                description: 'new description'
            }]
        });
    });

    it('should toggle todo', () => {
        expect(reducer({ 
            todos: [ mockTodos[0] ]
        }, {
            type: actionTypes.TOGGLE_TODO,
            id: mockTodos[0].id,
        })).toEqual({
            todos: [ {
                ...mockTodos[0],
                done: true
            }]
        });
    });
});