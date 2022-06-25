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

			{isOpen && (
				<MenuDropdown>
					<MenuItem
						{...getMenuItemProps(0)}
						onClick={() => setIsOpen(true)}
						className={classNames(activeIndex === 0 && 'active', 'blue')}
					>
						first item
					</MenuItem>
					<MenuItem
						{...getMenuItemProps(1)}
						className={classNames(activeIndex === 1 && 'active', 'blue')}
					>
						second item
					</MenuItem>
				</MenuDropdown>
			)}

			<div>
				<Tooltip title={"click here"}>
					<MenuButton {...getButtonProps?.()} />
				</Tooltip>
			</div>
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

export default HomePage;
