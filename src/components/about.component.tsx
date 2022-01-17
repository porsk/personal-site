import { Typography } from '@mui/material';

import Section from './section.component';

const About = () => (
	<Section title="About me">
		<Typography color="text.secondary">
			Hello! My name is Krisztián Patakfalvi, feel free to
			<strong> call me Chris</strong>. Currently,
			<strong> I work as a Full Stack Developer</strong> for an
			outsourcing company in Cluj-Napoca, helping clients bring their
			digital products to life.
		</Typography>

		<br />

		<Typography color="text.secondary">
			What can a “Full Stack Developer” do, you might ask? I can craft a
			website from nothing into existence, fully formed. I do not use
			tricks, nor is this magic. I can also build complex systems hiding
			in the background serving websites, handling user interaction,
			dealing with big data or IoT events. I can plan, design, build,
			launch, and maintain all these by myself —
			<strong> did I mention that I do DevOps too?</strong>
		</Typography>

		<br />

		<Typography color="text.secondary">
			My interest in programming started back in 2011 when I wrote my very
			first program printing out “Hello Krisztián!”. It was almost magic,
			being able to get the computer to do whatever I wanted, just by
			tying in the right symbols. Fast-forward to today, and I&apos;ve had
			the privilege of working on various challenging projects in{' '}
			<strong>
				telecommunication, safety, IoT, mobile and other industries.
			</strong>
		</Typography>

		<br />

		<Typography color="text.secondary">
			I consider myself a well-organized person, a problem solver with
			high attention to details.{' '}
			<strong>
				Fan of photographing, outdoor activities, music and board games.
			</strong>{' '}
			When I&apos;m not in front of a computer screen, I&apos;m probably
			hanging out with friends or crossing off another item on my bucket
			list.
		</Typography>
	</Section>
);

export default About;
