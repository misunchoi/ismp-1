# International Student Mentorship Website

The website is built with Django and React.
This is a set up so that we can easily create apps that use Django on the backend (and take advantage of the amazing admin UI) and React (set up with [`create-react-app`](https://npm.im/create-react-app)) for the front end application.


## Setup
### Full Environment using Conda
Unlike venv which manages `pip` dependencies, [conda](https://docs.conda.io/en/latest/) is a package management system for any dependency (e.g. `postgres`).
1. Install `anaconda` 
    1. Macs: `brew cask install anaconda`
1. `conda env create -f environment.yml`
1. Activate this environment `conda activate ismp-website`

### Virtual Env
1. Download [docker](https://docs.docker.com/compose/install/)
2. run `cd backend; `pip3 install -r requirements.txt` to install all the dependencies in the backend

## Development
1. Make your edits in `backend/` or `frontend/`
2. `make up`
3. A load_balancer should now be serving requests and the container port is mapped to port on the host.
  * The load_balancer can be reached at: [http://127.0.0.1:8080](http://127.0.0.1:8080)
  * The routing configuration is in `./load_balancer/nginx.conf` specified by the `location` blocks.
  * You will notice 2 destinations:
    - `http://backend:8000` - the Django Server: Generally serves JSON
    - `http://frontend:3000` - the React Web Server: Serves HTML and assets for the initial page load

## Testing
1. `make test`
1. This will build testing images and run `manage.py test ...` against a list of test targets

## Running Manually
1. `docker-compose pull`
2. `docker-compose up`
3. You can now go to [http://127.0.0.1:8080](http://127.0.0.1:8080)

## Using a dev site
For some people (namely frontend team and people with older laptops), you may wish to use an external dev site for the backend.  To do this, follow these steps:
1. `cd` into `ismp/frontend`
1. `echo 'REACT_APP_API_HOST="http://###.###.###.###:####/'" > .env`, where `###.###.###.###:####` are the host and port to the backend dev site
1. `docker-compose up frontend`
1. Open your browser to `localhost:8080` to view your checkout of the frontend

## Troubleshooting
If you run into any issues with missing packages while the `frontend` container is running,
1. docker-compose stop frontend
2. docker-compose rm frontend
3. docker volume prune -f
4. docker-compose up frontend

## Using `docker-compose run` to issue one-off commands

If you want to run a one-off command, like installing dependencies, you can use the `docker-compose run <service_name> <cmd>`.

For example, to install a Javascript dependency and save that information to `package.json` we could run:
`docker-compose run --rm frontend npm install --save axios`

If you want to be on a shell for one of the Docker services, you can do something like:
`docker-compose run --rm frontend bash`

## Contributing
* Please try to write tests for your work.  Be sure to run `make test` to confirm that your contributions are functional.
