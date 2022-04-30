// borrowing from https://github.com/matthewp/corset-site/blob/main/src/info.js

import { createRequire } from 'module';
const _require = createRequire(import.meta.url);

// Generator
const astroPkg = _require('astro/package.json');
export const generator = `Astro ${astroPkg.version}`;
