import { FC } from 'react';
import { Container, Typography, Grid } from '@mui/material';

const Section: FC<{ title: string; id: string }> = ({
	title,
	children,
	id,
}) => (
	<Container maxWidth="md" sx={{ paddingTop: 6, paddingBottom: 6 }} id={id}>
		<Grid container>
			<Grid item xs={12} md={2} sx={{ paddingBottom: 2 }}>
				<Typography variant="h6" color="primary">
					{title}
				</Typography>
			</Grid>

			<Grid item xs={12} md={10}>
				{children}
			</Grid>
		</Grid>
	</Container>
);

export default Section;
