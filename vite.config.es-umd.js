import { createBaseConfig } from './vite.config.base.js';

export default createBaseConfig({
  cssCodeSplit: true,
  formats: ['es', 'umd']
});
