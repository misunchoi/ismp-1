DOCKER_COMPOSE ?= docker-compose -f ./docker-compose.yml
DOCKER_COMPOSE_TEST ?= docker-compose -f ./docker-compose.yml -f ./docker-compose.test.yml
DOCKER_COMPOSE_PULL ?= $(DOCKER_COMPOSE) pull

.PHONY: dev
up: docker_pull
	@echo "Running containers"
	$(DOCKER_COMPOSE) up

.PHONY: test
test: build
	@echo "Running test containers"
	$(DOCKER_COMPOSE_TEST) run --rm test_backend
#	$(DOCKER_COMPOSE_TEST) run --rm test_frontend

.PHONY: docker_pull
docker_pull:
	@echo "Ensuring docker containers are up-to-date"
	$(DOCKER_COMPOSE_PULL)

.PHONY: build
build:
	@echo "Building images"
	$(DOCKER_COMPOSE) build

.PHONY: clean
clean:
	@echo "Cleaning up workdir"
	$(DOCKER_COMPOSE_ALL) down --remove-orphans
