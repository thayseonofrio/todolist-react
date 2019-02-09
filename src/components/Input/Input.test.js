import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Input from './Input';

configure({adapter: new Adapter()});

describe('<Input />', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Input /> );
    });

    it ('should render an input', () => {
        expect(wrapper.find('input')).toHaveLength(1);
    });

    it ('should render a checkbox input given the prop type is checkbox', () => {
        wrapper.setProps({
            type: 'checkbox'
        })
        expect(wrapper.find('[type="checkbox"]')).toHaveLength(1);
    });

    it ('should render a text input given the prop type is text', () => {
        wrapper.setProps({
            type: 'text'
        })
        expect(wrapper.find('[type="text"]')).toHaveLength(1);
    });

    it ('should check the checkbox input given the prop checked is true', () => {
        wrapper.setProps({
            type: 'checkbox',
            checked: true,
            onInputChecked: () => {}
        })
        expect(wrapper.find('[type="checkbox"]').html()).toContain("checked");
    });

    it ('should not check the checkbox input given the prop checked is false', () => {
        wrapper.setProps({
            type: 'checkbox',
            checked: false,
            onInputChecked: () => {}
        })
        expect(wrapper.find('[type="checkbox"]').html()).not.toContain("checked");
    });

    it ('should set text input value based on props', () => {
        wrapper.setProps({
            type: 'text',
            value: 'test',
            onInputChange: () => {}
        })
        expect(wrapper.find('[type="text"]').html()).toContain("test");
    });
});
