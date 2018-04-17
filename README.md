# Light Node App

## Description

This app is solely used for testing and temporarily serving static files. 

## Getting Started

There are various arguments available to modify the app at runtime.

```bash
$ node app.js [relative filepath] [port]
```

The following are valid ways to run this app: 

* `$ node app.js` --> Starts the app and serves `{"status": "ok"}` at `:3000`
* `$ node app.js 3252` --> Same as above but serves to `:3252` or whatever port is specified
* `$ node app.js ../path/to/index.html` --> Serves the contents of index.html at `:3000`
* `$ node app.js ../path/to/index.html 3256` --> Same as above but serves to `:3256` or whatever port is specified.

__NOTE: The app expects your main html page to be named `index.html` and will not work for any other filename.__

__NOTE: If using pm2 you will need to use the following syntax:__

```bash
$ pm2 start app.js -- [relative filepath] [port]
```