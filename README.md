# Description

This is a sample of a development environment to:

1. and debug express.js applications
1. auto reload files when they change
1. make a simple [Angular](http://angularjs.org) page to work

## Debuggers

I tried several debuggers:

1. Built in node debugger
1. Express.js colored debugger
1. [node-inspector](https://github.com/node-inspector/node-inspector)

So far the best on and easy to learn and use is node-inspector, to learn how to use it I found [this](http://youtu.be/03qGA-GJXjI) to be the best 15 minutes video.

In short, debugger lets you inspect variables when a request is done or when server starts.

## Auto reload

You also could want the files to be reloaded as you change them, for that purpose I used [nodemon](http://nodemon.io/).

# Installation

Here are the steps you should be following, things could change over time, and up to date documentation should be easily googled.

1. [Install nvm](https://github.com/creationix/nvm#installation)
1. [Install node](https://github.com/creationix/nvm#usage)
1. Install dependencies `npm i`
1. Install node-inspector `npm i -g node-inspector`
1. Install nodemon `npm i -g nodemon`

# Run

In application folder:

1. You start a server with `node-inspector &`, the `&` makes it to run in background in Linux.
1. `nodemon --debug-brk index.js` or `nodemon --debug index.js` [video](http://youtu.be/03qGA-GJXjI) explains difference.
1. Open debugger console at [http://127.0.0.1:8080/debug?port=5858](http://127.0.0.1:8080/debug?port=5858).
1. Angular basic example should be running at [http://localhost:3000](http://localhost:3000).
