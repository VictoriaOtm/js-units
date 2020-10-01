import React from 'react';
import Order from './Order';
import {shallow, configure} from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

jest.mock('../utils/getDate');
import {getDate} from '../utils/getDate';
import {fakeOrders} from "../mock/fakeOrders";

configure({ adapter: new Adapter() });

describe('Order component', () => {
    let wrapper = {};

    beforeEach(() => {
        getDate.mockReturnValue(111);
        wrapper = shallow(<Order order = {fakeOrders[0]}/>);
    });

    afterEach(() => {
        jest.clearAllMocks();
    })

    it('render with valid fake props', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('check date mock', () => {
        let result = wrapper.find('#date').text();
        expect(result).toEqual('111');
    });

    it('invalid date mock', () => {
        getDate.mockReturnValue(null);
        wrapper = shallow(<Order order = {fakeOrders[0]}/>);
        let result = wrapper.find('#date').text();
        expect(result).toEqual('');
    });

    it('no props', () => {
        wrapper = shallow(<Order/>);
        let result = wrapper.text();
        expect(result).toEqual('');
    });

    it('invalid props', () => {
        wrapper = shallow(<Order order = {{a: 1}}/>);
        let result = wrapper.text();
        expect(result).toEqual('');
    });
});
