#!/usr/bin/env bash

set -e

docker-compose -f docker-compose.yml -f docker-compose.production.yml up -d

docker-compose -f docker-compose.yml -f docker-compose.production.yml run \
  --rm \
  load_balancer \
  curl --max-time 5 --retry 10 --retry-connrefused backend:8000/ping/ | grep pong

docker-compose -f docker-compose.yml -f docker-compose.production.yml run \
  --rm \
  load_balancer \
  curl --max-time 5 --retry 10 --retry-connrefused frontend:3000/ping | grep pong

output=$(curl -s --max-time 5 --retry 5 --retry-connrefused localhost:8080/ 2>/dev/null)

echo $output | grep -o "<title>ISMP: International Student Mentorship Program</title>"
