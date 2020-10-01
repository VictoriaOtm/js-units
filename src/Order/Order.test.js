jest.mock('../utils/getDate');

import {getDate} from "../utils/getDate";

import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Order from "./Order";
import React from "react";
import toJson from "enzyme-to-json";
import {fakeOrders} from '../mock/fakeOrders';


Enzyme.configure({adapter: new Adapter()});


describe('Order', () => {
    const resetMocks = () => {
        jest.clearAllMocks();
        getDate.mockReturnValue('28 сентября, пн, 2020 год');
    }
    beforeAll(() => {
        resetMocks();
    })

    afterEach(() => {
        resetMocks()
    })

    it('render with default DATE', () => {
        const wrapper = shallow(<Order order={fakeOrders[0]}/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    })

    it('getDate is called', () => {
        shallow(<Order order={fakeOrders[0]}/>);
        expect(getDate).toHaveBeenCalled();
    });

    it('empty items', () => {
        const wrapper = shallow(<Order order={{items: []}}/>);
        expect(wrapper.find('.Order-items').length).toBe(0);
    });

    it('render without order', () => {
        const wrapper = shallow(<Order/>);
        expect(wrapper.getElement()).toBeNull();
    })
})