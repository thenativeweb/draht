'use strict';

var eventEmitter2 = require('eventemitter2');

// There is a bug in the way eventemitter2 exports its content, depending on
// the build context (Node.js, webpack, ...). The details can be found here:
// https://github.com/asyncly/EventEmitter2/issues/146 ... The following line
// acts as a workaround to make things work, no matter what environment you are
// in.
var EventEmitter2 = eventEmitter2.EventEmitter2 || eventEmitter2;

var draht = {};

draht.create = function () {
  var emitter = new EventEmitter2({
    delimiter: '::',
    wildcard: true
  });

  return {
    emit: function emit() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      process.nextTick(function () {
        emitter.emit.apply(emitter, args);
      });
    },
    on: function on() {
      emitter.on.apply(emitter, arguments);
    },
    once: function once() {
      emitter.once.apply(emitter, arguments);
    },
    removeListener: function removeListener() {
      emitter.removeListener.apply(emitter, arguments);
    },
    removeAllListeners: function removeAllListeners() {
      emitter.removeAllListeners.apply(emitter, arguments);
    }
  };
};

var instance = draht.create();

draht.get = function () {
  return instance;
};

module.exports = draht;