import { FC } from 'react';
import {
	Grid,
	Typography,
	List,
	ListItem,
	ListItemText,
	ListItemIcon,
} from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Section from './section.component';

const Experience: FC<{
	employer: string;
	title: string;
	period: string;
	content: string[];
}> = ({ employer, title, period, content }) => (
	<Grid item xs={12}>
		<Grid container>
			<Grid item xs={6}>
				<Typography variant="h6">{employer}</Typography>
				<Typography variant="subtitle1" color="text.secondary">
					{title}
				</Typography>
			</Grid>
			<Grid
				item
				xs={6}
				sx={{ display: 'flex', justifyContent: 'flex-end' }}
			>
				<Typography variant="subtitle2" color="text.secondary">
					{period}
				</Typography>
			</Grid>
			<Grid item xs={12}>
				<List dense>
					{content.map((line) => (
						<ListItem>
							<ListItemIcon>
								<ArrowRightIcon />
							</ListItemIcon>
							<ListItemText
								primary={line}
								primaryTypographyProps={{
									color: 'text.secondary',
									variant: 'body2',
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
	<Section title="Experiences">
		<Grid container rowSpacing={3}>
			<Experience
				employer="Codespring"
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
				title="Intern - R&amp;D Engineer"
				period="Jul - Sep 2017"
				content={[
					'Worked on a web based tool for speeding up the configuration of the telecommunication servers at Nokia using JavaScript, HTML and CSS.',
				]}
			/>
		</Grid>
	</Section>
);

export default Experiences;
