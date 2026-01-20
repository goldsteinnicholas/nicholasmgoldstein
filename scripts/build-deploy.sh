#!/bin/bash
set -e

# Generate RSS feed before building
echo "Generating RSS feed..."
node scripts/generate-rss.js

# Build the project
npm run build

# Run preview server and prerender in a subshell
# This isolates the background process from the main script's job control
(
  npm run preview &
  sleep 3
  npm run prerender || true
  pkill -f 'vite preview' || true
) &

# Wait for subshell to complete prerender
wait

exit 0

