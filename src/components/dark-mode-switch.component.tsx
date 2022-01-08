import { useContext, FC } from 'react';
import { IconButton, Tooltip } from '@mui/material';

import Brightness7Icon from '@mui/icons-material/Brightness7';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';

import { AppContext } from '../providers/app.provider';

const DarkModeSwitch: FC = () => {
	const {
		theme: { toggleMode, isDark },
	} = useContext(AppContext);

	return (
		<Tooltip title={isDark() ? 'Light mode' : 'Dark mode'}>
			<IconButton onClick={() => toggleMode()}>
				{isDark() ? <Brightness7Icon /> : <NightlightRoundIcon />}
			</IconButton>
		</Tooltip>
	);
};

export default DarkModeSwitch;
