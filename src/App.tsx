import { useContext } from 'react';
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CookiesProvider } from 'react-cookie';

import { AppContext } from './providers/app.provider';
import getTheme from './theme';
import DarkModeSwitch from './components/dark-mode-switch.component';

const App = () => {
	const {
		theme: { mode },
	} = useContext(AppContext);

	return (
		<ThemeProvider theme={createTheme(getTheme(mode))}>
			<CookiesProvider>
				<div>
					<CssBaseline />
					<p>Hello there</p>
					<DarkModeSwitch />
				</div>
			</CookiesProvider>
		</ThemeProvider>
	);
};

export default App;
