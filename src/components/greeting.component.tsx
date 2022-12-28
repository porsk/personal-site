/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import {
	Container,
	Typography,
	Avatar,
	Grid,
	Button,
	Hidden,
} from '@mui/material';
import { FC } from 'react';
import useScrollToSection from '../hooks/useScrollToSection';

const containerStyle = (theme: any) =>
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

const avatarContainerStyle = (theme: any) =>
	css({
		[theme.breakpoints.up('md')]: {
			display: 'flex',
			justifyContent: 'flex-end',
		},
	});

const headlineStyle = (theme: any) =>
	css({
		fontWeight: 300,
		[theme.breakpoints.down('md')]: {
			margin: 'auto',
		},
	});

const avatarStyle = (theme: any) =>
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
				<Grid item xs={12} md="auto">
					<Typography variant="h6" color="primary" css={textStyle}>
						Hi, my name is
					</Typography>
					<Typography variant="h2" sx={{ fontWeight: 400 }}>
						Krisztián Patakfalvi.
					</Typography>
					<Typography
						variant="h3"
						color="text.secondary"
						css={textStyle}
						sx={{ fontWeight: 300 }}
					>
						I bring ideas to life with code.
					</Typography>

					<Typography
						variant="h6"
						color="text.secondary"
						css={[textStyle, headlineStyle]}
						maxWidth={500}
					>
						I&apos;m a Full Stack JavaScript Developer, eager to
						solve creative problems using cutting edge technologies,
						and move big ideas from design to implementation.
					</Typography>

					<Hidden mdDown>
						<Button
							variant="outlined"
							size="large"
							sx={{ marginTop: 3 }}
							onClick={() => scrollToSection('Contact')}
						>
							Get in touch
						</Button>
					</Hidden>
				</Grid>

				<Grid item xs={12} md css={avatarContainerStyle}>
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
