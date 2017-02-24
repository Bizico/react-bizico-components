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

	it("has table", function() {
		const { enzymeWrapper } = setup();

		expect(enzymeWrapper.find(Table).length).toBe(1);

	});

});
