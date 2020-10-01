import React from "react";
import Order from "./Order";
import {shallow, configure} from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe("Object component", () => {
    it('render default', () => {
        const wrapper = shallow(<Order/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('render with data', () => {
        const wrapper = shallow(<Order order={{shop: "Test", date: 1}}/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('render with no date', () => {
        const wrapper = shallow(<Order order={{shop: "Test"}}/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('render with no shop', () => {
        const wrapper = shallow(<Order order={{date: 1}}/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('render with no shop and data', () => {
        const wrapper = shallow(<Order order={{}}/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('render with data and items', () => {
        const wrapper = shallow(<Order order={{shop: "Test", date: 1, items: [1,2,3]}}/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
})
