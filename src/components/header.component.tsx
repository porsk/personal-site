/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { FC } from 'react';
import {
	AppBar,
	Toolbar,
	Slide,
	Stack,
	Button,
	Divider,
	Hidden,
	useScrollTrigger,
} from '@mui/material';

import DarkModeSwitch from './dark-mode-switch.component';
import useScrollToSection from '../hooks/useScrollToSection';

const stackStyle = css({
	marginLeft: 'auto',
});

const MenuButton: FC<{ title: string }> = ({ title }) => {
	const { scrollToSection } = useScrollToSection();

	return (
		<Button
			color="inherit"
			sx={{ textTransform: 'none' }}
			onClick={() => scrollToSection(title)}
		>
			{title}
		</Button>
	);
};

const Header: FC = () => {
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
							<MenuButton title="About" />
							<Hidden smDown>
								<MenuButton title="Skills" />
							</Hidden>
							<MenuButton title="Experience" />
							<MenuButton title="Projects" />
							<Hidden smDown>
								<MenuButton title="Contact" />
							</Hidden>

							<Divider orientation="vertical" flexItem />

							<DarkModeSwitch />
						</Stack>
					</Toolbar>
				</AppBar>
			</Slide>
			<Toolbar id="back-to-top-anchor" />
		</>
	);
};

export default Header;
