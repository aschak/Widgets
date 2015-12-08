var React = require('react');

var WeatherClock = React.createClass({
  getInitialState: function () {
    return {date: new Date(), location: null, weather: null };
  },

  componentDidMount: function () {
    this.clock = setInterval(this.tick, 1000);

    navigator.geolocation.getCurrentPosition(function (pos) {
      this.setState({location: pos});
      this.weatherify();
    }.bind(this));
  },

  componentWillUnmount: function () {
    clearInterval(this.clock);
  },

  weatherify: function () {
    var xmlhttp = new XMLHttpRequest();
    var that = this;

    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
        if(xmlhttp.status == 200){
          that.setState({weather: JSON.parse(xmlhttp.response)});
        } else {
          alert('something else other than 200 was returned');
        }
      }
    };

    var lat = this.state.location.coords.latitude;
    var lon = this.state.location.coords.longitude;
    var apiKey = "645c5d39c7603f17e23fcaffcea1a3c1";
    var url = "http://api.openweathermap.org/data/2.5/weather";
    var query = "?lat=" + lat + "&lon=" + lon + "&APPID=" + apiKey;

     xmlhttp.open("GET", url + query, true);
     xmlhttp.send();
  },

  tick: function () {
    var seconds = this.state.date.getSeconds();
    var newTime = this.state.date.setSeconds(seconds + 1);
    this.setState({date: new Date(newTime)});
  },

  render: function () {
    if (this.state.weather) {
      var parsedWeather = this.state.weather.weather[0].description.toUpperCase();
      parsedWeather += ", Temp: " +
        Math.floor(this.state.weather.main.temp - 273) +
        " degrees Celsius";
    } else {
      var parsedWeather = "Gathering Weather";
    }

    return (
      <p>
        {this.state.date.toString()}
        <br/>
        {parsedWeather}
      </p>
    );
  }
});

module.exports = WeatherClock;
