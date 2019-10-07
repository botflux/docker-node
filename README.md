# Example app with Docker

## Start

```shell
# Build the docker image
# It build an image from the dockerfile
docker build --tag=node-hello-world .

# Run the container
# Host port 3000 is mapped with container port 80 (exposed in Dockerfile)
# Run in detached mode, it will run in background
docker run -d -p 3000:80 node-hello-world
```

## Stop

```shell
# List running containers
# Copy the container's id
docker container ls

CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                  NAMES
dbb6f81012c8        node-hello-world    "docker-entrypoint.s…"   14 minutes ago      Up 14 minutes       0.0.0.0:3000->80/tcp   confident_swanson


# Stop the container
docker stop dbb6f81012c8
```
