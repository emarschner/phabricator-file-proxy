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
## Use that thing:
Access anything you would get at a URL like:
```
https://<PHAB_HOST>/file/data/*
```
at:
```
http://<your heroku thing's host name>/file/data/*
```
