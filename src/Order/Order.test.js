import React from "react";
import Order from "./Order";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";
import {fakeOrders} from "../mock/fakeOrders";

configure({ adapter: new Adapter() });

describe('Order Component', () => {
	const wrapper = shallow(<Order order={fakeOrders[0]}/>);

	it('render with default state', () => {
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it('set state another order item', () => {
		wrapper.setProps({order: fakeOrders[1]});

		expect(wrapper.find('.Order-item').length).toBe(fakeOrders[1].items.length);
	});
});
