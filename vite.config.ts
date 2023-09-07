import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigpaths from 'vite-tsconfig-paths';
import cssAutoImport from 'vite-plugin-css-auto-import';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), tsconfigpaths(), cssAutoImport()],
    base: '/RPS-game-assignment/',
});
