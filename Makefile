.PHONY: build run

build:
	docker build -t foxbits/portfolio-cookbook .

run:
	docker compose down
	docker compose up -d
