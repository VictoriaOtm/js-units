import React from 'react';
import Order from './Order';
import {sortTypes} from '../utils/sortOrders';
import {shallow, configure} from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
jest.mock('../utils/getDate')
import {getDate} from '../utils/getDate';


beforeEach(() => {
    getDate.mockClear();
});

getDate.mockReturnValue(42);

configure({adapter: new Adapter()});

describe('App component', () => {
    const wrapper = shallow(<Order/>);

    it('render with default state DATE', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('set props', () => {
        wrapper.setProps({order: {shop: 'sh', date: 10}});
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('set null props', () => {
        wrapper.setProps({order: {shop: undefined, date: undefined}});
        expect(toJson(wrapper)).toMatchSnapshot();
    });


});
