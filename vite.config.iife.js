import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import { createBaseConfig } from './vite.config.base.js';

export default createBaseConfig({
  cssCodeSplit: false,
  emptyOutDir: false,
  formats: ['iife'],
  extraPlugins: [cssInjectedByJsPlugin()]
});
