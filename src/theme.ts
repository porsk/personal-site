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
						default: '#fefefe',
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
		...(mode === 'dark' && {
			MuiAppBar: {
				styleOverrides: {
					root: {
						backgroundImage: 'none',
					},
					colorInherit: {
						backgroundColor: '#171c28',
					},
				},
			},
		}),
	},
});
