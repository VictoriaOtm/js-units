import React from "react";
import Order from "./Order";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";
import {fakeOrders} from "../mock/fakeOrders";

configure({adapter: new Adapter()});

describe('Order component', () => {
    const wrapper = shallow(<Order order={fakeOrders[0]}/>);

    it('render with order', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('set order prop', () => {
        wrapper.setProps({
            order: fakeOrders[2]
        });

        expect(wrapper.find('.Order-item').length).toBe(fakeOrders[2].items.length);
    });
});
