import React, { useContext } from 'react';
import { ThemeContext } from './withThemeContext';
import '../App.css';

export default function SwitchButton() {
	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;

	const onClick = () => {
		if (darkMode) {
			theme.dispatch({ type: 'LIGHTMODE' });
		} else {
			theme.dispatch({ type: 'DARKMODE' });
		}
	};

	return (
		<button className={`btn ${darkMode ? 'btn-light' : 'btn-dark'}`} onClick={onClick}>
			{darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
		</button>
	);
}
