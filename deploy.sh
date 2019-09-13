#!/bin/bash

set -euo pipefail # Bash strict mode: http://redsymbol.net/articles/unofficial-bash-strict-mode/

APP_NAME=toy-do

WEB_IMAGE="registry.heroku.com/${APP_NAME}/web:${TRAVIS_BUILD_NUMBER}"
echo "${HEROKU_API_KEY}" | docker login --username=_ --password-stdin registry.heroku.com

docker image pull "${WEB_IMAGE}"

WEB_IMAGE_ID=$(docker image inspect --format='{{.Id}}' "${WEB_IMAGE}")

heroku config:set --app "${APP_NAME}" NODE_ENV=production

curl -X PATCH "https://api.heroku.com/apps/${APP_NAME}/formation" \
  -H "Content-Type: application/json" \
  -H "Accept: application/vnd.heroku+json; version=3.docker-releases" \
  -H "Authorization: Bearer ${HEROKU_API_KEY}" \
  -d "{\"updates\":[{\"type\":\"web\",\"docker_image\":\"${WEB_IMAGE_ID}\"}]}"
