var Nuclear = require('nuclear-js');
var toImmutable = Nuclear.toImmutable;
var actionTypes = require('../action_types');

module.exports = new Nuclear.Store({
  getInitialState() {
    return toImmutable({
      todos: [],
    });
  },

  initialize() {
    this.on(actionTypes.ACTION1, doit);
  },
});

function doit(state, payload) {
  return state;
}

