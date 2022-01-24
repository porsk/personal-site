import { PaletteMode } from '@mui/material';

const COLORS = {
	LIGHT: {
		BACKGROUND: '#fcfcfc',
	},
	DARK: {
		BACKGROUND: '#171c28',
	},
};

const getBackgroundColor = (mode: PaletteMode) =>
	mode === 'light' ? COLORS.LIGHT.BACKGROUND : COLORS.DARK.BACKGROUND;

export default (mode: PaletteMode) => ({
	palette: {
		primary: {
			main: '#007bff',
			light: '#69a9ff',
			dark: '#0050cb',
		},
		secondary: {
			main: '#2196f3',
			light: '#6ec6ff',
			dark: '#0069c0',
		},
		mode,
		...(mode === 'light'
			? {
					background: {
						default: COLORS.LIGHT.BACKGROUND,
					},
			  }
			: {
					background: {
						default: COLORS.DARK.BACKGROUND,
					},
					text: {
						primary: '#e7e7e7',
						secondary: '#afafbf',
					},
			  }),
	},
	components: {
		MuiAppBar: {
			styleOverrides: {
				root: {
					backgroundImage: 'none',
				},
				colorInherit: {
					backgroundColor: getBackgroundColor(mode),
				},
			},
		},
		MuiCssBaseline: {
			styleOverrides: {
				body: {
					'::-webkit-scrollbar': {
						width: 12,
					},

					'::-webkit-scrollbar-track': {
						background: getBackgroundColor(mode),
					},

					'::-webkit-scrollbar-thumb': {
						background: '#888',
						borderRadius: 12,
					},
				},
			},
		},
	},
});
