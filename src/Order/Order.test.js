import {fakeOrders} from "../mock/fakeOrders";

jest.mock('../utils/getDate');
import {getDate} from '../utils/getDate';

import React from 'react';
import Order from './Order';
import {shallow, configure} from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Order component', () => {
    const testDate = '123date123'
    let wrapper = shallow(<Order/>);

    beforeAll(() => {
        getDate.mockReturnValue(testDate);
    })

    beforeEach(() => {
        wrapper = shallow(<Order/>);
    })

    afterEach(() => {
        jest.clearAllMocks();
    })


    it('default', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('get date', () => {
        expect(getDate).toHaveBeenCalled();
    })

    it('non-empty order', () => {
        wrapper = shallow(<Order order = {fakeOrders[0]}/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    })

    it('order with empty items', () => {
        wrapper.setProps({order: {shop: "shop", date: getDate(), items: []}});

        expect(toJson(wrapper)).toMatchSnapshot();
    })
});
