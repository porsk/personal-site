import { Typography } from '@mui/material';

import Section from './section.component';

const About = () => (
	<Section title="About me">
		{/* TODO: Shorten it and highlight keywords. */}

		<Typography color="text.secondary">
			Hello! My name is Krisztián Patakfalvi, feel free to call me Chris.
			Currently, I work as a Full Stack developer for an outsourcing
			company in Cluj-Napoca, helping clients bring their digital products
			to life.
		</Typography>

		<br />

		<Typography color="text.secondary">
			What can a “full-stack developer” do, you might ask? I can craft a
			website from nothing into existence, fully formed. I do not use
			tricks, nor is this magic. I can also build complex systems hiding
			in the background serving websites, handling user interaction,
			dealing with big data or IoT events. I can plan, design, build,
			launch, and maintain all these by myself — did I mention that I do
			DevOps too? I have handled the deployment and operation on dozens of
			projects with my best friends Docker and Kubernetes.
		</Typography>

		<br />

		<Typography color="text.secondary">
			My interest in programming started back in 2011 when I wrote my very
			first program printing out “Hello Krisztián!”. It was almost magic,
			being able to get the computer to do whatever I wanted, just by
			tying in the right symbols. Fast-forward to today, and I&apos;ve had
			the privilege of working on various challenging projects in
			telecommunication, safety, IoT, mobile and other industries.
		</Typography>

		<br />

		<Typography color="text.secondary">
			I consider myself a well-organized person, a problem solver with
			high attention to details. Fan of photographing, outdoor activities,
			music and board games. When I&apos;m not in front of a computer
			screen, I&apos;m probably hanging out with friends or crossing off
			another item on my bucket list.
		</Typography>
	</Section>
);

export default About;
