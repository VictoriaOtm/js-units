jest.mock('../utils/getDate');

import {getDate} from '../utils/getDate';

import React from 'react';
import {configure, shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import Order from './Order.js';
import {fakeOrders} from '../mock/fakeOrders';

configure({adapter: new Adapter()});

describe('Order component', () => {
	const wrapper = shallow(<Order order={fakeOrders[0]}/>);
	it('render with fake order', () => {
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
