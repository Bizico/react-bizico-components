//
// import React from 'react';
// import About from '../About/index';
// import renderer from 'react-test-renderer';
//
// describe('About', () => {
//
//   it("should create component", function() {
//
// 		const component = renderer.create(
// 			<About />
// 		);
// 		let tree = component.toJSON();
// 		expect(tree).toMatchSnapshot();
// 	});
//
// });

import {sum} from '../';

test('adds 1 + 2 to equal 3', () => {
	expect(sum(1, 2)).toBe(3);
});