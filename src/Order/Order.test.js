import React from 'react';
import Order from './Order';
import {shallow, configure} from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import {fakeOrders, orderShopNullable, orderDateNullable, orderItemsNullable, orderShopEmpty} from '../mock/fakeOrders';

configure({ adapter: new Adapter() });

describe('Order component', () => {
	it('render simple', () => {
		const wrapper = shallow(<Order order={fakeOrders[0]}/>);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it('render order with nullable items', () => {
		const wrapperNullable = shallow(<Order order={orderItemsNullable}/>);
		expect(toJson(wrapperNullable)).toMatchSnapshot();
	});

	it('render order with nullable shop', () => {
		const wrapper = shallow(<Order order={orderShopNullable}/>);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it('render order with empty shop', () => {
		const wrapper = shallow(<Order order={orderShopEmpty}/>);
		expect(toJson(wrapper)).toMatchSnapshot();
	});


	it('render order with nullable date', () => {
		const wrapper = shallow(<Order order={orderDateNullable}/>);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
