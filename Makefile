.PHONY: build up down start stop restart logs login

build:
	docker-compose build

up: 
	docker-compose up -d

upprod: 
	NODE_ENV=production docker-compose up -d

uptest: 
	NODE_ENV=test docker-compose up -d

down:
	docker-compose down

start:
	docker-compose start

stop:
	docker-compose stop

restart: down up

logs:
	docker-compose logs --tail=10 -f

login:
	docker-compose run -w /application node_api /bin/sh

setup:
	docker-compose run -w /application node_api /bin/bash -c "scripts/setup.sh"