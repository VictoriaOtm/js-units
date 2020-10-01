import React from 'react';
import {shallow, configure} from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import Order from '../Order/Order';
import {fakeOrders} from "../mock/fakeOrders";

jest.mock('../utils/getDate')
import {getDate} from '../utils/getDate';

configure({ adapter: new Adapter() });

describe('Order component', () => {

  beforeEach(() => {
    getDate.mockReturnValue('1 октября, ср, 2020 год');
  })

  afterEach(() => {
    jest.clearAllMocks();
  })

  it('default render', () => {
    const wrapper = shallow(<Order order={fakeOrders[0]}/>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('getDate call', () => {
    const wrapper = shallow(<Order order={fakeOrders[0]}/>);

    expect(getDate).toHaveBeenCalled()
  });

  it('no props', () => {
    const wrapper = shallow(<Order/>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('no date and shops', () => {
    const order = {}
    const wrapper = shallow(<Order order={order}/>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('no items', () => {
    const order = {
      date: 1,
      shop: 'a'
    }
    const wrapper = shallow(<Order order={order}/>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
