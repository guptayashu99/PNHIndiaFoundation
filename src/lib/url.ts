/**
 * Build a site-root-relative URL that respects the configured `base`.
 *
 * On GitHub Pages the site is served from a subpath (/PNHIndiaFoundation),
 * so hard-coded links like href="/contact" would 404. Always route internal
 * links through this helper.
 */
export function url(path = '/'): string {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  const clean = path === '/' ? '' : `/${path.replace(/^\/+/, '').replace(/\/+$/, '')}`;
  return `${base}${clean}` || '/';
}

/** True when `current` (a pathname) is the page for `path`. Used for nav highlighting. */
export function isActive(current: string, path: string): boolean {
  const target = url(path).replace(/\/+$/, '') || '/';
  const now = current.replace(/\/+$/, '') || '/';
  return now === target;
}
