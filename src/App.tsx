/** @jsxImportSource @emotion/react */

import { useContext } from 'react';
import { CssBaseline, Typography, Container } from '@mui/material';
import {
	createTheme,
	ThemeProvider,
	responsiveFontSizes,
} from '@mui/material/styles';
import { CookiesProvider } from 'react-cookie';
import { css } from '@emotion/react';

import { AppContext } from './providers/app.provider';
import getTheme from './theme';
import Header from './components/header.component';

const containerStyle = css({
	padding: 24,
	textAlign: 'center',
});

const App = () => {
	const {
		theme: { mode },
	} = useContext(AppContext);

	return (
		<ThemeProvider theme={responsiveFontSizes(createTheme(getTheme(mode)))}>
			<CookiesProvider>
				<div>
					<CssBaseline />
					<Header />
					<Container css={containerStyle}>
						<Typography variant="h3">
							Not much to see here yet.
						</Typography>
						<Typography variant="h4">
							Something big is coming!
						</Typography>
					</Container>
				</div>
			</CookiesProvider>
		</ThemeProvider>
	);
};

export default App;
