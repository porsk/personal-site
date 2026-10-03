import { useState, useMemo, type FC, type ReactNode } from 'react';
import { useMediaQuery, type PaletteMode } from '@mui/material';

import { AppContext } from './app.context';

const PALETTE_MODE_STORAGE_KEY = 'paletteMode';

// localStorage can throw (private mode, blocked storage), so fail quietly
const readStoredMode = (): PaletteMode | null => {
	try {
		const value = localStorage.getItem(PALETTE_MODE_STORAGE_KEY);
		return value === 'light' || value === 'dark' ? value : null;
	} catch {
		return null;
	}
};

const storeMode = (mode: PaletteMode) => {
	try {
		localStorage.setItem(PALETTE_MODE_STORAGE_KEY, mode);
	} catch {
		// ignore
	}
};

export const AppProvider: FC<{ children: ReactNode }> = ({ children }) => {
	// the user's own choice wins, otherwise follow the OS setting
	// See: https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme
	const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)', {
		noSsr: true,
	});
	const [storedMode, setStoredMode] = useState<PaletteMode | null>(
		readStoredMode
	);

	const mode: PaletteMode =
		storedMode ?? (prefersDarkMode ? 'dark' : 'light');

	const value = useMemo(() => {
		const setMode = (newMode: PaletteMode) => {
			setStoredMode(newMode);
			storeMode(newMode);
		};

		return {
			theme: {
				mode,
				setMode,
				toggleMode: () => setMode(mode === 'light' ? 'dark' : 'light'),
				isDark: () => mode === 'dark',
			},
		};
	}, [mode]);

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
