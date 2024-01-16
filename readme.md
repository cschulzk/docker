# Docker 
## Welcome
I'm by no means an expert in using docker and frequently need to read the docs and google how to do things. This is just a place to share some examples and resources for using docker.

This example uses a simple API and a simple counter service as examples. The content on these files is not important nor the point of this repository. Along the same vein, I used the Bun runtime for javascript within these docker containers because it sounded fun and this small corner of the internet is under my control.

## Dockerfile
Dockerfile documentation: https://docs.docker.com/engine/reference/builder/ 

## Docker Compose
Docker compose files are useful for coordinating multiple docker containers. 

Docker compose documentation: https://docs.docker.com/compose/ 

To build the services in the docker compose file run the command `docker compose up -d` (on windows it needs to be `docker-compose up -d`) in the directory with the `docker-compose.yml` file who want to build. 

### services
I'll get around to writing an explanation here at some point.

### networks
I'll get around to writing an explanation here at some point.

