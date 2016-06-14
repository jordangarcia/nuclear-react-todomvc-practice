var React = require('react');

// React components can be pure functions of props => DOM, try making the header a pure function
// where all data / onX handlers are passed as props from the parent component
module.exports = function(props) {
  return <header className="header">
    <h1>todos</h1>
    <input className="new-todo" placeholder="What needs to be done?" autofocus="" />
  </header>
};
