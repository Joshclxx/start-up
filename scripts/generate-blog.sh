#!/bin/bash
# ─────────────────────────────────────────────────────
# J-Warriors Blog Auto-Generator
# Calls the Gemini API to generate a new programming
# blog post and adds it to the site.
#
# Schedule this to run daily at 10:00 AM via cron:
#   crontab -e
#   0 10 * * * /path/to/start-up/scripts/generate-blog.sh
#
# Or via macOS launchd (see scripts/com.jwarriors.blog.plist)
# ─────────────────────────────────────────────────────

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"

# Load env vars
if [ -f "$PROJECT_DIR/.env.local" ]; then
  export $(grep -v '^#' "$PROJECT_DIR/.env.local" | xargs)
fi

# Base URL — change if deployed
BASE_URL="${BLOG_BASE_URL:-http://localhost:3000}"

echo "[$(date)] Generating new blog post..."
RESPONSE=$(curl -s -X POST "$BASE_URL/api/blog/generate")
echo "[$(date)] Response: $RESPONSE"

# If using a deployed URL, you may want to trigger a rebuild
# e.g.: curl -X POST "https://api.vercel.com/v1/integrations/deploy/..."
