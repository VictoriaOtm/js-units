import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "../App/App";
import toJson from "enzyme-to-json";
import React from "react";
import Order from "./Order";
import {fakeOrders} from "../mock/fakeOrders";

configure({ adapter: new Adapter() });

describe('Order Component', () => {
    const props0 = { order : fakeOrders[0] }
    const TestOrder = <Order {...props0} />;

    const testOrder =  {
        id: 123,
        date: 1544356800000,
        shop: 'Ali Express',
        items: []
    };

    const testOrder2 =  {
        id: 123,
        date: null,
        shop: 'Ali Express',
        items: []
    };


    it('With order', () => {
        const wrapper = shallow(TestOrder);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    const props1 = { order : fakeOrders[1] }
    const NewTestOrder = <Order {...props1} />;

    it('Custom Order Components', () => {
        const otherWrapper = shallow(NewTestOrder);
        expect(toJson(otherWrapper)).toMatchSnapshot();
    });

    const props2 = { order : testOrder }
    const TestOrderZero = <Order {...props2} />;

    it('Custom Order Components with zero items', () => {
        const otherWrapper = shallow(TestOrderZero);
        expect(toJson(otherWrapper)).toMatchSnapshot();
    });

    const props3 = { order : null }
    const TestOrderWithNull = <Order {...props3} />;

    it('Custom Order Components with zero items', () => {
        const otherWrapper = shallow(TestOrderWithNull);
        expect(toJson(otherWrapper)).toMatchSnapshot();
    });

    const props4 = { order : testOrder2 }
    const TestOrderWithNullDate = <Order {...props4} />;

    it('Custom Order Components with null date', () => {
        const otherWrapper = shallow(TestOrderWithNullDate);
        expect(toJson(otherWrapper)).toMatchSnapshot();
    });


});
