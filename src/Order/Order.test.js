jest.mock("../utils/getDate"); 

import React from 'react';
import {shallow, configure} from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import Order from './Order';
import {getDate} from "../utils/getDate"; 

configure({ adapter: new Adapter() });
getDate.mockReturnValue("99 бредобря, десятница, год абсурда"); 

describe("Object component tests", () => {
    afterEach(() => {
        jest.resetAllMocks()
    });

    it('component calls getDate function', () => {
        const orderObj = {shop: "smth", date: 100, items: [1, "2", 3.0]}
        shallow(<Order order={orderObj}/>)
        expect(getDate).toHaveBeenCalledWith(orderObj.date)
    });

    it('render with order with shop, order and items', () => {
        const wrapper = shallow(<Order order={{shop: "smth", date: 100, items: [1, "2", 3.0]}}/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('render default', () => {
        const wrapper = shallow(<Order/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('render with order with shop and data', () => {
        const wrapper = shallow(<Order order={{shop: "smth", date: 100}}/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('render with order with no shop', () => {
        const wrapper = shallow(<Order order={{date: 100}}/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('render with order with no date', () => {
        const wrapper = shallow(<Order order={{shop: "smth"}}/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('render with order={}', () => {
        const wrapper = shallow(<Order order={{}}/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('render with order=null', () => {
        const wrapper = shallow(<Order order={null}/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
