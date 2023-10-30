import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    // Configure Vite to serve files from the "public" folder
    serve: {
      open: true,
      base: '/public/',
    },
  },
});
