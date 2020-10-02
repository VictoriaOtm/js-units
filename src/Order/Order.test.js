/* eslint-disable import/first */
jest.mock("../utils/getDate");

import {getDate} from "../utils/getDate";
import React from "react";
import Order from "./Order";
import {shallow, configure} from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
getDate.mockReturnValue("2 октября, пт, 2020 год");

describe("Object component", () => {

    afterEach(() => {
        jest.resetAllMocks()
    })

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
        const wrapper = shallow(<Order order={{shop: "Test", date: 1, items: [1, 2, 3]}}/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('check if get date call', () => {
        const orderData = {shop: "Test", date: 1}
        shallow(<Order order={orderData}/>)
        expect(getDate).toHaveBeenCalledWith(orderData.date)
    })
})
