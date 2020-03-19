import React from 'react';
import Order from './Order';
import {shallow, configure} from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import {fakeOrders} from '../mock/fakeOrders';

configure({ adapter: new Adapter() });

describe('Order component', () => {
  const wrapper = shallow(<Order order={fakeOrders[0]}/>);

  it('render', () => {
    const wrapper = shallow(<Order order={fakeOrders[0]}/>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('render find lenght', () => {
      wrapper.setProps({order: fakeOrders[3]});
        expect(wrapper.find(".Order-item").lenght).toBeUndefined();
  });
});