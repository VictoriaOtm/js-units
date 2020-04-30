import React from 'react';
import Order from './Order';
import { configure, shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import { fakeOrders } from '../mock/fakeOrders';

configure({adapter: new Adapter()});

describe('Order component', () => {
    it('render with order', () => {
        const wrapper = shallow(<Order order={fakeOrders[0]}/>);
        expect(toJSON(wrapper)).toMatchSnapshot();
    });

    it('set prop order', () => {
        const wrapper = shallow(<Order order={fakeOrders[0]}/>);
        wrapper.setProps({
            order: fakeOrders[1],
        });
        expect(toJSON(wrapper)).toMatchSnapshot();
    });
});