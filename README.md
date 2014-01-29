
#Angular Features [![Build Status](https://travis-ci.org/flaviohenriquealmeida/angular-features.png?branch=master)](https://travis-ci.org/flaviohenriquealmeida/angular-features)

Angular Features is a very small CRUD project that shows what [Angularjs](http://angularjs.org/) is capable of. You can in the app:

- REST endpoints consumed
- custom directives showing nice aspects of this component technology
- output format using build-in filters
- one and two-way data binding (ng-bind vs ng-model)
- arbitrary navigation from controllers ($location)
- route creation and redirects ($routeProvider)
- locale handling
- module creation
- code organization
- Karma test runner
- $cookieStore

##Pre-requisites

You need [Nodejs](nodejs.org) installed in order to run the server. The server don't need a database to run and all modifications will be stored in memory. You also need [Bower](http://bower.io) installed to download the app dependencies. 

##How build

First, you need to download your server and app. I will be using [Grunt](http://gruntjs.com/) to startup our server and to tweak [bower](http://bower.io) dependencies download. Make sure [grunt-cli](https://github.com/gruntjs/grunt-cli) is in your path.

Do a `npm install` in angular-feaures folder. This will bring our server infrastructure dependencies to help startup the server and do some nice livereloading for us.

Finally, you can ask [bower](http://bower.io) to download our app dependencies. Inside `angular-features/src` do:

`bower install`

##How to run
Run `grunt server` from `angular-features` folder and then type `http://localhost:3000/app` from your favorite browser.

To run karma tests, inside `angular-features` folder run:
`sh scripts/test.sh`

##TODO
- increase test coverage
- $cookieStorage example