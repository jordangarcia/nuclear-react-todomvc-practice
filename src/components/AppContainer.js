var React = require('react');
var Reactor = require('../reactor');
var AppModule = require('../modules/app');

var Header = require('./Header');
var TodoList = require('./TodoList');

// https://optimizely.github.io/nuclear-js/docs/05-hooking-up-to-react.html
module.exports = React.createClass({
  mixins: [Reactor.ReactMixin],

  // the same as `bineVueValues`
  getDataBindings() {
    return {
      // accessible via `this.state.todos`
      todos: AppModule.getters.todos,
    }
  },

  render() {
    var todos = this.state.todos;
    // add fake todos
    todos = ['learn react']
    return <section className="todoapp">
      <Header />
      <TodoList todos={todos} />
    </section>
  },
});
