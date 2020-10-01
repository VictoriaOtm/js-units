jest.mock('../utils/getDate');

import React from 'react';
import Order from './Order';
import { configure, shallow } from 'enzyme';
import { getDate } from '../utils/getDate';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import { fakeOrders } from '../mock/fakeOrders';

configure({ adapter: new Adapter() });

describe('Test Order component', () => {
    let wrapper;
    beforeEach(() => {
        jest.clearAllMocks();

        wrapper = shallow(<Order/>);
        getDate.mockReturnValue("1 октября, ср, 2020 год");
    });

    it('render default', () => {
        wrapper = shallow(<Order order = {fakeOrders[0]}/>);

        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('test getDate default', () => {
        wrapper = shallow(<Order order = {fakeOrders[0]}/>);

        expect(getDate).toHaveBeenCalledTimes(1);
    });

    it('render empty order', () => {
        wrapper.setProps({order: {}});

        expect(toJson(wrapper)).toMatchSnapshot();
    })

    it('render order with empty items', () => {
        wrapper.setProps({order: {shop: "shop", date: 111, items: []}});

        expect(toJson(wrapper)).toMatchSnapshot();
    })
});
