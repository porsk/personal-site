import { FC } from 'react';
import { Zoom, Box, useScrollTrigger, Fab, Tooltip } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const ScrollTop: FC = () => {
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 500,
	});

	const scrollToTop = () => {
		const anchor = document.querySelector('#back-to-top-anchor');

		if (anchor) {
			anchor.scrollIntoView({
				behavior: 'smooth',
				block: 'center',
			});
		}
	};

	return (
		<Zoom in={trigger}>
			<Box
				onClick={() => scrollToTop()}
				role="presentation"
				sx={{ position: 'fixed', bottom: 16, right: 16 }}
			>
				<Tooltip title="Back to top" placement="left">
					<Fab color="primary" size="small">
						<KeyboardArrowUpIcon />
					</Fab>
				</Tooltip>
			</Box>
		</Zoom>
	);
};

export default ScrollTop;
