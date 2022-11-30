# Weather-Journal App Project

## Overview
This project requires you to create an asynchronous web app that uses Web API and user data to dynamically update the UI. 

## Instructions
This will require modifying the `server.js` file and the `website/app.js` file. You can see `index.html` for element references, and once you are finished with the project steps, you can use `style.css` to style your application to customized perfection.

## Extras
If you are interested in testing your code as you go, you can use `tests.js` as a template for writing and running some basic tests for your code.

## Useful Docker commands

docker build . -t weather-journal-app:0.1

docker run -p 49160:8080 -d weather-journal-app:0.1

docker logs cool_moore

docker logs -f cool_moore

docker kill cool_moore

docker exec -it cool_moore /bin/bas

curl -i localhost:49160
