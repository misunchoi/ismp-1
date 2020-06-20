#!/bin/bash

set -ex

flake8 . --count --select=E9,F63,F7,F82 --show-source --statistics && \
flake8 . --count --exit-zero --max-complexity=10 --max-line-length=127 --statistics && \
pylint --rcfile=/app/api/pylintrc api && \
python manage.py test api.application_form api.school api.blogpost api.blogpost_content api.mentor
