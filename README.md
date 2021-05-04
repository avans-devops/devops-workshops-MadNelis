[![Build Angular](https://github.com/avans-devops/devops-workshops-MadNelis/actions/workflows/angular-build.js.yml/badge.svg)](https://github.com/avans-devops/devops-workshops-MadNelis/actions/workflows/angular-build.js.yml) [![Node.js CI Actions Status](https://github.com/avans-devops/devops-workshops-MadNelis/workflows/Node.js%20CI/badge.svg)](https://github.com/avans-devops/devops-workshops-MadNelis/actions)

# DevOps-starter

Dit is de starter github repository voor de DevOps course van Avans Informatica 's Hertogenbosch blok 11 DevOps.

Kijk op de blackboard course om de opdrachten voor deze repository te verbeteren.

Docker setup:
// In API Folder
1. docker build -t api .
// Create the container with live reload
2. docker create --network mynetwork -v `pwd`:/app -p 3000:3000 --name api --env DB=mongo api npm run dev-server
// Start the container
3. docker start api

// Create the container from standard mongo image
1. docker create --name mongo --network mynetwork -p 27017:27017 mongo
// Start the container
2. docker start mongo

