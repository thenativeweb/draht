# eventbus

eventbus provides process-level messaging.

## Installation

At the moment, installation of this module must be made manually.

## Quick start

The first thing you need to do is to integrate eventbus into your application. For that add a reference to the `eventbus` module.

```javascript
var eventbus = require('eventbus');
```

Then, the api is the very same as the api of [EventEmitter2](https://github.com/hij1nx/EventEmitter2).

By default, wildcard events are enabled, and the namespace delimiter is set to `::`.

## Running the tests

Currently, there are no tests.

Nevertheless, this module can be built using [Grunt](http://gruntjs.com/). Grunt analyses the code using [JSHint](http://www.jshint.com/). To run Grunt, go to the folder where you have installed eventbus and run `grunt`. You need to have [grunt-cli](https://github.com/gruntjs/grunt-cli) installed.

    $ grunt