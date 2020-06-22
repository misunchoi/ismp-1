#!/bin/bash

echo "Waiting for Postgres to be ready"
for i in `seq 1 15`;
do
  nc -z $DB_HOST $DB_PORT && echo Success && break
  echo -n .
  sleep 1
done

flake8 . --count --select=E9,F63,F7,F82 --show-source --statistics && \
flake8 . --count --exit-zero --max-complexity=10 --max-line-length=127 --statistics && \
pylint --rcfile=/app/api/pylintrc api && \
python manage.py test api.application_form api.school api.blogpost api.blogpost_content api.mentor
