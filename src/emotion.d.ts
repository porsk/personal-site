import type { Theme as MuiTheme } from '@mui/material/styles';

// Lets the `css` prop's theme callbacks see the full MUI theme
declare module '@emotion/react' {
	// eslint-disable-next-line @typescript-eslint/no-empty-object-type
	export interface Theme extends MuiTheme {}
}
