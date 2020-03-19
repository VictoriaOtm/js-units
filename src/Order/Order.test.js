import React from 'react';
import {shallow, configure} from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import {fakeOrders} from '../mock/fakeOrders'
import Order from './Order'

configure({ adapter: new Adapter() });

const empty_order = {
    id: 0,
    date: 0,
    shop: '',
    items: [],
}

describe('Order component', () => {
    const wrapper = shallow(<Order order={empty_order}/>);
  
    it('render with first order', () => {
        wrapper.setProps(
            {order: fakeOrders[0]},
        );
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('check header_shop', () => {
        wrapper.setProps(
            {order: fakeOrders[2]},
        );
        expect(wrapper.find('.Order-shop').text()).toBe(fakeOrders[2].shop);
    })
    it('check header_date', () => {
        wrapper.setProps(
            {order: fakeOrders[2]},
        );
        const timeFormatted = '14 марта, чт, 2019 год'
        expect(wrapper.find('.Order-header span').at(1).text()).toBe(timeFormatted);
    })

    it('check order count', () => {
        wrapper.setProps(
            {order: fakeOrders[2]},
        );
        expect(wrapper.find('.Order-item').length).toBe(fakeOrders[2].items.length);
    })
  });