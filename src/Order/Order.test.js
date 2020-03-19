import React from 'react';
import Order from './Order';
import {shallow, configure} from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import { fakeOrders } from '../mock/fakeOrders';

configure({ adapter: new Adapter() });

describe('Order component', () => {
  it('render[order1]', () => {
    const wrapper = shallow(<Order order={fakeOrders[0]}/>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('render order without items', () => {
    const wrapper = shallow(<Order order={fakeOrders[3]}/>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
