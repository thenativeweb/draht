'use strict';

var assert = require('assertthat');

var eventbus = require('../lib/eventbus');

suite('eventbus', function () {
  suite('create', function () {
    test('returns an event emitter.', function (done) {
      var bus = eventbus.create();

      assert.that(bus).is.ofType('object');
      assert.that(bus.on).is.ofType('function');
      assert.that(bus.once).is.ofType('function');
      assert.that(bus.emit).is.ofType('function');
      assert.that(bus.removeListener).is.ofType('function');
      assert.that(bus.removeAllListeners).is.ofType('function');
      done();
    });

    test('does not return the global instance.', function (done) {
      var bus = eventbus.create();

      assert.that(bus).is.not.sameAs(eventbus.get());
      done();
    });

    test('returns a new instance each time.', function (done) {
      var bus1 = eventbus.create(),
          bus2 = eventbus.create();

      assert.that(bus1).is.not.sameAs(bus2);
      done();
    });
  });

  suite('get', function () {
    test('returns an event emitter.', function (done) {
      var bus = eventbus.get();

      assert.that(bus).is.ofType('object');
      assert.that(bus.on).is.ofType('function');
      assert.that(bus.once).is.ofType('function');
      assert.that(bus.emit).is.ofType('function');
      assert.that(bus.removeListener).is.ofType('function');
      assert.that(bus.removeAllListeners).is.ofType('function');
      done();
    });

    test('returns always the very same instance.', function (done) {
      var bus1 = eventbus.get(),
          bus2 = eventbus.get();

      assert.that(bus1).is.sameAs(bus2);
      done();
    });
  });
});
