var React = require('react');


var Tabs = React.createClass({
  getInitialState: function () {
    return { selected: 0 };
  },

  handleClick: function (tab) {
    this.setState({selected: tab});
  },

  render: function () {
    var tabs = this.props.tabThings;
    var that = this;
    var selected = Object.keys(this.state.selected).toString();

    return (
    <div>
      <ul> {
        tabs.map(function (tab) {
          var title = Object.keys(tab).toString();
          var strongTitle = <strong>{title}</strong>;
          var content = tab[title];
          return <li key={title}
            onClick={that.handleClick.bind(null, tab)}>
            {selected === title ? strongTitle : title }
            <article>
              {selected === title ? content : "" }
            </article> <br/>
          </li>;
        })
      }
      </ul>
    </div>
    );
  }
});

module.exports = Tabs;
