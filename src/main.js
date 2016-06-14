var React = require('react');
var ReactDOM = require('react-dom');

var AppContainer = require('./components/AppContainer');

var AppModule = require('./modules/app');

ReactDOM.render(
  <AppContainer />,
  document.getElementById('main')
)

