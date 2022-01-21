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
import About from './components/about.component';
import Skills from './components/skills.component';
import Experiences from './components/experiences.component';

const containerStyle = css({
	padding: 24,
	textAlign: 'center',
	justifyContent: 'center',
	marginTop: '25vh',
	marginBottom: '25vh',
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

						<About />

						<Skills />

						<Experiences />

						<Container css={containerStyle}>
							<Typography variant="h3">
								Under construction
							</Typography>
							<Typography variant="h4">Coming soon</Typography>
						</Container>
						<Footer />
					</div>
				</CookiesProvider>
			</EmotionThemeProvider>
		</MuiThemeProvider>
	);
};

export default App;
