var React = require('react');
var Reactor = require('../reactor');
var AppModule = require('../modules/app');

// https://optimizely.github.io/nuclear-js/docs/05-hooking-up-to-react.html
module.exports = React.createClass({
  render() {
    var { todos } = this.props;
    return <section className="main">
      <input className="toggle-all" id="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">{todos.map(todo => {
        return <li><div className="view">
            <input className="toggle" type="checkbox" />
              <label>hey</label>
              <button className="destroy"></button>
          </div></li>
      })}</ul>
    </section>
  },
});
