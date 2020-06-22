# Development

## General

### Running a command in a docker container

```shell
docker-compose run --rm <service_name> <cmd>
```

### Starting a shell in a new docker container

```shell
# Create a new container to run a command using a docker image used by a service
docker-compose run --rm frontend /bin/sh
```

## Frontend

### Updating JavaScript Dependencies

```
# After updating package.json, re-build the image
docker-compose stop frontend
docker-compose rm frontend
docker-compose up frontend --build
```
