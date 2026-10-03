import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	// Emotion's JSX runtime enables the `css` prop in every component
	plugins: [react({ jsxImportSource: '@emotion/react' })],
	build: {
		outDir: 'dist',
		sourcemap: false,
	},
	server: {
		port: 3000,
	},
});
