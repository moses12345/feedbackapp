import React from "react";
import { shallow } from "enzyme";
import Nav from "./nav.js";

const setup =(porps={})=>{
    const componet = shallow(<Nav {...porps}/>)
    return componet
}
const findby =(compo,attribute)=>{
    const wrapper = compo.find(`[data-test=${attribute}]`)
    return wrapper
}
describe("nav component",()=>{
    let compo 
    beforeEach(()=> {
        compo = setup()
    })
    it("nav",()=>{            
        // const wrapper = findby(compo,'nav')
        // expect(wrapper.length).toBe(1)
        const wrapper = setup()
        expect(wrapper.contains(<h3>logo</h3>)).toEqual(true)
    })
})