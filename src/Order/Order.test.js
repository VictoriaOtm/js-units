import React from 'react';
import Order from './Order';
import {fakeOrders} from '../mock/fakeOrders';
import {shallow, configure} from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

configure({ adapter: new Adapter() });

describe('Order component', () => {

    it('render simple 1 order', () => {
        const wrapper = shallow(<Order order={fakeOrders[0]} />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it ('render false date', () => {
        const order = {
                date: -1,
            shop: 'Test',
        };
        const wrapper = shallow(<Order order={order}/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    })
});