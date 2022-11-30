# Weather-Journal App Project

## Overview
An asynchronous web app that uses Web API and user data to dynamically update the UI

## Npm Instructions
- From within the project directory, run
```
npm install
node ./server.js
```
- Open your web browser to [http://localhost:8080/](http://localhost:8080/).

## Docker Instructions

- [Install Docker](https://docs.docker.com/get-docker/)
- From within the project directory, run
```
docker build . -t weather-journal-app:0.1
docker run -p 49160:8080 -d weather-journal-app:0.1
```
- Open your web browser to [http://localhost:49160/](http://localhost:49160/).

## Other Useful Docker commands

- Get your container's name
  
  `docker ps`
- Look at its output

  `docker logs \[container_name\]`
- Follow its output

  `docker logs -f \[container_name\]`
- Kill it
  
  `docker kill \[container_name\]`
- Open up a shell within the container
  
  `docker exec -it \[container_name\] /bin/bash`