import React from 'react';
import styled from 'styled-components';
import { SquareButton } from '../button';
import Icon from '../icon';
import useMenu from '../../headless/use-menu/use-menu';
import { colors } from '../../style';


export const MenuDropdown = styled.div`
	width: 260px;
	box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.5);
	background: white;
	border-radius: 8px;
	display: inline-block;
	margin-top: 8px;
	margin-bottom: 8px;
	overflow: hidden;
`;

export const MenuButton = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} {...props}>
            <SquareButton
                {...props}
                variant={'secondary'}
                aria-label={'open menu'}
                size={'sm'}
            >
                <Icon name={'THREE_DOTS'} />
            </SquareButton>
        </div>
    );
});

export const MenuItem = styled.div.attrs({ className: 'menu-item' })`
	height: 28px;
	padding: 8px;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;

	&:hover {
		background: ${colors.gray95};
	}

	&.active {
		background: ${colors.gray95};
	}
`;

export const MenuContainer = styled.div.attrs({ className: 'menu' })`
	display: block;
`;



export default useMenu;
