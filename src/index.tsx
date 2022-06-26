import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './HomePage';
import { ThemeProvider } from 'styled-components';
import { colors } from './style';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement,
);
root.render(
	<React.StrictMode>
		<ThemeProvider
			theme={{
				actionColor: colors.action,
				actionLight: colors.actionLight,
			}}
		>
			<HomePage />
		</ThemeProvider>
	</React.StrictMode>,
);
