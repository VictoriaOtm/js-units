import React from "react";
import Order from "./Order";
import {configure, shallow} from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16"; 
import {fakeOrders} from "../mock/fakeOrders";

configure({ adapter: new Adapter() });

describe('Order сomponent', () => {
	const wrapper = shallow(<Order order={fakeOrders[0]}/>);

	it('render with fake order', () => {
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
