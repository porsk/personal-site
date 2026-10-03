import type { Theme } from '@mui/material/styles';
import { css } from '@emotion/react';
import { Container, Typography, Avatar, Grid, Button } from '@mui/material';
import { FC } from 'react';
import useScrollToSection from '../hooks/useScrollToSection';

const containerStyle = (theme: Theme) =>
	css({
		marginTop: theme.spacing(14),
		marginBottom: theme.spacing(20),
		[theme.breakpoints.down('md')]: {
			marginTop: theme.spacing(8),
			marginBottom: theme.spacing(8),
			textAlign: 'center',
		},
	});

const textStyle = () =>
	css({
		lineHeight: 1.5,
	});

const avatarContainerStyle = (theme: Theme) =>
	css({
		[theme.breakpoints.up('md')]: {
			display: 'flex',
			justifyContent: 'flex-end',
		},
	});

const headlineStyle = (theme: Theme) =>
	css({
		fontWeight: 300,
		[theme.breakpoints.down('md')]: {
			margin: 'auto',
		},
	});

const avatarStyle = (theme: Theme) =>
	css({
		width: 300,
		height: 300,
		[theme.breakpoints.down('lg')]: {
			width: 250,
			height: 250,
			margin: 'auto',
		},
	});

const Greeting: FC = () => {
	const { scrollToSection } = useScrollToSection();

	return (
		<Container css={containerStyle}>
			<Grid container rowSpacing={8}>
				<Grid size={{ xs: 12, md: 'auto' }}>
					<Typography variant="h6" color="primary" css={textStyle}>
						Hi, my name is
					</Typography>
					<Typography variant="h2" sx={{ fontWeight: 400 }}>
						Krisztián Patakfalvi.
					</Typography>
					<Typography
						variant="h3"
						color="textSecondary"
						css={textStyle}
						sx={{ fontWeight: 300 }}
					>
						I bring ideas to life with code.
					</Typography>

					<Typography
						variant="h6"
						color="textSecondary"
						css={[textStyle, headlineStyle]}
						sx={{ maxWidth: 500 }}
					>
						I&apos;m a full-stack engineer and team lead, mostly on
						the backend these days: designing systems, scaling them,
						and seeing them through to production.
					</Typography>

					<Button
						variant="outlined"
						size="large"
						sx={{
							marginTop: 3,
							display: { xs: 'none', md: 'inline-flex' },
						}}
						onClick={() => scrollToSection('Contact')}
					>
						Get in touch
					</Button>
				</Grid>

				<Grid size={{ xs: 12, md: 'grow' }} css={avatarContainerStyle}>
					<Avatar
						alt="Krisztián Patakfalvi"
						src={`${window.location.origin}/android-chrome-512x512.png`}
						css={avatarStyle}
					/>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Greeting;
