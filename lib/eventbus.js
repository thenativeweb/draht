'use strict';

var EventEmitter2 = require('eventemitter2').EventEmitter2;

var eventbus = {};

eventbus.create = function () {
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
      emitter.on.apply(emitter, Array.prototype.slice.call(arguments));
    },

    off: function () {
      emitter.on.apply(emitter, Array.prototype.slice.call(arguments));
    }
  };
};

var instance = eventbus.create();
eventbus.get = function () {
  return instance;
};

module.exports = eventbus;
