// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// `site` + `base` are what make GitHub Pages project-site URLs work.
// Currently deploying to https://guptayashu99.github.io/PNHIndiaFoundation/
//
// TODO(custom domain): when a real domain is ready (e.g. pnhindiafoundation.org),
// change `site` to that domain, delete the `base` line, and add public/CNAME.
// See DEPLOYMENT.md for the full switch-over checklist.
export default defineConfig({
  site: 'https://guptayashu99.github.io',
  base: '/PNHIndiaFoundation',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
