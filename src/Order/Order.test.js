import React from "react";
import Order from "./Order";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";
import {fakeOrders} from "../mock/fakeOrders";

configure({ adapter: new Adapter() });

describe('Order component', () => {
    it('render with some default state', () => {
        const wrapper = shallow(<Order order={fakeOrders[0]}/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('render with null order', () => {
        const mockOrder = {
            id: 200,
            date: 1552585550000,
            shop: 'Тестовый шоп',
            items: null,
        };

        const wrapper = shallow(<Order order={mockOrder}/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
