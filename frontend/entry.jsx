var React = require('react'),
    ReactDOM = require('react-dom'),
    Widgets = require('./widgets');

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Widgets/>, document.getElementById('root'));
});
