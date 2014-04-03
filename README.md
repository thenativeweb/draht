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

#### Emitting events

To emit an event, call the eventbus's `emit` function and provide the event name as well as its payload as parameters. Optionally, you may specify a callback.

```javascript
bus.emit('foo', { bar: 'baz' }, function () {
  // ...
});
```

*Please note that the `emit` function internally calls `process.nextTick` to make sure that an event is processed asynchronously.*

You can also emit namespaced events. For that, prefix the event name with the namespace name and separate them by using the expression `::`.

```javascript
bus.emit('demo::foo', { bar: 'baz' }, function () {
  // ...
});
```

#### Subscribing to events

To subscribe to an event, call the `on` function and provide the name of the event you want to subscribe to as well as an event handling function.

```javascript
bus.on('demo::foo', function (evt, callback) {
  // ...
});
```

Alternatively you may also use the `once` function to subscribe to an event and have the handler automatically removed afterwards.

```javascript
bus.once('demo::foo', function (evt, callback) {
  // ...
});
```

If you want to receive all events within a specific namespace, you can use the `*` character.

```javascript
bus.on('demo::*', function (evt, callback) {
  // ...
});
```

Nested namespaces are supported as well, but please note that when using wildcards you need to specify them for each namespace level separately. E.g., if you have events in the form `foo::bar::baz` and you would like to subscribe to any event in the `foo` namespace, use `foo::*::*`, not `foo::*`.

#### Unsubscribing from events

From time to time you need to unsubscribe from an event. For this use the `off` function and provide the event name as well as the handler to remove. Please note that in this case you need to provide the very same handler instance to `off` as you previously used.

```javascript
var onFoo = function (evt, callback) {
  // ...
};

bus.on('demo::foo', onFoo);
// ...
bus.off('demo::foo', onFoo);
```

## Running the tests

eventbus has been developed using TDD. To run the tests, go to the folder where you have installed eventbus to and run `npm test`. You need to have [mocha](https://github.com/visionmedia/mocha) installed.

    $ npm test

Additionally, this module can be built using [Grunt](http://gruntjs.com/). Besides running the tests, Grunt also analyses the code using [JSHint](http://www.jshint.com/). To run Grunt, go to the folder where you have installed eventbus and run `grunt`. You need to have [grunt-cli](https://github.com/gruntjs/grunt-cli) installed.

    $ grunt
