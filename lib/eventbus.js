'use strict';

var EventEmitter2 = require('eventemitter2').EventEmitter2;

var globalBus;

var eventbus = {
  get: function () {
    return globalBus;
  },

  create: function () {
    return new EventEmitter2({
      delimiter: '::',
      wildcard: true
    });
  }
};

globalBus = eventbus.create();

module.exports = eventbus;