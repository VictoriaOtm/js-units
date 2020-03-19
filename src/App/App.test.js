import React from 'react';
import App from './App';
import {sortTypes} from '../utils/sortOrders';
import {shallow, configure} from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('App component', () => {
  const wrapper = shallow(<App/>);

  it('render with default state DATE', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('set state COUNT', () => {
    // вариант 1
    wrapper.setState({sortType: sortTypes.COUNT});
    expect(toJson(wrapper)).toMatchSnapshot();

    // вариант 2
    // wrapper.find('select').simulate('change', {
    //   target: {value: sortTypes.COUNT}
    // });

    expect(wrapper.state('sortType')).toEqual(sortTypes.COUNT);
  });
});
