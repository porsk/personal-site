/** @jsxImportSource @emotion/react */
import { css, ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { useContext } from 'react';
import { CssBaseline, Typography, Container } from '@mui/material';
import {
	createTheme,
	ThemeProvider as MuiThemeProvider,
	responsiveFontSizes,
} from '@mui/material/styles';
import { CookiesProvider } from 'react-cookie';

import { AppContext } from './providers/app.provider';
import getTheme from './theme';
import Header from './components/header.component';
import Footer from './components/footer.component';
import Greeting from './components/greeting.component';

const containerStyle = css({
	padding: 24,
	textAlign: 'center',
	height: '100vh',
});

const App = () => {
	const {
		theme: { mode },
	} = useContext(AppContext);

	const theme = responsiveFontSizes(createTheme(getTheme(mode)));

	return (
		<MuiThemeProvider theme={theme}>
			<EmotionThemeProvider theme={theme}>
				<CookiesProvider>
					<div>
						<CssBaseline />

						<Header />

						<Greeting />

						<Container css={containerStyle}>
							<Typography variant="h3">
								Not much to see here yet.
							</Typography>
							<Typography variant="h4">
								Something big is coming!
							</Typography>
						</Container>
						<Footer />
					</div>
				</CookiesProvider>
			</EmotionThemeProvider>
		</MuiThemeProvider>
	);
};

export default App;
