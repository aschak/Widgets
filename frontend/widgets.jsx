var React = require('react'),
    Autocomplete = require('./autocomplete.jsx'),
    WeatherClock = require('./weather_clock.jsx'),
    Tabs = require('./tabs.jsx');


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

var tabThings = [
  {Title: "Content"},
  {Harry: "Potter"},
  {App: "Academy"},
  {SoMuch: "Content"},
  {Never: "Ends"}
];



var Widgets = React.createClass({
  getInitialState: function () {
    return { names: searchNames};
  },
  render: function () {
    return (
      <div>
        <Autocomplete names={searchNames}/>
        <WeatherClock/>
        <Tabs tabThings={tabThings}/>
      </div>
    );
  }
});

module.exports = Widgets;
