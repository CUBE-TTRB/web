#!/bin/sh

set -e

cd /app

echo "Build app"

npm run build

exec "$@"