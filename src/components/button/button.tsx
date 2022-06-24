import _ from 'lodash';
import React from 'react';
import styled, { css } from 'styled-components';
import { darken } from '../../style';
import classNames from 'classnames';
import { fonts } from '../../style';

// components

// constants
import styles from './styles';
import colors from '../../style/colors';

const variants = styles.variants;
const sizes = styles.sizes;

interface ButtonTheme {
	bgColor?: string;
	activeBgColor?: string;
	activeColor?: string;
	borderColor?: string;
	hoverBorderColor?: string;
	activeBorderColor?: string;
	hoverBgColor?: string;
	color?: string;
	loaderProps?: { size?: any; variant?: any };
}

const getBackgroundColor = ({ variant, actionColor }: { variant: keyof typeof variants; actionColor: string }) => {
	const selectedTheme = variants[variant] || {};
	const themeBgColor = selectedTheme['bgColor'];

	if (themeBgColor === 'action') {
		return actionColor;
	}

	return themeBgColor;
};

const getActiveBackground = ({
	variant,
	actionColor,
	actionLight,
}: {
	variant: keyof typeof variants;
	actionColor: string;
	actionLight: string;
}) => {
	const selectedTheme: ButtonTheme = variants[variant] || {};
	const themeActiveBgColor = selectedTheme['activeBgColor'];
	const themeBackgroundColor = selectedTheme['bgColor'];
	const themeBgColor = selectedTheme['bgColor'];

	if (themeActiveBgColor === 'action') {
		return actionColor;
	}

	if (themeActiveBgColor) {
		if (themeActiveBgColor === 'actionLight') {
			return actionLight;
		}

		return themeActiveBgColor;
	}

	if (themeBgColor === 'action') {
		return actionColor && darken(0.16, actionColor);
	}

	return themeBackgroundColor && darken(0.16, themeBackgroundColor);
};

const getHoverColor = ({
	variant,
	actionColor,
	actionColorDarker,
}: {
	variant: keyof typeof variants;
	actionColor: string;
	actionColorDarker?: string;
}) => {
	const hoverColor = _.get(variants, [variant, 'hoverColor']) || _.get(variants, [variant, 'color']);

	if (hoverColor === 'action') {
		return actionColor;
	}
	if (hoverColor === 'actionColorDarker') {
		return actionColorDarker;
	}

	return hoverColor;
};

const getHoverBackground = ({
	variant,
	actionColor,
	actionLight,
}: {
	variant: keyof typeof variants;
	actionColor: string;
	actionLight: string;
}) => {
	const selectedTheme: ButtonTheme = variants[variant] || {};
	const themHoverBgColor = selectedTheme['hoverBgColor'];
	const themeBgColor = selectedTheme['bgColor'];

	if (themHoverBgColor === 'action') {
		return actionColor;
	}

	if (themHoverBgColor === 'actionLight') {
		return actionLight;
	}

	if (themHoverBgColor) {
		return themHoverBgColor;
	}

	if (themeBgColor === 'action') {
		return themeBgColor && actionColor && darken(0.08, actionColor);
	}

	return themeBgColor && darken(0.08, themeBgColor);
};

const getActiveColor = ({ variant, actionColor }: { variant: keyof typeof variants; actionColor: string }) => {
	const selectedTheme: ButtonTheme = variants[variant] || {};
	const activeColor = selectedTheme.activeColor;

	if (activeColor === 'action') {
		return actionColor;
	}

	return selectedTheme.activeColor;
};

const getBorderColor = ({ variant, actionColor }: { variant: keyof typeof variants; actionColor: string }) => {
	const selectedTheme: ButtonTheme = variants[variant] || {};
	const themeBorderColor = selectedTheme.borderColor;

	if (themeBorderColor === 'action') {
		return actionColor;
	}

	if (themeBorderColor) {
		return themeBorderColor;
	}

	return getBackgroundColor({ variant, actionColor });
};

const getHoverBorderColor = ({
	variant,
	actionColor,
	actionLight,
}: {
	actionLight: string;
	variant: keyof typeof variants;
	actionColor: string;
}) => {
	const selectedTheme: ButtonTheme = variants[variant] || {};
	const themeHoverBorderColor = selectedTheme.hoverBorderColor;

	if (themeHoverBorderColor === 'actionLight') {
		return actionLight;
	}

	if (themeHoverBorderColor === 'action') {
		return actionColor;
	}

	if (themeHoverBorderColor) {
		return themeHoverBorderColor;
	}

	return getHoverBackground({ variant, actionColor, actionLight });
};

