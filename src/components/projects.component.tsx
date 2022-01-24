import { FC } from 'react';
import { Grid, Typography, Link, Chip } from '@mui/material';
import Section from './section.component';

const Project: FC<{
	name: string;
	url: string;
	description: string;
	tags: string[];
}> = ({ name, url, description, tags }) => (
	<Grid item xs={12}>
		<Grid container rowSpacing={2}>
			<Grid item xs={12}>
				<Link
					variant="h6"
					href={url}
					color="text.primary"
					target="_blank"
					rel="noopener noreferrer"
				>
					{name}
				</Link>
			</Grid>

			<Grid item xs={12}>
				<Typography color="text.secondary" variant="body1">
					{description}
				</Typography>
			</Grid>

			<Grid item xs={12}>
				<Grid container spacing={1}>
					{tags.map((tag) => (
						<Grid item key={tag}>
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
				description="Portfolio site serving as a modern-day CV designed and coded from sratch to showcase my skills and past work."
				tags={[
					'Node.js',
					'React.js',
					'Express',
					'TypeScript',
					'Material UI',
				]}
			/>

			<Project
				name="LocalHandy"
				url="https://localhandy.ro"
				description="Web application for finding professional/handyman for certain jobs on demand. The professionals have the possibility to create a detailed profile, meanwhile the users and guests can search among the masters."
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
				description="Cross-platform mobile application for challenge management in which participants have to take certain time-specific steps, like reading a book every week or doing specific exercises for thirty days. The project aims to provide a unified interface for users where a multitude of challenges are available for participation."
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
