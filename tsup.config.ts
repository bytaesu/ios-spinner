import { defineConfig } from 'tsup';

export default defineConfig({
  outDir: 'dist',
  entry: ['./pkg/ios-spinner.tsx'],
  format: ['cjs', 'esm'],
  target: 'esnext',
  dts: true,
  clean: true,
  minify: true,
  sourcemap: false,
  external: ['react', 'react-dom'],
  tsconfig: './tsconfig.build.json',
  outExtension: ({ format }) => ({
    js: format === 'esm' ? '.mjs' : '.cjs',
  }),
});