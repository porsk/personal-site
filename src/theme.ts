import { PaletteMode } from '@mui/material';

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
						default: '#fcfcfc',
					},
			  }
			: {
					background: {
						default: '#171c28',
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
					backgroundColor: mode === 'light' ? '#fcfcfc' : '#171c28',
				},
			},
		},
	},
});
