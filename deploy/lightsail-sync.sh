#!/usr/bin/env bash
# Pulls the built site from S3 and copies it into the web folder on Lightsail.
# Run by cron every minute. Safe to run twice at once (uses a lock).
set -euo pipefail
export PATH="/usr/local/bin:/usr/bin:/bin:$PATH"

BUCKET="lakeside-obgyn-website"
REGION="us-east-1"
WEBROOT="${WEBROOT:-/var/www/lakeside}"       # nginx root for lakesideobgyn.org
STAGING="/var/lib/lakeside-site"             # local copy of the bucket
LOG="/var/log/lakeside-sync.log"

mkdir -p "$STAGING"
exec 9>/var/lock/lakeside-sync.lock
flock -n 9 || exit 0                          # another run is still going

# 1) Download changes from S3 into the staging folder.
CHANGES=$(aws s3 sync "s3://$BUCKET" "$STAGING" --delete --region "$REGION" 2>&1) || {
  echo "$(date -u +%FT%TZ) S3 sync FAILED: $CHANGES" >> "$LOG"; exit 1; }

# 2) Only touch the web folder when something changed (or the first run).
if [ -n "$CHANGES" ] || [ ! -f "$WEBROOT/.lakeside-synced" ]; then
  rsync -a --delete --exclude '.well-known' --exclude '.lakeside-synced' "$STAGING"/ "$WEBROOT"/
  date -u +%FT%TZ > "$WEBROOT/.lakeside-synced"
  echo "$(date -u +%FT%TZ) site updated" >> "$LOG"
fi
