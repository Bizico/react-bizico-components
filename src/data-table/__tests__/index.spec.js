import React from 'react';
import {DataTable} from '../';
import renderer from 'react-test-renderer';

describe('DataTable', () => {

  it("should create component", function() {

		const component = renderer.create(
			<DataTable />
		);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});

});
