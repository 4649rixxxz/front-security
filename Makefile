build:
	docker-compose build --no-cache --force-rm
up:
	docker-compose up -d 
create-project:
	@make build
	@make up
destroy:
	docker-compose down --rmi all --volumes --remove-orphans
start:
	docker-compose start
stop:
	docker-compose stop
restart:
	@make stop
	@make start
app-exec:
	docker-compose exec app bash