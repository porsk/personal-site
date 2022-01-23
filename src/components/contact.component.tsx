import { Button, Container, Typography, Grid } from '@mui/material';
import Typewriter from 'typewriter-effect';
import SendRoundedIcon from '@mui/icons-material/SendRounded';

const dayName = new Date().toLocaleDateString('default', { weekday: 'long' });

const Contact = () => (
	<Container
		maxWidth="md"
		sx={{ textAlign: 'center', paddingTop: 12, paddingBottom: 12 }}
	>
		<Grid container rowSpacing={4}>
			<Grid item xs={12}>
				<Typography
					variant="h3"
					sx={{ fontWeight: 400, marginBottom: 1 }}
				>
					Get in touch
				</Typography>

				<Typography variant="h5" color="text.secondary">
					If you fancy a chat feel free to drop me a line.
				</Typography>
			</Grid>

			<Grid item xs={12}>
				<Button
					variant="outlined"
					size="large"
					sx={{ textTransform: 'none' }}
					endIcon={<SendRoundedIcon />}
					href="mailto:p.krisztian@outlook.com"
				>
					Say Hello
				</Button>
			</Grid>

			<Grid item xs={12}>
				<Typography variant="h5" color="primary">
					Stay bold &amp;
				</Typography>
				<Typography variant="h5" color="primary">
					Have{' '}
					<Typewriter
						options={{
							strings: [
								'an epic',
								'a great',
								'a marvelous',
								'a superb',
								'a doozy',
								'a stunning',
								'a rad',
								'a cool',
								'an amazing',
								'a neat',
							],
							autoStart: true,
							loop: true,
							cursor: '',
						}}
					/>{' '}
					{dayName}!
				</Typography>
			</Grid>
		</Grid>
	</Container>
);

export default Contact;
