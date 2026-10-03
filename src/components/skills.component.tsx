/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { FC } from 'react';
import { Grid, Typography, Stack } from '@mui/material';
import Section from './section.component';

const skillStackStyle = (theme: any) =>
	css({
		[theme.breakpoints.down('sm')]: {
			textAlign: 'center',
		},
	});

const SkillList: FC<{ title: string; items: string[] }> = ({
	title,
	items,
}) => (
	<Grid item xs={6} sm={3}>
		<Stack css={skillStackStyle}>
			<Typography variant="button" sx={{ marginBottom: 1 }}>
				{title}
			</Typography>
			{items.map((item: string) => (
				<Typography key={item} color="text.secondary">
					{item}
				</Typography>
			))}
		</Stack>
	</Grid>
);

const Skills = () => (
	<Section title="Skills" id="skills">
		<Grid container rowSpacing={3}>
			<SkillList
				title="Languages"
				items={['TypeScript', 'JavaScript', 'SQL', 'Python']}
			/>

			<SkillList
				title="Backend & Frontend"
				items={[
					'Node.js',
					'React.js',
					'REST & GraphQL APIs',
					'Event-driven design',
					'3rd party integrations',
				]}
			/>

			<SkillList
				title="Data"
				items={[
					'PostgreSQL & Aurora',
					'Redis',
					'Kafka & Debezium (CDC)',
					'Elasticsearch',
					'ETL',
				]}
			/>

			<SkillList
				title="Cloud & Tooling"
				items={[
					'AWS (ECS, Lambda, SQS, MSK…)',
					'Docker & Kubernetes',
					'Splunk & Dynatrace',
					'AI-assisted development',
				]}
			/>
		</Grid>
	</Section>
);

export default Skills;
