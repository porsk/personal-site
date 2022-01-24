/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { FC, ReactNode } from 'react';
import { Typography, IconButton, Grid } from '@mui/material';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const containerStyle = (theme: any) =>
	css({
		textAlign: 'center',
		paddingTop: theme.spacing(4),
		paddingBottom: theme.spacing(4),
		[theme.breakpoints.down('sm')]: {
			paddingTop: theme.spacing(8),
			paddingBottom: theme.spacing(8),
		},
	});

const SocialButton: FC<{ icon: ReactNode; url: string }> = ({ icon, url }) => (
	<IconButton href={url} target="_blank" rel="noopener noreferrer">
		{icon}
	</IconButton>
);

const Footer: FC = () => (
	<Grid container css={containerStyle} spacing={2}>
		<Grid item xs={12} container justifyContent="center" spacing={2}>
			<Grid item>
				<SocialButton
					url="https://www.linkedin.com/in/krisztian-patakfalvi"
					icon={<LinkedInIcon />}
				/>
			</Grid>

			<Grid item>
				<SocialButton
					url="https://github.com/porsk"
					icon={<GitHubIcon />}
				/>
			</Grid>

			<Grid item>
				<SocialButton
					url="https://www.instagram.com/p_orsk"
					icon={<InstagramIcon />}
				/>
			</Grid>

			<Grid item>
				<SocialButton
					url="https://www.facebook.com/orskrisztian.patakfalvi"
					icon={<FacebookIcon />}
				/>
			</Grid>
		</Grid>

		<Grid item xs={12}>
			<Typography variant="subtitle2" color="text.secondary">
				Designed &amp; Developed by Krisztián Patakfalvi
			</Typography>
		</Grid>
	</Grid>
);

export default Footer;
