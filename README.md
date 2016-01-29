# Do it with Docker
## Build this thing's docker image:
(or just use the already published `emarschner/phabricator-file-proxy` image)
```
docker build -t <your username>/phabricator-file-proxy .
```
## Run this thing in docker:
```
export PORT=<port to run on>
export PHAB_HOST=<your phabricator hostname>
export PHAB_SESSION_ID=<a valid session key string for the "phsid" cookie>

docker run -p $PORT:$PORT \
  -e PORT=$PORT \
  -e PHAB_HOST=$PHAB_HOST \
  -e PHAB_SESSION_ID=$PHAB_SESSION_ID \
  -d \
  <your username>/phabricator-file-proxy # or just use emarschner/phabricator-file-proxy
```
## Use it:
Access anything you would get at a URL like:
```
https://<PHAB_HOST>/file/data/*
```
at:
```
http://<your docker hostname & $PORT>/file/data/*
```
# Do it with Heroku
## Deploy this thing on heroku:
```
git push heroku master
```
## Configure that thing's environment variables:
```
heroku config:set \
  PHAB_HOST=<your phabricator hostname> \
  PHAB_SESSION_ID=<a valid session key string for the "phsid" cookie>
```
## Use it:
Access anything you would get at a URL like:
```
https://<PHAB_HOST>/file/data/*
```
at:
```
http://<your heroku thing's host name>/file/data/*
```
