import React from 'react';
import Order from './Order';
import {shallow, configure} from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import {fakeOrders} from '../mock/fakeOrders.js';

configure({ adapter: new Adapter() });

describe('Order component', () => {
    it('render', () => {
        const wrapper = shallow(<Order order={fakeOrders[0]}/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('only date and shop here', () => {
        const order = {
          shop: 'Adidas',
          date: '939686400'
        }
        const wrapper = shallow(<Order order={order}/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});