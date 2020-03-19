import React from 'react';
import Order from './Order';
import {shallow, configure} from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import {fakeOrders} from "../mock/fakeOrders";

configure({ adapter: new Adapter() });

describe('Order component', () => {

    const wrapper = shallow(<Order order={fakeOrders[1]}/>);

    it('render order', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render one <order>', () => {
        expect(wrapper.find('.Order-items')).toHaveLength(1);
    });

});
