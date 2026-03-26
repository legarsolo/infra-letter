import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';

const isDev = process.argv.includes('dev');
const basePath = process.env.BASE_PATH ?? '';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		paths: {
			base: isDev ? '' : basePath
		},
		prerender: {
			crawl: false
		}
	},
	vitePlugin: {
		dynamicCompileOptions: ({ filename }) =>
			filename.includes('node_modules') ? undefined : { runes: true }
	},
	preprocess: [mdsvex()],
	extensions: ['.svelte', '.svx']
};

export default config;
