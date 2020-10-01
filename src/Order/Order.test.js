import React from 'react';
import Order from './Order';
import {shallow, configure} from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
jest.mock('../utils/getDate');
import {getDate} from '../utils/getDate';
import {fakeOrders} from '../mock/fakeOrders';

configure({ adapter: new Adapter() });


describe('Order component', () => {

    beforeEach(() => {
        getDate.mockReturnValue('500');
    });

    afterEach(() => {
        jest.clearAllMocks()
    });

    it('render with no items', () => {
        const wrapper = shallow(<Order/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('render with some item', () => {
        const wrapper = shallow(<Order order={fakeOrders[0]}/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('set shop and date', () => {
        const wrapper = shallow(<Order order={fakeOrders[0]}/>);
        expect(wrapper.find('.Order-shop').text()).toEqual(fakeOrders[0].shop);
        expect(wrapper.find('#date').text()).toEqual('500');
    });

    it('no order', () => {
        const wrapper = shallow(<Order/>);
        expect(wrapper.getElement()).toBeNull();
    });

    it('no date and shop', () => {
        const wrapper = shallow(<Order order={{ lol: 'kek' }}/>);
        expect(wrapper.getElement()).toBeNull();
    });
});
