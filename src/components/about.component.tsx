import { Typography } from '@mui/material';

import Section from './section.component';

const About = () => (
	<Section title="About me" id="about">
		<Typography color="textSecondary">
			Hi! 👋 I&apos;m Krisztián, but feel free to{' '}
			<strong>call me Chris</strong>. I&apos;ve always liked solving
			problems, travelling, and getting my hands on the latest gadgets.
			These days I&apos;m a <strong>Lead Software Engineer at ADP</strong>
			, still with the same team I joined in 2022, back when we were a
			startup called Sora. I&apos;m a former digital nomad, but still
			following my passions and chasing my dreams.
		</Typography>

		<br />

		<Typography color="textSecondary">
			Over the last few years I&apos;ve moved more towards{' '}
			<strong>backend work and technical leadership</strong>. Most of my
			time goes into planning, architecture and solution design, with a
			focus on <strong>scalability and modernisation</strong>. I work
			closely with principal engineers and other leads, and I{' '}
			<strong>own larger initiatives from start to finish</strong>, often
			together with other developers. Right now I&apos;m leading our move
			to an <strong>event-driven system</strong>, using change data
			capture with Debezium and Kafka. AI tools are a big part of how we
			work too, from writing code to testing and documentation.
		</Typography>

		<br />

		<Typography color="textSecondary">
			I started coding as a teenager. I still remember getting the
			computer to print <q>Hello Krisztián</q> for the first time; it felt
			a bit like magic. Since then I&apos;ve worked in{' '}
			<strong>telecom, safety, IoT, mobile and HR tech</strong>, covering
			everything from{' '}
			<strong>
				requirements and architecture to backend, frontend and DevOps
			</strong>
			. I don&apos;t do DevOps day to day anymore, but I&apos;m at home
			with <strong>AWS, Docker and Kubernetes</strong>, keep my AWS
			certification up to date, and have been running my own homelab since
			my first Raspberry Pi, about ten years ago.
		</Typography>

		<br />

		<Typography color="textSecondary">
			I&apos;m organised and detail-oriented, and I like to understand a
			problem properly before solving it. Away from the screen,
			you&apos;ll find me{' '}
			<strong>
				taking photos, outdoors, travelling, listening to music or
				playing board games
			</strong>
			, usually with my wife and friends, or ticking something off my
			bucket list.
		</Typography>
	</Section>
);

export default About;
