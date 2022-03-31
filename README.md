# Cloud-School-Application

Locally for the web page test
Run npm install && npm start
Go to http://localhost:5000 to view welcome message

## Docker image in start branch

Navigate into the root folder
To build Docker image - Type docker 

build -t dockerstart .

To run the Docker image - 

docker run -p 5000:5000 -d dockerstart

## Docker image in feature branch

Build Docker image - Type 

docker build -t docker-feature .

Run the Docker image - 

docker run -p 4000:5000 -d docker-feature


Link to dockerHub https://hub.docker.com/r/jkarage/csa
