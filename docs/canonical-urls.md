# Canonical URLs and deployment

HTML pages use `https://richmondbarbershop.com/path/`. Files such as
`robots.txt`, `pricing.md`, XML sitemaps, and assets keep their filenames.
Service data, page metadata, structured data, and internal links use the same URLs.

The Docker runtime includes `apache/site.conf`. Its public `ServerName` tells
Apache to generate HTTPS directory-slash redirects even though the hosting
proxy connects to the container over HTTP. It does not enable TLS inside the
container or replace the proxy's existing HTTP-to-HTTPS and www redirects.
The Docker build runs `httpd -t` to validate the configuration.

Deploy a rebuilt Docker image for the server change to take effect. Deploying
only `dist/` will update the pages but will not update Apache. If hosting does
not use this Dockerfile, apply the equivalent directives in its Apache server
configuration, not `.htaccess`.

Local content checks:

```sh
npm run build
node scripts/check-guides.mjs
node scripts/check-canonical-urls.mjs
```

After deployment, check response headers without following redirects:

```sh
curl -I https://richmondbarbershop.com/mens-haircut-richmond-va
curl -I https://richmondbarbershop.com/guides/beard-maintenance
curl -I https://richmondbarbershop.com/mens-haircut-richmond-va/
curl -I http://richmondbarbershop.com/
curl -I https://www.richmondbarbershop.com/
```

The first two should return 301 with the same HTTPS path plus `/` (no HTTP
intermediate). The third should return 200. The final two should continue to
redirect to `https://richmondbarbershop.com/`. Repeat with a query string to
confirm it is preserved. Verify assets and the sitemap still return 200.
An HTTP, slashless request may still have two redirects when the proxy
upgrades the scheme before Apache adds the slash; combining those requires
changing the proxy configuration separately.

Reference: https://httpd.apache.org/docs/2.4/mod/core.html#servername
