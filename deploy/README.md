# Lightsail sync (S3 -> Lightsail)

GitHub Actions uploads the built site to S3 (`lakeside-obgyn-website`).
A cron job on the Lightsail server pulls from S3 every minute and copies the files into the web folder.

Files:
- `lightsail-sync.sh`: the sync script (install at `/usr/local/bin/lakeside-sync.sh`).
- `s3-read-only-policy.json`: IAM policy for the read-only user the server uses.

Cron line (root): `* * * * * /usr/local/bin/lakeside-sync.sh`
Log: `/var/log/lakeside-sync.log`
`.well-known` is never deleted (SSL certificate files).

## How the live site is served (checked 2026-11-18)
- `lakesideobgyn.org` and `www.lakesideobgyn.org` point to the Lightsail instance `lakeside-web-01` (static IP 3.220.80.135, Ubuntu 24.04, nginx).
- nginx serves `/var/www/lakeside` (config has SSL by Let's Encrypt/certbot; `/var/www/html` is only used for certbot challenges).
- The bare domain already returns a 301 to `https://www.lakesideobgyn.org` (path kept), for http and https.
- Flow: push to `main` -> GitHub Actions builds and uploads to S3 -> cron on Lightsail (every minute) pulls from S3 into `/var/www/lakeside`.
- Server files: `/usr/local/bin/lakeside-sync.sh`, root crontab, log `/var/log/lakeside-sync.log`, local copy `/var/lib/lakeside-site`, AWS keys of IAM user `lakeside-lightsail-sync` (read-only) in root's AWS config.
- A backup of the old site build is at `/var/www/lakeside.bak` (delete when no longer needed).
- Limits: deploy takes up to about 1 minute after the GitHub run is green. The Lightsail instance is a single server: no CDN.

## Redirects to add in nginx (server blocks for www, inside the 443 server)
The static site can only make a "meta refresh" page. A real 301 must come from nginx:
```
location = /parking/  { return 301 /locations/#visit; }
location = /parking   { return 301 /locations/#visit; }
location = /about/    { return 301 /provider/monica-hannon-md-facog/; }
location = /about     { return 301 /provider/monica-hannon-md-facog/; }
location = /services/perimenopausemenopause-management/ { return 301 /services/perimenopause-menopause-management/; }
```
(and the same idea for any old address that moved, for example /services/laparoscopic-surgery/ -> /services/minimally-invasive-surgery/ and /contactus/ -> /contact/).

## nginx changes for DevOps (fix list 2026-11-18, not done yet)
In `http {}` (or the www `server {}` block):
```
server_tokens off;                                   # hide "nginx/1.24.0 (Ubuntu)"
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
```
In the www 443 `server {}` block (note: a location block with its own add_header drops the server-level ones, so repeat the HSTS line inside each):
```
location ^~ /_astro/ { add_header Cache-Control "public, max-age=31536000, immutable"; add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always; }
location ^~ /images/ { add_header Cache-Control "public, max-age=31536000, immutable"; add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always; }
```
Caution for /images/: files keep their names when a photo is replaced, so a 1 year cache would show old pictures. Use `max-age=2592000` (30 days) unless photos get a new name each time. The HTML keeps a short cache (do not add one for `/`).
Test: `sudo nginx -t && sudo systemctl reload nginx`, then `curl -sI https://www.lakesideobgyn.org/images/hero/bridge-800.webp`.
Also keep the lakeside-sec.conf snippet in mind: it may already set some headers.
