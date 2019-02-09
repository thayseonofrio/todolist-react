import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Summary } from './Summary';
import { mockTodos } from '../../helpers/mocks';
import { FIRST_INDEX, SECOND_INDEX, THIRD_INDEX } from '../../helpers/constants';

configure({adapter: new Adapter()});

describe('<Summary />', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Summary /> );
    });

    it ('should render a list with 3 items', () => {
        expect(wrapper.find('ul').children()).toHaveLength(3);
    });

    it ('should show total number of todos according to props', () => {
        wrapper.setProps({
            todos: mockTodos
        })
        expect(wrapper.find('li').at(FIRST_INDEX).props().children[SECOND_INDEX]).toEqual(3);
    });

    it ('should show number of completed todos according to props', () => {
        wrapper.setProps({
            todos: mockTodos
        })
        expect(wrapper.find('li').at(SECOND_INDEX).props().children[SECOND_INDEX]).toEqual(1);
    });

    it ('should show number of not completed todos according to props', () => {
        wrapper.setProps({
            todos: mockTodos
        })
        expect(wrapper.find('li').at(THIRD_INDEX).props().children[SECOND_INDEX]).toEqual(2);
    });
});