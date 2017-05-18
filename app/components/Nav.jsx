var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  onSearch: function(e){
    e.preventDefault();
    var location  = this.refs.search.value;
    var encodedLocation = encodeURIComponent(location);
    if(location.length > 0){
      this.refs.search.value = '';
      window.location.hash = `#/?location=${encodedLocation}`;
    }
  },
  render: function(props){
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Timer App</li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Timer</IndexLink>
            </li>
            <li>
              <Link to="/countdown" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Countdown</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <div class="credit">
            <span>Created by <a target="_blank" href="https://github.com/Jantho1990">Josh Anthony</a></span>
          </div>
        </div>
      </div>
    );
  }
})

module.exports = Nav;
