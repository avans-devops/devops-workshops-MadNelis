[![Build Angular](https://github.com/avans-devops/devops-workshops-MadNelis/actions/workflows/angular-build.js.yml/badge.svg)](https://github.com/avans-devops/devops-workshops-MadNelis/actions/workflows/angular-build.js.yml) [![Node.js CI Actions Status](https://github.com/avans-devops/devops-workshops-MadNelis/workflows/Node.js%20CI/badge.svg)](https://github.com/avans-devops/devops-workshops-MadNelis/actions)

# DevOps-starter

Dit is de starter github repository voor de DevOps course van Avans Informatica 's Hertogenbosch blok 11 DevOps.

Kijk op de blackboard course om de opdrachten voor deze repository te verbeteren.

## **Docker setup part 1 (Week 3):**
**API**  
In api folder, build image
1. `docker build -t api .`  
// Create the container with live reload
2. ``docker create --network mynetwork -v \`pwd\`:/app -p 3000:3000 --name api --env DB=mongo api npm run dev-server``  
// Start the container
3. `docker start api`

**FRONTEND**  
In frontend folder, build image
1. `docker build -t frontend .`  
// Create container
2. `docker create --network mynetwork -p 4200:4200 --name frontend frontend`  
// Start the container
3. `docker start frontend`

**DATABASE**  
Create the container from standard mongo image. Run from parent folder (or from wherever the data folder is)
1. ``docker create --name mongo --network mynetwork -v `pwd`/data:/data/db -p 27017:27017 mongo``  
// Start the container
2. `docker start mongo`
