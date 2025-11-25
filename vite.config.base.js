import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import lingoCompiler from 'lingo.dev/compiler';

const withLingo = lingoCompiler.vite({
  sourceRoot: 'src',
  targetLocales: ['es', 'fr', 'de'],
  models: 'lingo.dev'
});

const fileName = format => {
  if (format === 'umd') return 'novac-inline.umd.js';
  if (format === 'iife') return 'novac-inline.iife.js';
  return 'novac-inline.es.js';
};

export const createBaseConfig = ({
  cssCodeSplit = false,
  emptyOutDir = true,
  formats = ['es', 'umd', 'iife'],
  extraPlugins = []
} = {}) => {
  const baseConfig = defineConfig({
    plugins: [react(), ...extraPlugins],
    build: {
      outDir: 'dist',
      emptyOutDir,
      cssCodeSplit,
      lib: {
        entry: 'src/index.jsx',
        name: 'Novac',
        formats,
        fileName
      },
      rollupOptions: {
        output: {
          exports: 'default'
        }
      }
    },
    define: {
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
      process: JSON.stringify({ env: { NODE_ENV: process.env.NODE_ENV || 'production' } })
    }
  });

  return withLingo(baseConfig);
};
