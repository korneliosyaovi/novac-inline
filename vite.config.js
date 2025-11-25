import esUmdConfig from './vite.config.es-umd.js';
import iifeConfig from './vite.config.iife.js';

const target = process.env.BUILD_TARGET === 'iife' ? 'iife' : 'es-umd';

export default target === 'iife' ? iifeConfig : esUmdConfig;
