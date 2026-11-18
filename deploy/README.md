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
