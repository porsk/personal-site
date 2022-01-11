/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { AppBar, Toolbar, Slide, Stack, useScrollTrigger } from '@mui/material';

import DarkModeSwitch from './dark-mode-switch.component';

const stackStyle = css({
	marginLeft: 'auto',
});

const Header = () => {
	const hideTrigger = useScrollTrigger({ threshold: 0 });

	const elevationTrigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 100,
	});

	return (
		<>
			<Slide appear={false} direction="down" in={!hideTrigger}>
				<AppBar color="inherit" elevation={elevationTrigger ? 6 : 0}>
					<Toolbar>
						<Stack direction="row" spacing={2} css={stackStyle}>
							<DarkModeSwitch />
						</Stack>
					</Toolbar>
				</AppBar>
			</Slide>
			<Toolbar />
		</>
	);
};

export default Header;
