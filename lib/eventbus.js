'use strict';

var EventEmitter2 = require('eventemitter2').EventEmitter2;

var eventbus = new EventEmitter2({
  delimiter: '::',
  wildcard: true
});

module.exports = eventbus;