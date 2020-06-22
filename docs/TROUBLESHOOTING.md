## Frontend Issues with Missing Packages
If you run into any issues with missing packages while the `frontend` container is running, rebuild the image.
Steps below:

```shell
# Stop the container
docker-compose stop frontend

# Remove the container from disk
docker-compose rm frontend

# Remove dangling volumes
docker volume prune -f

# Rebuild the frontend image and start it back up
docker-compose up frontend --build
```
