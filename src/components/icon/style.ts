import _ from 'lodash';
import colors from '../../style/colors';
import styled, { css } from 'styled-components';

const variants = {
	blackish: css`
		color: ${colors.blackish};
	`,
	inherit: css`
		color: inherit;
	`,
	'gray-40': css`
		color: ${colors.gray40};
	`,
	'gray-50': css`
		color: ${colors.gray50};
	`,
	'gray-80': css`
		color: ${colors.gray80};
	`,
	'gray-90': css`
		color: ${colors.gray90};
	`,
	gold: css`
		color: ${colors.gold};
	`,
	'rose-pink': css`
		color: ${colors.rosePink};
	`,
	action: css`
		color: ${props => props.theme.actionColor};
	`,
	tangerine: css`
		color: ${colors.tangerine};
	`,
	yellow: css`
		color: ${colors.yellow};
	`,
	transparent: css`
		color: ${colors.transparent};
	`,
	shamrock: css`
		color: ${colors.shamrock};
	`,
	'cherry': css`
		color: ${colors.cherry};
	`,
	pine: css`
		color: ${colors.pine};
	`,
	white: css`
		color: ${colors.white};
	`,
	'action-default': css`
		color: ${colors.action};
	`,
	lightBlue: css`
		color: ${colors.lightBlue};
	`,
	maroon: css`
		color: ${colors.maroon};
	`,
	purple: css`
		color: ${colors.purple};
	`,
	linkedin: css`
		color: ${colors.linkedin};
	`,
	glowGreen: css`
		color: ${colors.glowGreen};
	`,
	lightGreen: css`
		color: ${colors.lightGreen};
	`,
	green: css`
		color: ${colors.green};
	`,
	orange: css`
		color: ${colors.orange};
	`,
	'ucla-gold': css`
		color: ${colors.uclaGold};
	`,
	'american-rose': css`
		color: ${colors.americanRose};
	`,
};

const sizes = {
	xs: '10px',
	sm: '12px',
	md: '14px',
	lg: '16px',
	xl: '20px',
	xxl: '24px',
	'2xxl': '32px',
	'3xxl': '40px',
	'4xxl': '50px',
};

export { sizes, variants };
