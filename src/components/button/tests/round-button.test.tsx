import React from 'react';

// @ts-ignore
import testUtils from 'testim/src/testing-lib';
import '@testing-library/jest-dom';

// components
import { RoundButton } from '../index';

describe('<RoundButton />', () => {
	const { getByRole } = testUtils.render(<RoundButton />);

	it('should render correctly', () => {
		expect(getByRole('button')).toBeTruthy();
	});
});
