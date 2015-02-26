'use strict';

var EventEmitter2 = require('eventemitter2').EventEmitter2;

var draht = {},
    instance;

draht.create = function () {
  var emitter = new EventEmitter2({
    delimiter: '::',
    wildcard: true
  });

  return {
    emit: function () {
      var args = arguments;
      process.nextTick(function () {
        emitter.emit.apply(emitter, Array.prototype.slice.call(args));
      });
    },

    on: function () {
      emitter.on.apply(emitter, Array.prototype.slice.call(arguments));
    },

    once: function () {
      emitter.once.apply(emitter, Array.prototype.slice.call(arguments));
    },

    removeListener: function () {
      emitter.removeListener.apply(emitter, Array.prototype.slice.call(arguments));
    },

    removeAllListeners: function () {
      emitter.removeAllListeners.apply(emitter, Array.prototype.slice.call(arguments));
    }
  };
};

instance = draht.create();

draht.get = function () {
  return instance;
};

module.exports = draht;