const getActiveBorderColor = ({
	variant,
	actionColor,
	actionLight,
}: {
	variant: keyof typeof variants;
	actionColor: string;
	actionLight: string;
}) => {
	const selectedTheme: ButtonTheme = variants[variant] || {};
	const themeActiveBorderColor = selectedTheme.activeBorderColor;

	if (themeActiveBorderColor === 'action') {
		return actionColor;
	}

	if (themeActiveBorderColor === 'actionLight') {
		return actionLight;
	}

	if (themeActiveBorderColor) {
		return themeActiveBorderColor;
	}

	return getActiveBackground({ variant, actionColor, actionLight });
};

const getColor = ({ variant, actionColor }: { variant: keyof typeof variants; actionColor: string }) => {
	const selectedTheme: ButtonTheme = variants[variant] || {};
	const themeColor = selectedTheme.color;

	if (themeColor === 'action') {
		return actionColor;
	}

	if (themeColor) {
		return themeColor;
	}

	return getBackgroundColor({ variant, actionColor });
};

export interface ButtonProps {
	variant: keyof typeof variants;
	loading?: boolean;
	children?: React.ReactNode | string;
	className?: string;
	active?: boolean;
	type?: 'button' | 'submit';
	size: keyof typeof sizes;
	loaderProps?: { loading?: boolean; variant?: any };
	disabled?: boolean;
	'data-name'?: string;
	'data-action'?: string;
	'data-value'?: string;
	'data-id'?: string;
	'aria-label'?: string;
	componentClass?: React.ElementType;
	to?: string;
	weight?: any;
	alignItems?: 'center' | 'flex-start' | 'flex-end';
	block?: boolean;
	justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-around' | 'space-between';
	display?: 'block' | 'flex' | 'inline-flex';
	animation?: string;
	flexShrink?: 1 | 0;
	textAlign?: 'left' | 'right' | 'center';
	height?: string;
	whiteSpace?: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	textTransform?: 'capitalize';
	position?: 'relative' | 'absolute' | 'fixed' | 'static';
}

export const ButtonComponent = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			variant,
			loading,
			children,
			className,
			active,
			type,
			size,
			loaderProps,
			disabled,
			'data-name': dataName,
			'data-action': dataAction,
			'data-value': dataValue,
			'data-id': dataId,
			onClick,
			'aria-label': ariaLabel,
			componentClass: Component = 'button',
			to,
		},
		ref,
	) => (
		<Component
			role={'button'}
			type={type}
			ref={ref}
			className={classNames(className, { active }, { disabled: disabled || loading })}
			onClick={onClick}
			disabled={disabled || loading}
			data-bi={true}
			data-name={dataName}
			data-action={dataAction}
			data-value={dataValue}
			aria-label={ariaLabel}
			aria-disabled={disabled}
			aria-pressed={active}
			to={to}
			data-id={dataId}
		>
			{loading && (
				<div
					{..._.get(sizes, [size, 'loaderProps'])}
					{..._.get(variants, [variant, 'loaderProps'])}
					className={'button-loader'}
					{...loaderProps}
				/>
			)}

			{children}
		</Component>
	),
);

