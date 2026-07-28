# Deployment

The site is a static Astro build published to GitHub Pages. Every push to `main`
triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which
builds the site and deploys it. There is nothing to run by hand.

---

## One-time setup

This has to be done once, in the GitHub web interface, before the first deploy
will work.

1. Go to **Settings → Pages** in the repository.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
   *(Not "Deploy from a branch" — the workflow will fail with a permissions
   error if this is left on the default.)*
3. Push to `main`, or go to the **Actions** tab and run **Deploy to GitHub
   Pages** manually via *Run workflow*.
4. The first run takes a couple of minutes. When it finishes, the site is at:

   **https://guptayashu99.github.io/PNHIndiaFoundation/**

If the Actions tab shows the workflow but it never runs, check **Settings →
Actions → General** and make sure Actions are enabled for the repository.

---

## Everyday workflow

```bash
# make your edits
npm run dev            # check locally at http://localhost:4321/PNHIndiaFoundation

npm run build          # optional: confirm it builds cleanly
npm run preview        # optional: view the production build

git add -A
git commit -m "Update patient support page"
git push
```

The deploy takes 1–2 minutes. Watch it in the **Actions** tab. If the build
fails, the live site is left untouched — a broken build never replaces a working
site.

---

## Enabling the contact form

GitHub Pages serves static files only, so it cannot process form submissions.
The contact page is already written to handle this: it shows an email-first
version until a form backend is configured, then switches to a real form.

To enable it:

1. Create a free form at [formspree.io](https://formspree.io) and copy its
   endpoint URL (looks like `https://formspree.io/f/abcdwxyz`).
2. Open [`src/pages/contact.astro`](src/pages/contact.astro) and set:

   ```js
   const FORM_ENDPOINT = 'https://formspree.io/f/abcdwxyz';
   ```

3. Commit and push. The form appears automatically — no other changes needed.

Formspree's free tier allows a limited number of submissions per month; check
the current limit before relying on it as the only contact route. Keep the email
address published on the page either way.

> **Before turning the form on**, publish a privacy policy. The form collects
> personal data, and visitors to this site may disclose health information.
> India's Digital Personal Data Protection Act, 2023 applies.

---

## Attaching a custom domain

When a domain such as `pnhindiafoundation.org` is registered, four things
change. Do them together in a single commit, or the site will break in between.

### 1. Point the domain at GitHub

At your domain registrar's DNS settings, add these records:

| Type | Name | Value |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `guptayashu99.github.io.` |

*(These are GitHub's published Pages IP addresses — confirm them against
[GitHub's current documentation](https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site)
at the time you set this up, as they can change.)*

DNS changes can take anywhere from a few minutes to 24 hours to take effect.

### 2. Tell GitHub about the domain

**Settings → Pages → Custom domain**, enter the domain, save. Once the check
passes, tick **Enforce HTTPS**. GitHub issues a free certificate automatically —
this can take up to an hour after DNS resolves, and the tickbox stays greyed out
until then.

### 3. Add a `CNAME` file

Create `public/CNAME` containing only the bare domain, no protocol:

```
pnhindiafoundation.org
```

This keeps the domain setting from being wiped on each deploy.

### 4. Update the site config

In [`astro.config.mjs`](astro.config.mjs):

```js
export default defineConfig({
  site: 'https://pnhindiafoundation.org',
  // delete the `base` line entirely — the site now lives at the domain root
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
```

Then update the sitemap URL in [`public/robots.txt`](public/robots.txt) to match.

Nothing else needs changing: internal links all go through the `url()` helper in
[`src/lib/url.ts`](src/lib/url.ts), which picks up the new base automatically.

> After switching, the old `guptayashu99.github.io/PNHIndiaFoundation` URL
> redirects to the custom domain. Any links already shared keep working.

---

## Troubleshooting

**The site deploys but every page is unstyled and links 404.**
The `base` in `astro.config.mjs` doesn't match the repository name, or `base`
was left in place after moving to a custom domain. These must agree.

**A new page 404s in production but works locally.**
Almost always a hard-coded internal link. Use `url('/path')` instead of
`href="/path"`.

**The workflow fails on "Upload Pages artifact" or with a 404 on deploy.**
**Settings → Pages → Source** is not set to **GitHub Actions**. See step 2 of
the one-time setup.

**Changes don't appear after a successful deploy.**
Browser cache. Hard-reload (Cmd/Ctrl + Shift + R), or check in a private window.

**The build fails with a dependency error in CI but works locally.**
`package-lock.json` was not committed, or is out of date. Run `npm install`,
commit the updated lockfile, and push — CI uses `npm ci`, which builds strictly
from the lockfile.
