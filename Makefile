.PHONY: up
up:
	@echo "Running containers"
	docker-compose up --build --remove-orphans

test: test_backend test_frontend

test_backend:
	@echo "Running backend tests"
	docker-compose up -d test_postgres
	docker-compose run --rm \
		-e DEBUG=FALSE \
		-e DB_DATABASE=ismp_test \
		-e DB_HOST=test_postgres \
		-e DB_PASSWORD=test \
		-e DB_PORT='5432' \
		-e DB_USER=ismp \
		-e USE_S3=FALSE \
		-e USE_MAILCHIMP=FALSE \
		-e DJANGO_SECRET_KEY=this_is_not_a_real_secret_key \
		backend \
		/app/api/run_tests.sh

test_frontend:
	@echo "Running frontend tests"
	docker-compose run --rm \
		-e CI=TRUE \
		frontend \
		yarn test

clean:
	@echo "Cleaning up workdir"
	docker-compose down --remove-orphans
	docker-compose -f ./docker-compose.yml -f ./docker-compose.production.yml down --remove-orphans
