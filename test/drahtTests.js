'use strict';

var assert = require('assertthat');

var draht = require('../lib/draht');

suite('draht', function () {
  suite('create', function () {
    test('returns an event emitter.', function (done) {
      var bus = draht.create();

      assert.that(bus).is.ofType('object');
      assert.that(bus.on).is.ofType('function');
      assert.that(bus.once).is.ofType('function');
      assert.that(bus.emit).is.ofType('function');
      assert.that(bus.removeListener).is.ofType('function');
      assert.that(bus.removeAllListeners).is.ofType('function');
      done();
    });

    test('does not return the global instance.', function (done) {
      var bus = draht.create();

      assert.that(bus).is.not.sameAs(draht.get());
      done();
    });

    test('returns a new instance each time.', function (done) {
      var bus1 = draht.create(),
          bus2 = draht.create();

      assert.that(bus1).is.not.sameAs(bus2);
      done();
    });
  });

  suite('get', function () {
    test('returns an event emitter.', function (done) {
      var bus = draht.get();

      assert.that(bus).is.ofType('object');
      assert.that(bus.on).is.ofType('function');
      assert.that(bus.once).is.ofType('function');
      assert.that(bus.emit).is.ofType('function');
      assert.that(bus.removeListener).is.ofType('function');
      assert.that(bus.removeAllListeners).is.ofType('function');
      done();
    });

    test('returns always the very same instance.', function (done) {
      var bus1 = draht.get(),
          bus2 = draht.get();

      assert.that(bus1).is.sameAs(bus2);
      done();
    });
  });
});
