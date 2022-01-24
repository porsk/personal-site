/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { FC } from 'react';
import {
	Grid,
	Typography,
	List,
	ListItem,
	ListItemText,
	ListItemIcon,
	Link,
	Button,
} from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Section from './section.component';

const periodContainerStyle = () =>
	css({
		display: 'flex',
		justifyContent: 'flex-end',
	});

const resumeContainerStyle = (theme: any) =>
	css({
		[theme.breakpoints.down('sm')]: {
			textAlign: 'center',
		},
	});

const Experience: FC<{
	employer: string;
	url: string;
	title: string;
	period: string;
	content: string[];
}> = ({ employer, url, title, period, content }) => (
	<Grid item xs={12}>
		<Grid container>
			<Grid item xs={6}>
				<Link
					variant="h6"
					href={url}
					color="text.primary"
					target="_blank"
					rel="noopener noreferrer"
				>
					{employer}
				</Link>

				<Typography variant="subtitle2" color="text.secondary">
					{title}
				</Typography>
			</Grid>
			<Grid item xs={6} css={periodContainerStyle}>
				<Typography variant="subtitle2" color="text.secondary">
					{period}
				</Typography>
			</Grid>
			<Grid item xs={12}>
				<List dense>
					{content.map((line) => (
						<ListItem key={line}>
							<ListItemIcon>
								<ArrowRightIcon />
							</ListItemIcon>
							<ListItemText
								primary={line}
								primaryTypographyProps={{
									color: 'text.secondary',
									variant: 'body1',
								}}
							/>
						</ListItem>
					))}
				</List>
			</Grid>
		</Grid>
	</Grid>
);

const Experiences = () => (
	<Section title="Experience" id="experience">
		<Grid container rowSpacing={3}>
			<Experience
				employer="Codespring"
				url="https://www.codespring.ro"
				title="Full Stack Developer | DevOps Engineer"
				period="Sep 2018 - Present"
				content={[
					'Development of web applications, backends, microservice systems dealing with IoT events and big data, native Android applications.',
					'Work with a variety of different languages, platforms, frameworks, and tools such as Node, React, Java, Spring, Python, Kafka TimescaleDB, MongoDB, PostgreSQL, Kubernetes, Rancher.',
					'Mentoring bachelor students during internship.',
				]}
			/>

			<Experience
				employer="Nokia"
				url="https://www.nokia.com"
				title="Intern - R&amp;D Engineer"
				period="Jul - Sep 2017"
				content={[
					'Worked on a web based tool for speeding up the configuration of the telecommunication servers at Nokia using JavaScript, HTML and CSS.',
				]}
			/>

			<Grid item xs={12} css={resumeContainerStyle}>
				<Button
					variant="outlined"
					endIcon={<ChevronRightIcon />}
					sx={{ textTransform: 'none' }}
					color="inherit"
					target="_blank"
					rel="noopener noreferrer"
					href={`${window.location.origin}/resume.pdf`}
				>
					View my Resume
				</Button>
			</Grid>
		</Grid>
	</Section>
);

export default Experiences;
