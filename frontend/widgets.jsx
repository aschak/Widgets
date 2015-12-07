var React = require('react'),
    Autocomplete = require('./autocomplete.jsx');


var searchNames = [
  'Kyle',
  'Kareem',
  'Jon',
  'Bill',
  'Billy',
  'billison',
  'Bob',
  'Bobbby'
];

var Widgets = React.createClass({
  getInitialState: function () {
    return { names: searchNames};
  },
  render: function () {
    return (
      <div>
        <Autocomplete names={searchNames}/>
      </div>
    );
  }
});

module.exports = Widgets;
