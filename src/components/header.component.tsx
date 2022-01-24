/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { FC, useCallback } from 'react';
import {
	AppBar,
	Toolbar,
	Slide,
	Stack,
	Button,
	useScrollTrigger,
	Divider,
	useTheme,
} from '@mui/material';

import DarkModeSwitch from './dark-mode-switch.component';

const stackStyle = css({
	marginLeft: 'auto',
});

const MenuButton: FC<{ title: string }> = ({ title }) => {
	const theme = useTheme();

	const scrollToSection = useCallback(() => {
		const anchor = document.querySelector(
			`#${title.toLowerCase()}`
		) as HTMLElement;

		if (anchor) {
			const currentPosition = window.scrollY;
			let targetPosition = anchor.offsetTop;

			// when scrolling down -> needs and offset for the header
			if (targetPosition < currentPosition) {
				targetPosition -= Number(theme.mixins.toolbar.minHeight) ?? 0;
			}

			window.scrollTo({
				top: targetPosition,
				behavior: 'smooth',
			});
		}
	}, []);

	return (
		<Button
			color="inherit"
			sx={{ textTransform: 'none' }}
			onClick={scrollToSection}
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
							<MenuButton title="Skills" />
							<MenuButton title="Experience" />
							<MenuButton title="Projects" />
							<MenuButton title="Contact" />

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
