import React from 'react';

const useMenu = () => {
	const [isOpen, setIsOpen] = React.useState(false);
	const [activeIndex, setActiveIndex] = React.useState(-1);

	const setMenuVisibility = nextIsOpen => {
		setIsOpen(nextIsOpen);
	};

	React.useEffect(() => {
		setActiveIndex(-1);
	}, [isOpen]);

	const onKeyPress = e => {
		if (e.key === 'ArrowUp') {
			setActiveIndex(curr => (curr === 0 ? 0 : curr - 1));
		} else if (e.key === 'ArrowDown') {
			setActiveIndex(curr => curr + 1);
		}
	};

	React.useEffect(() => {
		const removeEvent = cb =>
			window.removeEventListener('keydown', cb, false);
		window.addEventListener('keydown', onKeyPress);
		return () => removeEvent(onKeyPress);
	}, []);

	React.useEffect(() => {
		return () => setActiveIndex(null);
	}, []);

	return {
		activeIndex,
		setIsOpen: setMenuVisibility,
		isOpen,
		getMenuProps: () => {
			return {
				role: 'menu',
			};
		},
		getDropdownProps: () => {
			return {
				role: 'menu',
			};
		},
		getButtonProps: (props = {}) => {
			return {
				'aria-haspopup': true,
				'aria-expanded': isOpen,
				onClick: () => {
					setIsOpen(!isOpen);
				},
				...props,
			};
		},
		getMenuItemProps: (index, options) => {
			return {
				role: 'menu-item',
				onClick: () => setMenuVisibility(false),
				...options,
			};
		},
	};
};

export default useMenu;
