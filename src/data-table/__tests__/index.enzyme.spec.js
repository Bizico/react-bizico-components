import React from 'react';
import { shallow, mount } from 'enzyme';

function setup() {

	const enzymeWrapper = shallow(<div>lmao</div>);

	return {
		enzymeWrapper
	}
}

describe('DataTable', () => {

	it("with enzyme", function() {
		const { enzymeWrapper } = setup();

		expect(enzymeWrapper.find('div').hasClass('about')).toBe(false);

	});

});
