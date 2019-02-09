import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Item } from './Item';
import Input from '../Input/Input';

configure({adapter: new Adapter()});

describe('<Item />', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Item /> );
    });

    it ('should render two <Input /> components', () => {
        expect(wrapper.find(Input)).toHaveLength(2);
    });

});
