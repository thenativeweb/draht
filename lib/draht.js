'use strict';

const eventEmitter2 = require('eventemitter2');

const EventEmitter2 = eventEmitter2.EventEmitter2 || eventEmitter2;

const draht = {};

draht.create = function () {
  const emitter = new EventEmitter2({
    delimiter: '::',
    wildcard: true
  });

  return {
    emit (...args) {
      process.nextTick(() => {
        emitter.emit(...args);
      });
    },

    on (...args) {
      emitter.on(...args);
    },

    once (...args) {
      emitter.once(...args);
    },

    removeListener (...args) {
      emitter.removeListener(...args);
    },

    removeAllListeners (...args) {
      emitter.removeAllListeners(...args);
    }
  };
};

const instance = draht.create();

draht.get = function () {
  return instance;
};

module.exports = draht;
