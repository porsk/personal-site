import { Typography } from '@mui/material';

import Section from './section.component';

const About = () => (
	<Section title="About me" id="about">
		<Typography color="text.secondary">
			Hello! 👋 My name is Krisztián Patakfalvi, feel free to
			<strong> call me Chris</strong>. I&apos;ve always been a great
			problem solver, a traveler, and a technophile obsessed with the
			latest devices. Today, I&apos;m working as a{' '}
			<strong>Full-Stack Developer through Toptal</strong>, while
			traveling the world as a <strong>digital nomad</strong>, following
			and fulfilling my passions and dreams.
		</Typography>

		<br />

		<Typography color="text.secondary">
			What can a <q>Full Stack Developer</q> do, you might ask? I can
			craft a website from nothing into existence, fully formed. I do not
			use tricks, nor is this magic. I can build systems that hide in the
			background, serve websites, manage user interactions, deal with big
			data or IoT events.{' '}
			<strong>I can plan, design, build, launch, and maintain </strong>
			all these by myself —
			<strong> did I mention that I do DevOps too?</strong>
		</Typography>

		<br />

		<Typography color="text.secondary">
			I started learning to code when I was a teenager. I still remember
			sitting in front of the computer, making it print{' '}
			<q>Hello Krisztián</q> for the very first time. As I learned new
			things it was almost magic, being able to get the computer to do
			whatever I wanted, just by typing in the right <q>spells</q>. Since
			then, I&apos;ve worked on countless challenging projects and have
			been involved in the fields of{' '}
			<strong>telecommunication, safety, IoT, and mobile industry</strong>
			, handling{' '}
			<strong>
				requirements engineering, solution architecting, DevOps,
				back-end and front-end development
			</strong>
			.
		</Typography>

		<br />

		<Typography color="text.secondary">
			I consider myself a well-organized person, a problem solver with
			high attention to details.{' '}
			<strong>
				Fan of photographing, outdoor activities, traveling, music and
				board games.
			</strong>{' '}
			When I&apos;m not in front of a computer screen, I&apos;m probably
			hanging out with my love and friends or crossing off another item on
			my bucket list.
		</Typography>
	</Section>
);

export default About;
