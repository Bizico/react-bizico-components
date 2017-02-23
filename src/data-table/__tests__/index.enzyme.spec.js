import React from 'react';
import { shallow, mount } from 'enzyme';
import {DataTable} from '../';
import {Table} from 'react-bootstrap';

function setup() {

	const enzymeWrapper = shallow(<DataTable />);

	return {
		enzymeWrapper
	}
}

describe('DataTable', () => {

	it("with enzyme", function() {
		const { enzymeWrapper } = setup();

		expect(enzymeWrapper.contains(<Table/>)).toBe(true);

	});

});
