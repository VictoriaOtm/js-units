import {shallow, configure} from 'enzyme';
import React from 'react';
import Order from './Order';
import {sortTypes} from '../utils/sortOrders';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe("Object component", () => {
    it('Rendering default', () => {
        const wrapper = shallow(<Order/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('Rendering with data', () => {
        const wrapper = shallow(<Order order={{shop: "Test", date: 1}}/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    
    it('Rendering with data and shop', () => {
        const wrapper = shallow(<Order order={{shop: "Test", date: 1, items: [1,2,3]}}/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('Rendering without data', () => {
        const wrapper = shallow(<Order order={{shop: "Test"}}/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('Rendering without shop', () => {
        const wrapper = shallow(<Order order={{ date: 1}}/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('rRendering without shop and data', () => {
        const wrapper = shallow(<Order order={{}}/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

})