var Reactor = require('../../reactor');

Reactor.registerStores({
  // maybe its best to have a todos list store and a filter value store (much like how we do searching / filtering in our codebase)
  app: require('./stores/app'),
});

Reactor.dispatch('hello')
exports.actions = require('./actions');

exports.getters = require('./getters');
