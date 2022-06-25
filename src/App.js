import React from 'react';

import classNames from 'classnames';

// menu stuff
import { MenuButton, MenuDropdown, MenuItem } from './components/menu/menu';
import useMenu from './components/menu/menu';
import { Tooltip } from '@mui/material';

const HomePageMenu = () => {
	const {
		activeIndex,
		setIsOpen,
		isOpen,
		getMenuProps,
		getButtonProps,
		getMenuItemProps,
	} = useMenu();

	return (
		<div className={'menu'} {...getMenuProps?.()}>
			<div>
				<MenuButton {...getButtonProps?.()} />
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
			{/*<MenuWithSections />*/}
		</div>
	);
}

const MenuWithSections = () => {
	const {
		activeIndex,
		setIsOpen,
		isOpen,
		getMenuProps,
		getButtonProps,
		getMenuItemProps,
	} = useMenu();

	return (
		<div className={'menu'} {...getMenuProps?.()}>
			<div>
				<MenuButton {...getButtonProps?.()} />
			</div>
			{isOpen && (
				<MenuDropdown>
					<MenuItem
						{...getMenuItemProps(0)}
						className={classNames(activeIndex === 0 && 'active')}
					>
						second item
					</MenuItem>
					<MenuItem
						{...getMenuItemProps(1)}
						className={classNames(activeIndex === 1 && 'active')}
					>
						second item
					</MenuItem>
					<MenuItem
						{...getMenuItemProps(2)}
						className={classNames(activeIndex === 2 && 'active')}
					>
						third item
					</MenuItem>
					<MenuItem
						{...getMenuItemProps(3)}
						className={classNames(activeIndex === 3 && 'active')}
					>
						fourth item
					</MenuItem>
				</MenuDropdown>
			)}
		</div>
	);
};

export default HomePage;
