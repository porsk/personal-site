import { PaletteMode } from '@mui/material';

export default (mode: PaletteMode) => ({
	palette: {
		primary: {
			main: '#bdbdbd',
			light: '#efefef',
			dark: '#8d8d8d',
		},
		secondary: {
			main: '#2196f3',
			light: '#6ec6ff',
			dark: '#0069c0',
		},
		mode,
		...(mode === 'light'
			? {
					// palette values for light mode
			  }
			: {
					// palette values for dark mode

					background: {
						default: '#303030',
						paper: '#424242',
					},
			  }),
	},
});
