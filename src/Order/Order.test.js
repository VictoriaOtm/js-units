import React from 'react'
//замокать getDate
// unit на sortOrders
// unit на компонент Order
import { shallow, configure } from 'enzyme'
import toJson from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16'
import Order from './Order'
import { getDate } from '../utils/getDate'
import {fakeOrders} from '../mock/fakeOrders'


jest.mock('../utils/getDate')
configure({ adapter : new Adapter() })


describe('Order Component', () => {
  let mocked;
  beforeEach(() => {
    mocked = getDate.mockReturnValue('13 марта, ср, 2019 год');
  });
  
  afterEach(() => {
    jest.clearAllMocks();
    jest.resetModules();
  });
  
  it('With order', () => {
    const props = { order : fakeOrders[0] }
    const TestOrder = <Order {...props} />;
    const wrapper = shallow(TestOrder);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  
  
  it('Custom Order Components', () => {
    const props = { order : fakeOrders[1] }
    const TestOrder = <Order {...props} />;
    const otherWrapper = shallow(TestOrder);
    expect(toJson(otherWrapper)).toMatchSnapshot();
  });
  
  
  it('With order', () => {
    const props = {
      order : 	{
        id: 123,
        date: 1544356800000,
        shop: 'Ali Express',
      },
    }
    const TestOrder = <Order {...props} />;
    const wrapper = shallow(TestOrder);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  
  it('With order', () => {
    const props = {}
    const TestOrder = <Order {...props} />;
    const wrapper = shallow(TestOrder);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});