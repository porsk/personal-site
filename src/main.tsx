import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// self-hosting Roboto font for better performance (to avoid render blocking)
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './index.css';
import App from './App';
import { AppProvider } from './providers/app.provider';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<AppProvider>
			<App />
		</AppProvider>
	</StrictMode>
);
