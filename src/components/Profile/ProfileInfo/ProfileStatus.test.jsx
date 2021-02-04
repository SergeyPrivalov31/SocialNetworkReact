import React from 'react';
import ProfileStatus from "./ProfileStatus";
import {create} from "jest-jasmine2/build/jasmine/jasmineLight";
;

describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status="HeyHey!!!"/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("HeyHey!!!");
    });
    test("after creation <span> should be displayed", () => {
        const component = create(<ProfileStatus status="HeyHey!!!"/>);
        const root = component.root;
        let span = root.findByType("span");
        expect(span).not.toBeNull();
    });
    test("after creation <input> should not be displayed", () => {
        const component = create(<ProfileStatus status="HeyHey!!!" />);
        const root = component.root;

        expect(() => {
            let input = root.findByType("input");
        }).toThrow();
    });
    test("after creation <span> should be displayed whith correct status", () => {
        const component = create(<ProfileStatus status="HeyHey!!!"/>);
        const root = component.root;
        let span = root.findByType("span");
        expect(span.innerText).toBe("HeyHey!!!");
    });
})