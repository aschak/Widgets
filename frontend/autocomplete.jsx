var React = require('react');

var Autocomplete = React.createClass({
  getInitialState: function () {
    return { input: "" };
  },

  handleChange: function (e) {
    this.setState({ input: e.target.value });
  },

  inputCallback: function (name) {
    this.setState({ input: name});
  },

  render: function () {
    var names = this.props.names,
        input = this.state.input.trim().toLowerCase();

    if (input.length > 0) {
      names = names.filter(function (name) {
        return name.toLowerCase().match(input);
      });
    }

    return (
      <section>
        <input type="text"
               value={this.state.input}
               onChange={this.handleChange}
               placeholder="Search For..." />
        <ul>
          {
            names.map(function (name) {
              return(
                <li key={name}
                    onClick={this.inputCallback.bind(null, name)}>
                    {name}
                </li>
              );
            }.bind(this))
          }
        </ul>
      </section>
    );
  }

});

module.exports = Autocomplete;
