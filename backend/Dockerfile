FROM python:3.8-slim-buster

WORKDIR /app/api

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Install Dependencies
COPY requirements.txt /app/api/
RUN apt-get update \
    && apt-get install -y --no-install-recommends postgresql-client=11+200+deb10u3 \
    && apt-get install -y --no-install-recommends netcat-openbsd=1.195-2 \
    && apt-get install -y --no-install-recommends libpq-dev=11.7-0+deb10u1 \
    && pip install --upgrade pip \
    && pip install -r requirements.txt \
    && apt remove -y libpq-dev \
    && rm -rf /var/lib/apt/lists/*

# Copy Code
COPY . /app/api/

EXPOSE 8000

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
