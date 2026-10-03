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
	// Button,
} from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Section from './section.component';

const periodContainerStyle = () =>
	css({
		display: 'flex',
		justifyContent: 'flex-end',
	});

// const resumeContainerStyle = (theme: any) =>
// 	css({
// 		[theme.breakpoints.down('sm')]: {
// 			textAlign: 'center',
// 		},
// 	});

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
				employer="ADP"
				url="https://www.adp.com/"
				title="Lead Software Engineer | Tech & Scale"
				period="Mar 2025 - Present"
				content={[
					'Set the technical direction for scaling a workflow automation platform that runs employee lifecycle processes for HR and payroll.',
					'Leading the move to an event-driven architecture: change data capture with Debezium and Kafka (MSK), plus the refactoring that comes with it.',
					'Own epics end to end, from planning and solution design through delivery, often leading a group of developers on the larger ones.',
					'Work with principal engineers and other leads on reliability, performance and security, including database sharding, regular load testing and newer deployment approaches.',
					'Use AI tooling across the whole process, from development to testing and documentation.',
				]}
			/>

			<Experience
				employer="ADP"
				url="https://www.adp.com/"
				title="Senior Software Engineer"
				period="Aug 2023 - Mar 2025"
				content={[
					'Joined ADP with the whole Sora team and product after the acquisition.',
					'Built and maintained a workflow orchestration platform that automates onboarding, offboarding, parental leave and other employee lifecycle processes.',
					'Handled the full cycle, from feature design and implementation to performance tuning and architectural changes.',
					'Contributed to planning, coordinated larger initiatives, and kept improving scalability and reliability.',
					'Worked mainly with Node.js, TypeScript, PostgreSQL, Redis and AWS (ECS, Lambda, SQS, EventBridge, Aurora).',
				]}
			/>

			<Experience
				employer="Sora"
				url="https://www.sora.co/"
				title="Full Stack Developer | Integration Engineer"
				period="Apr 2022 - Aug 2023"
				content={[
					'Integrated third-party systems into the product, including Twilio, Microsoft Teams and Checkr.',
					'Maintained and improved existing integrations and data flows.',
					'Built features and improvements across the UI and backend.',
				]}
			/>

			<Experience
				employer="Codespring"
				url="https://www.codespring.ro"
				title="Full Stack Developer | DevOps Engineer"
				period="Sep 2018 - Jun 2022"
				content={[
					'Built web apps, Android apps and microservice backends handling IoT event streams and large time-series datasets.',
					'Worked across Node.js, React, Java/Spring and Python, with Kafka, TimescaleDB, MongoDB and PostgreSQL.',
					'Ran deployments on Kubernetes and Rancher, and set up CI/CD pipelines.',
					'Mentored bachelor students during their internships.',
				]}
			/>

			<Experience
				employer="Nokia"
				url="https://www.nokia.com"
				title="R&D Engineer Intern"
				period="Jul - Sep 2017"
				content={[
					"Built a web tool that sped up configuration of Nokia's telecom servers.",
				]}
			/>

			{/* Resume is outdated, hidden for now. Uncomment (with the imports and style above) to bring it back.
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
			*/}
		</Grid>
	</Section>
);

export default Experiences;
