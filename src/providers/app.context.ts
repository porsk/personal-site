import { createContext } from 'react';
import type { PaletteMode } from '@mui/material';

export type AppContextType = {
	theme: {
		mode: PaletteMode;
		toggleMode: () => void;
		setMode: (mode: PaletteMode) => void;
		isDark: () => boolean;
	};
};

export const AppContext = createContext<AppContextType>({
	theme: {
		mode: 'dark',
		toggleMode: () => {},
		setMode: () => {},
		isDark: () => true,
	},
});
