import React from 'react';
import Order from './Order';
import {fakeOrders} from '../mock/fakeOrders';
import {shallow, configure} from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('App component', () => {
    it('Render with date from fakeOrders[0]', () => {
        const wrapper = shallow(<Order key={0} order={fakeOrders[0]}/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('Render with date (items: null)', () => {
        const withNullItems = {
            id: 123,
            date: 1544356800000,
            shop: 'Ali Express',
            items: null
        };

        const wrapper = shallow(<Order key={0} order={withNullItems}/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
