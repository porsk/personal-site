import { useContext, FC } from 'react';
import { IconButton } from '@mui/material';

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import { AppContext } from '../providers/app.provider';

const DarkModeSwitch: FC = () => {
	const {
		theme: { mode, toggleMode },
	} = useContext(AppContext);

	return (
		<IconButton onClick={() => toggleMode()} color="inherit">
			{mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
		</IconButton>
	);
};

export default DarkModeSwitch;
