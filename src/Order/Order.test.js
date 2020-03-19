import React from 'react';
import Order from './Order';
import {shallow, configure} from 'enzyme';
import {fakeOrders} from "../mock/fakeOrders";
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Order Component', () => {
	const wrapper = shallow(<Order order={fakeOrders[0]}/>);

	it('rendering with order', () => {
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it('setting another order', () => {
		wrapper.setProps({order: fakeOrders[1]});

		expect(wrapper.find('.Order-item').length).toBe(fakeOrders[1].items.length);
	});
});
