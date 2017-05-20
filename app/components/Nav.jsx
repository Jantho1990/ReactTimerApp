var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  render: function(props){
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Timer App</li>
            <li>
              <IndexLink to="/" activeClassName="active">Timer</IndexLink>
            </li>
            <li>
              <Link to="/countdown" activeClassName="active">Countdown</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <div className="credit">
            <span>Created by <a target="_blank" href="https://github.com/Jantho1990">Josh Anthony</a></span>
          </div>
        </div>
      </div>
    );
  }
})

module.exports = Nav;
