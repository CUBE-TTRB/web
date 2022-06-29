#!/bin/sh

set -e

cd /web

echo "Build web"

npm run build

exec "$@"