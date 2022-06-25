import React from 'react';

import classNames from 'classnames';

// menu stuff
import useMenu from './components/menu/menu';
import { Tooltip } from '@mui/material';
import styled from "styled-components";
import {SquareButton} from "./components/button";
import Icon from "./components/icon";
import {colors} from "./style";

const MenuDropdown = styled.div`
	width: 260px;
	box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.5);
	background: white;
	border-radius: 8px;
	display: inline-block;
	margin-top: 8px;
	margin-bottom: 8px;
	overflow: hidden;
`;

const MenuButton = React.forwardRef((props, ref) => {
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

const MenuItem = styled.div.attrs({ className: 'menu-item' })`
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



const HomePageMenu = () => {
	const {
		activeIndex,
		setIsOpen,
		isOpen,
		getMenuProps,
		getMenuItemProps,
		getButtonProps
	} = useMenu();

	return (
		<div className={'menu'} {...getMenuProps?.()}>

			<div>
				<MenuButton />
			</div>
			{isOpen && (
				<MenuDropdown>
					<MenuItem
						{...getMenuItemProps(0)}
						className={classNames(activeIndex === 0 && 'active')}
					>
						first item
					</MenuItem>
					<MenuItem
						{...getMenuItemProps(1)}
						className={classNames(activeIndex === 1 && 'active')}
					>
						second item
					</MenuItem>
				</MenuDropdown>
			)}

		</div>
	);
};

function HomePage() {
	return (
		<div className="App">
			<h1>Home page</h1>
			<HomePageMenu />
		</div>
	);
}

export default HomePage;
