import { useState, useMemo, createContext, FC } from 'react';
import { useCookies } from 'react-cookie';
import { useMediaQuery } from '@mui/material';

type PaletteMode = 'light' | 'dark';
type AppContextType = {
	theme: {
		mode: PaletteMode;
		toggleMode: () => void;
		setMode: (mode: PaletteMode) => void;
		isDark: () => boolean;
	};
};

const PALETTE_MODE_COOKIE_NAME = 'paletteMode';

export const AppContext = createContext<AppContextType>({
	theme: {
		mode: 'light',
		toggleMode: () => {},
		setMode: () => {},
		isDark: () => false,
	},
});

export const AppProvider: FC = ({ children }) => {
	const [cookies, setCookie] = useCookies([PALETTE_MODE_COOKIE_NAME]);
	// using prefers-color-scheme query for getting user specified a preference
	// See: https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme
	const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

	const getDefaultMode = (cookieMode: PaletteMode, prefersDark: boolean) => {
		if (cookieMode) return cookieMode;

		return prefersDark ? 'dark' : 'light';
	};

	const [currentMode, setCurrentMode] = useState<PaletteMode>(
		getDefaultMode(cookies[PALETTE_MODE_COOKIE_NAME], prefersDarkMode)
	);

	const setMode = (mode: PaletteMode) => {
		setCurrentMode(mode);
		setCookie(PALETTE_MODE_COOKIE_NAME, mode);
	};

	const toggleMode = () => {
		setMode(currentMode === 'light' ? 'dark' : 'light');
	};

	const isDark = () => currentMode === 'dark';

	const value = useMemo(
		() => ({
			theme: {
				mode: currentMode,
				toggleMode,
				setMode,
				isDark,
			},
		}),
		[currentMode]
	);

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
