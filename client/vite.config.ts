import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		watch: {
			usePolling: true
		},
		host: "0.0.0.0",
		proxy: { "/api": "http://express_server:8000" }
	}, build: {
		outDir: "../dist/client"
	}
})
