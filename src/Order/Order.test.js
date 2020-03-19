import React from 'react';
import Order from './Order';
import {shallow, configure} from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import {fakeOrders} from "../mock/fakeOrders";

configure({ adapter: new Adapter() });

describe('Order component fakeOrdere[1]', () => {
    const wrapper = shallow(<Order order={fakeOrders[1]}/>);

    it('render Order component', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
