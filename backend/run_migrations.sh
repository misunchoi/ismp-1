#!/bin/bash

echo "Waiting for Postgres to be ready"
for i in `seq 1 15`;
do
  nc -z $DB_HOST $DB_PORT && echo Success && break
  echo -n .
  sleep 1
done

# Apply database migrations
echo "Apply database migrations"
python manage.py migrate

echo "Collecting static files"
python manage.py collectstatic --no-input

# Do different calls to loaddata for fixtures without dependencies. Because
# calls to loaddata are atomic, if we don't do this then one bad fixture will
# stop anything from being loaded into the db.
echo "Load mockup data"
echo "Loading initial blogposts and blogpostcontents"
python manage.py loaddata superuser.json blogpost.json blogpost_content.json

echo "loading mentor information"
python manage.py loaddata mentor.json

echo "loading school information"
python manage.py loaddata school.json

echo "loading topics"
python manage.py loaddata topic.json