const StyledButton = styled(ButtonComponent).withConfig({
	shouldForwardProp: prop =>
		![
			'weight',
			'textTransform',
			'height',
			'weight',
			'block',
			'alignItems',
			'justifyContent',
			'display',
			'animation',
			'whiteSpace',
			'textAlign',
			'flexShrink',
		].includes(prop),
})<ButtonProps>`
	padding: ${props => sizes[props.size]?.padding};
	height: ${props => props.height || sizes[props.size].height};
	border-radius: 4px;
	text-transform: ${props => props.textTransform};
	border: 1px solid ${props => getBorderColor({ variant: props.variant, actionColor: props.theme.actionColor })};
	background-color: ${props => getBackgroundColor({ variant: props.variant, actionColor: props.theme.actionColor })};
	transition: all 160ms ease;
	vertical-align: middle;
	touch-action: manipulation;
	cursor: pointer;
	background-image: none; // Reset unusual Firefox-on-Android default style; see https://github.com/necolas/normalize.css/issues/214
	color: ${props => getColor({ variant: props.variant, actionColor: props.theme.actionColor })};
	display: ${props => (props.block ? 'flex' : 'inline-flex')};
	align-items: ${props => props.alignItems || 'center'};
	justify-content: ${props => props.justifyContent || 'center'};
	font-family: ${fonts.roboto};
	font-size: ${props => sizes[props.size].fontSize};
	position: ${props => props.position || 'relative'};

	${props =>
		props.loading &&
		css`
			&,
			& > *:not(.button-loader) {
				color: transparent !important;
			}
		`};

	${props =>
		props.block &&
		css`
			width: 100%;
		`};

	${props =>
		props.display === 'block' &&
		css`
			display: block;
		`};

	${props =>
		props.animation &&
		css`
			&:hover:not([disabled]):not(.disabled) {
				& > * {
					animation: ${props.animation} 600ms 2;
				}
			}
		`};

	${props => css`
		flex-shrink: ${props.flexShrink};
	`};

	${props =>
		props.whiteSpace &&
		css`
			white-space: ${props.whiteSpace};
		`};

	${props =>
		props.textAlign &&
		css`
			text-align: ${props.textAlign};
		`};

	&,
	& * {
		font-weight: ${props => props.weight || 500};
	}

	&,
	&:active,
	&.active {
		&:focus,
		&.focus {
			outline: none;
		}
	}

	&:focus-visible,
	&:hover,
	&:focus,
	&.focus {
		text-decoration: none;
		color: ${props => _.get(variants, [props.variant, 'color'])};
	}

	&:active,
	&.active {
		outline: 0;
		background-image: none;
		box-shadow: none;
		border-style: solid;
		background-color: ${props =>
			getActiveBackground({
				variant: props.variant,
				actionColor: props.theme.actionColor,
				actionLight: props.theme.actionLight,
			})};
		color: ${props => getActiveColor({ variant: props.variant, actionColor: props.theme.actionColor })};
	}

	&.disabled,
	&[disabled],
	fieldset[disabled] & {
		cursor: not-allowed;
		box-shadow: none;
		background-color: ${props => _.get(variants, [props.variant, 'disabledBackground']) || colors.gray80};
		border-color: ${props => _.get(variants, [props.variant, 'disabledBackground']) || colors.gray80};
		color: ${props => _.get(variants, [props.variant, 'disabledColor']) || colors.gray50};
		border-style: solid;

		> * {
			color: ${props => _.get(variants, [props.variant, 'disabledColor']) || colors.gray50};
			cursor: not-allowed;
		}
	}

	&:focus-visible:not(.disabled):not([disabled]) {
		box-shadow: 0 0 0 3px #3986ac;
	}

	&:hover:not(.disabled):not([disabled]) {
		border-color: ${props =>
			getHoverBorderColor({
				variant: props.variant,
				actionColor: props.theme.actionColor,
				actionLight: props.theme.actionLight,
			})};
		background-color: ${props =>
			getHoverBackground({
				variant: props.variant,
				actionColor: props.theme.actionColor,
				actionLight: props.theme.actionLight,
			})};
		border-style: solid;
		color: ${props =>
			getHoverColor({
				variant: props.variant,
				actionColor: props.theme.actionColor,
				actionColorDarker: props.theme.actionColorDarker,
			})};
	}

	&:active:hover:not(.disabled):not([disabled]),
	&.active:not(.disabled):not([disabled]) {
		background-color: ${props =>
			getActiveBackground({
				variant: props.variant,
				actionColor: props.theme.actionColor,
				actionLight: props.theme.actionLight,
			})};
		border-color: ${props =>
			getActiveBorderColor({
				variant: props.variant,
				actionColor: props.theme.actionColor,
				actionLight: props.theme.actionLight,
			})};
		color: ${props => getActiveColor({ variant: props.variant, actionColor: props.theme.actionColor })};
		border-style: solid;
	}

	.button-loader {
		position: absolute;
	}
`;

const Button = (props: ButtonProps) => <StyledButton {...props} />;

Button.defaultProps = {
	size: 'lg',
	variant: 'action',
	type: 'button',
	textAlign: 'center',
};

Button.displayName = 'Button';

export default Button;
