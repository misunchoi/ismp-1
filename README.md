# International Student Mentorship Website

The website is built with Django and React.
This is a set up so that we can easily create apps that use Django on the backend (and take advantage of the amazing
admin UI) and React (set up with [`create-react-app`](https://npm.im/create-react-app)) for the front end application.

## Setup
### Full Environment using Conda
Unlike venv which manages `pip` dependencies, [conda](https://docs.conda.io/en/latest/) is a package management system for any dependency (e.g. `postgres`).
1. Install `anaconda` 
    - Macs: `brew cask install anaconda`
1. `conda env create -f environment.yml`
1. Activate this environment `conda activate ismp-website`

### Virtual Env
1. Download [docker](https://docs.docker.com/compose/install/)
2. run `cd backend; `pip3 install -r requirements.txt` to install all the dependencies in the backend

## Development
1. Make your edits in `backend/` or `frontend/`
2. `make up` (Task is defined in `Makefile`)
3. A load_balancer should now be serving the web page at: [http://127.0.0.1:8080](http://127.0.0.1:8080)
  * The routing configuration is in `./load_balancer/nginx.conf` specified by the `location` blocks.
  * You will notice 2 destinations:
    - `http://backend:8000` - the Django Server: Generally serves JSON
    - `http://frontend:3000` - the React Web Server: Serves HTML and assets for the initial page load

## Testing
1. `make test_backend`
2. `make test_frontend`
3. You can also test both at the same time with `make test`

## Contributing
* Please write tests for each pull request.  Be sure to run `make test` to confirm that your contributions are functional.

## Publishing
Images are published to:
* [https://hub.docker.com/r/ismp/frontend](https://hub.docker.com/r/ismp/frontend/tags)
* [https://hub.docker.com/r/ismp/backend](https://hub.docker.com/r/ismp/backend/tags)
