import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { useContext } from 'react';
import { CssBaseline } from '@mui/material';
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
import Projects from './components/projects.component';
import Contact from './components/contact.component';
import ScrollTop from './components/scroll-top.component';

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

						<Projects />

						<Contact />

						<Footer />

						<ScrollTop />
					</div>
				</CookiesProvider>
			</EmotionThemeProvider>
		</MuiThemeProvider>
	);
};

export default App;
