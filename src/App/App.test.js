import React from 'react';
import App from './App';
import {sortTypes} from '../utils/sortOrders';
import {shallow, configure} from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('App component', () => {
  it('render with default state DATE', () => {
    const wrapper = shallow(<App/>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('set state COUNT', () => {
    const wrapper = shallow(<App/>);

    wrapper.find('select').simulate('change', {
      target: {value: sortTypes.COUNT}
    });

    expect(wrapper.state('sortType')).toEqual(sortTypes.COUNT);
  });
});
