import _ from 'lodash';
import { rgba as polishedRgba, darken as makeDarker, lighten as makeLighter } from 'polished';

export const darken = (amount, color) => {
	if (!color) return '';

	return makeDarker(amount, color);
};

export const lighten = (amount, color) => {
	if (!color) return '';

	return makeLighter(amount, color);
};

export const rgba = (...args) => {
	const isValidRgba = _.compact(_.filter(args, item => _.isNumber(item)));
	if (!isValidRgba) return '';

	return polishedRgba(...args);
};
