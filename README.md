# eventbus

eventbus provides process-level messaging.

## Installation

At the moment, installation of this module must be made manually.

## Quick start

The first thing you need to do is to integrate eventbus into your application. For that add a reference to the `eventbus` module.

```javascript
var eventbus = require('eventbus');
```

### Accessing the global eventbus

To access the global eventbus, you need to call the `get` function.

```javascript
var bus = eventbus.get();
```

Each time you call the `get` function, you get the very same instance of the eventbus.

### Creating your own eventbus

If you need your own eventbus channel, call the `create` function.

```javascript
var bus = eventbus.create();
```

Each time you call the `create` function, you get a new eventbus instance.

### Using an eventbus

Using an eventbus is quite simple, as the api is the very same as the api of [EventEmitter2](https://github.com/hij1nx/EventEmitter2).

By default, wildcard events are enabled, and the namespace delimiter is set to `::`.

## Running the tests

eventbus has been developed using TDD. To run the tests, go to the folder where you have installed eventbus to and run `npm test`. You need to have [mocha](https://github.com/visionmedia/mocha) installed.

    $ npm test

Additionally, this module can be built using [Grunt](http://gruntjs.com/). Besides running the tests, Grunt also analyses the code using [JSHint](http://www.jshint.com/). To run Grunt, go to the folder where you have installed eventbus and run `grunt`. You need to have [grunt-cli](https://github.com/gruntjs/grunt-cli) installed.

    $ grunt
