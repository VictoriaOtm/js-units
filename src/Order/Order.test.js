jest.mock('../utils/getDate');

import {getDate} from '../utils/getDate';

import React from "react";
import Order from "./Order";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";
import {fakeOrders} from "../mock/fakeOrders";

configure({ adapter: new Adapter() });

describe('Order Component', () => {

    beforeEach(() => {
        getDate.mockReturnValue('9 декабря, вс, 2018 год');
    });

    afterEach(() => {
        jest.clearAllMocks();
    });
    afterAll(() => {
        jest.resetModules();
    });

    it('render with order', () => {
        const wrapper = shallow(<Order order={fakeOrders[0]}/>);

        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('set another order prop', () => {
        const wrapper = shallow(<Order order={fakeOrders[0]}/>);
        wrapper.setProps({order: fakeOrders[1]});

        expect(wrapper.find('.Order-item').length).toBe(fakeOrders[1].items.length);
    });
});
