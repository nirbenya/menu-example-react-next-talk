import React from 'react';

// @ts-ignore
import testUtils from 'testim/src/testing-lib';


import '@testing-library/jest-dom';

// components
import Button from '../index';

describe('<Button />', () => {
	const { getByRole } = testUtils.render(<Button />);

	it('should render correctly', () => {
		expect(getByRole('button')).toBeTruthy();
	});
});
