import Order from "./Order";
import {configure, shallow} from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import {fakeOrders} from "../mock/fakeOrders";

configure({ adapter: new Adapter() });

describe('Order component', () => {


    it('order with empty order', () => {
        const wrapper = shallow(<Order
        order = {{}}/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('order with one element order ', () => {
        const wrapper = shallow(<Order
            order = {fakeOrders[1]}
        />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('order with full order ', () => {
        const wrapper = shallow(<Order
            order = {fakeOrders}
        />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});