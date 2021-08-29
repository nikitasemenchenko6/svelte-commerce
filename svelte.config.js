import preprocess from 'svelte-preprocess'
import node from '@sveltejs/adapter-node'
import netlify from '@sveltejs/adapter-netlify'
import vercel from '@sveltejs/adapter-vercel'
import adapter from '@sveltejs/adapter-static'

const config = {
	preprocess: preprocess(),
	kit: {
		target: '#svelte',
		adapter: netlify(),
		// adapter: adapter({
		// 	// default options are shown
		// 	pages: 'build',
		// 	assets: 'build',
		// 	fallback: null,
		// }),
		vite: {
			server: {
				proxy: {
					'/api': 'http://api.litekart.in',
				},
			},
			ssr: {
				noExternal: ['svelte-hero-icons'],
			},
			optimizeDeps: {
				include: ['svelte-hero-icons'],
			},
		},
	},
}

export default config
