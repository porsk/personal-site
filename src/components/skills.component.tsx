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
				<Typography color="text.secondary">{item}</Typography>
			))}
		</Stack>
	</Grid>
);

const Skills = () => (
	<Section title="Skills">
		<Grid container rowSpacing={3}>
			<SkillList
				title="Languages"
				items={['JavaScript', 'Java', 'Python']}
			/>

			<SkillList
				title="Frameworks"
				items={['React.js', 'Node.js', 'Express', 'Spring', 'Next.js']}
			/>

			<SkillList
				title="DevOps"
				items={['Docker', 'Kubernetes', 'Helm', 'Rancher', 'CI/CD']}
			/>

			<SkillList
				title="Misc"
				items={[
					' GitLab & GitHub',
					'Kafka',
					'MongoDB',
					'PostgreSQL',
					'TimescaleDB',
				]}
			/>
		</Grid>
	</Section>
);

export default Skills;
