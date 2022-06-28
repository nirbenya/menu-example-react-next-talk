import React from 'react';

import classNames from 'classnames';

import { Tooltip } from '@mui/material';
import Icon from './components/icon';

// binding
// props cases
// sections
// render props

// menu stuff
import useMenu, {
	MenuItem,
	MenuButton,
	MenuDropdown,
	MenuContainer,
	Menu,
} from './components/menu/menu';

const HomePageMenu = () => {
	const { activeIndex } = useMenu();

	return (
		<MenuContainer>
			<MenuButton />
			<MenuDropdown>
				<MenuItem className={classNames(activeIndex === 0 && 'active')}>
					First item
				</MenuItem>
				<MenuItem className={classNames(activeIndex === 1 && 'active')}>
					Second item
				</MenuItem>
				<MenuItem className={classNames(activeIndex === 2 && 'active')}>
					Third item
				</MenuItem>
			</MenuDropdown>
		</MenuContainer>
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

// function HomePage() {
// 	return (
// 		<div className="App">
// 			<h1>Home page</h1>
// 			<Menu>
// 				{({ activeIndex, getButtonProps, isOpen }) => (
// 					<MenuContainer>
// 						<MenuButton {...getButtonProps()} />
// 						{isOpen && (
// 							<MenuDropdown>
// 								<MenuItem
// 									className={classNames(
// 										activeIndex === 0 && 'active',
// 									)}
// 								>
// 									First item
// 								</MenuItem>
// 								<MenuItem
// 									className={classNames(
// 										activeIndex === 1 && 'active',
// 									)}
// 								>
// 									Second item
// 								</MenuItem>
// 							</MenuDropdown>
// 						)}
// 					</MenuContainer>
// 				)}
// 			</Menu>
// 		</div>
// 	);
// }

export default HomePage;
