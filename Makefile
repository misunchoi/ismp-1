.PHONY: up
up:
	@echo "Running containers"
	docker-compose up --build --remove-orphans

.PHONY: test
test: test_backend test_frontend

test_backend:
	@echo "Running backend tests"
	docker-compose build backend
	docker-compose -f ./docker-compose.yml -f ./docker-compose.test.yml run --rm test_backend

test_frontend:
	@echo "Running frontend tests"
	docker-compose build frontend
	docker-compose -f ./docker-compose.yml -f ./docker-compose.test.yml run --rm test_frontend

.PHONY: clean
clean:
	@echo "Cleaning up workdir"
	docker-compose -f ./docker-compose.yml -f ./docker-compose.test.yml down --remove-orphans
