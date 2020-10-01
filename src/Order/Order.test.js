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
	let wrapper;
	beforeEach(() => {
		jest.clearAllMocks();
		wrapper = shallow(<Order order={fakeOrders[0]}/>);
		getDate.mockReturnValue('14 марта, чт, 2019 год');
	});

	it('renders correct', () => {
		const wrapper = shallow(<Order order={fakeOrders[0]}/>);

		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it('calls getDate()', () => {
		shallow(<Order order={fakeOrders[0]}/>);

		expect(getDate).toHaveBeenCalled();
		expect(getDate).toHaveBeenCalledWith(fakeOrders[0].date);
	});
});
