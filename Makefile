.PHONY: dev
up:
	@echo "Running containers"
	docker-compose up --build --remove-orphans

.PHONY: test
test_backend:
	@echo "Running backend tests"
	docker-compose build backend
	docker-compose -f ./docker-compose.yml -f ./docker-compose.test.yml run --rm test_backend

test_frontend: build
	@echo "Running frontend tests"
	docker-compose build frontend
	docker-compose -f ./docker-compose.yml -f ./docker-compose.test.yml run --rm test_frontend

.PHONY: clean
clean:
	@echo "Cleaning up workdir"
	$(DOCKER_COMPOSE_ALL) down --remove-orphans
