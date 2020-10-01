import React from 'react';
import Order from './Order';
import {sortTypes} from '../utils/sortOrders';
import {shallow, configure} from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

jest.mock('../utils/getDate')
import {getDate} from '../utils/getDate';
import {fakeOrders} from "../mock/fakeOrders";


const date = "42";
getDate.mockReturnValue(date);

configure({adapter: new Adapter()});

describe('App component', () => {

    beforeEach(() => {
        getDate.mockClear();
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    it('render without data', () => {
        const wrapper = shallow(<Order/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('render with real data', () => {
        const wrapper = shallow(<Order order={fakeOrders[0]}/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('set props', () => {
        const wrapper = shallow(<Order/>);
        wrapper.setProps({order: {shop: 'sh', date: 10}});
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('set null props withoud data', () => {
        const wrapper = shallow(<Order/>);
        wrapper.setProps({order: {shop: undefined, date: undefined}});
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('check date mock', () => {
        const wrapper = shallow(<Order order={fakeOrders[0]}/>);
        let result = wrapper.find('#date').text();
        expect(result).toEqual(date);
    });

});
