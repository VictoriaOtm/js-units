import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "../App/App";
import toJson from "enzyme-to-json";
import React from "react";
import Order from "./Order";
import {fakeOrders} from "../mock/fakeOrders";
import {getDate} from "../utils/getDate";
jest.mock('../utils/getDate');

configure({ adapter: new Adapter() });

describe('Order Component', () => {
    let mocked;
    beforeEach(() => {
         mocked = getDate.mockReturnValue('13 марта, ср, 2019 год');
    });

    afterEach(() => {
        jest.clearAllMocks();
    });


    it('With order', () => {
        const props = { order : fakeOrders[0] }
        const TestOrder = <Order {...props} />;
        const wrapper = shallow(TestOrder);
        expect(toJson(wrapper)).toMatchSnapshot();
    });



    it('Custom Order Components', () => {
        const props = { order : fakeOrders[1] }
        const NewTestOrder = <Order {...props} />;
        const otherWrapper = shallow(NewTestOrder);
        expect(toJson(otherWrapper)).toMatchSnapshot();
    });

    it('Custom Order Components with zero items', () => {
        const props = { order : {
                id: 123,
                date: 1544356800000,
                shop: 'Ali Express',
                items: []
            }
        }
        const TestOrderZero = <Order {...props} />;
        const otherWrapper = shallow(TestOrderZero);
        expect(toJson(otherWrapper)).toMatchSnapshot();
    });


    it('Custom Order Components with zero items', () => {
        const props = { order : null }
        const TestOrderWithNull = <Order {...props} />;
        const otherWrapper = shallow(TestOrderWithNull);
        expect(toJson(otherWrapper)).toMatchSnapshot();
    });

    it('Custom Order Components with null date', () => {
        const props = { order : {
                id: 123,
                date: null,
                shop: 'Ali Express',
                items: []
            } }
        const TestOrderWithNullDate = <Order {...props} />;
        const otherWrapper = shallow(TestOrderWithNullDate);
        expect(toJson(otherWrapper)).toMatchSnapshot();
    });

});
