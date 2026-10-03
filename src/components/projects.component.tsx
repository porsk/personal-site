import { FC } from 'react';
import { Grid, Typography, Link, Chip } from '@mui/material';
import Section from './section.component';

const Project: FC<{
	name: string;
	url?: string;
	description: string;
	tags: string[];
}> = ({ name, url, description, tags }) => (
	<Grid size={12}>
		<Grid container rowSpacing={2}>
			<Grid size={12}>
				{url ? (
					<Link
						variant="h6"
						href={url}
						color="textPrimary"
						target="_blank"
						rel="noopener noreferrer"
					>
						{name}
					</Link>
				) : (
					<Typography variant="h6">{name}</Typography>
				)}
			</Grid>

			<Grid size={12}>
				<Typography color="textSecondary" variant="body1">
					{description}
				</Typography>
			</Grid>

			<Grid size={12}>
				<Grid container spacing={1}>
					{tags.map((tag) => (
						<Grid key={tag}>
							<Chip
								label={tag}
								variant="outlined"
								color="primary"
							/>
						</Grid>
					))}
				</Grid>
			</Grid>
		</Grid>
	</Grid>
);

const Projects = () => (
	<Section title="My projects" id="projects">
		<Grid container rowSpacing={3}>
			<Project
				name="Personal site"
				url="https://pkrisztian.com"
				description="This site. A modern take on a CV, designed and built from scratch."
				tags={[
					'React.js',
					'TypeScript',
					'Material UI',
					'Docker',
					'Nginx',
				]}
			/>

			<Project
				name="Homelab"
				description="What started with a couple of Raspberry Pis about ten years ago has grown into a proper setup: a NAS with redundant off-site backups, a home server, and around 15 self-hosted services, including Plex, Immich, Audiobookshelf, Wealthfolio, home automation, a VPN and a few sites for friends. Everything runs behind Traefik and Cloudflare on my own domains, and the backup strategy covers every phone and laptop in the household too."
				tags={[
					'Docker',
					'Linux',
					'NAS',
					'Traefik',
					'Cloudflare',
					'Networking',
					'Backups',
				]}
			/>

			<Project
				name="LocalHandy"
				url="https://localhandy.ro"
				description="A web app for finding local tradespeople and handymen on demand. Professionals create detailed profiles, and anyone can search and browse them to find the right person for the job."
				tags={[
					'Node.js',
					'React.js',
					'Express',
					'MongoDB',
					'OAuth',
					'Material UI',
					'SendGrid',
					'CI/CD',
				]}
			/>

			<Project
				name="Daily Challenge"
				url="https://youtu.be/HtnEH7AJaCQ"
				description="A cross-platform mobile app for joining time-based challenges, like reading a book every week or doing a set of exercises for thirty days, with all challenges available in one place."
				tags={[
					'Node.js',
					'Express',
					'React Native',
					'NativeBase',
					'MobX',
					'Expo',
				]}
			/>
		</Grid>
	</Section>
);

export default Projects;
